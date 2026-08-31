<?php

namespace FM\ElfinderBundle\Tests\Controller;

use Exception;
use FM\ElfinderBundle\Controller\ElFinderController;
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use FM\ElfinderBundle\Exception\UploadConfigurationException;
use FM\ElfinderBundle\Loader\ElFinderLoaderInterface;
use FM\ElfinderBundle\Loader\ElFinderUploadLoaderInterface;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Twig\Environment;

class ElFinderControllerTest extends TestCase
{
    #[DataProvider('invalidHomeFolderProvider')]
    public function testShowRejectsInvalidHomeFolderAtControllerBoundary(string $homeFolder): void
    {
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            [],
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $this->expectException(BadRequestHttpException::class);
        $this->expectExceptionMessage('Invalid home folder path.');

        $controller->show(Request::create('/elfinder/default'), 'default', $homeFolder);
    }

    public static function invalidHomeFolderProvider(): array
    {
        return [
            'parent directory'        => ['../private'],
            'nested parent directory' => ['articles/../private'],
            'current directory'       => ['./articles'],
            'backslash'               => ['articles\\private'],
            'empty segment'           => ['articles//private'],
            'leading slash'           => ['/articles'],
            'trailing slash'          => ['articles/'],
            'NUL byte'                => ["articles\0private"],
        ];
    }

    public function testLoadRejectsInvalidHomeFolderAtControllerBoundaryBeforeInitializingConnector(): void
    {
        $loader = $this->createMock(ElFinderLoaderInterface::class);
        $loader->expects(self::never())->method('initBridge');
        $loader->expects(self::never())->method('load');

        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            [],
            $loader
        );

        $this->expectException(BadRequestHttpException::class);
        $this->expectExceptionMessage('Invalid home folder path.');

        $controller->load(
            $this->createStub(SessionInterface::class),
            $this->createStub(HttpKernelInterface::class),
            new EventDispatcher(),
            Request::create('/efconnect/default'),
            'default',
            '../private'
        );
    }

    public function testLoadDispatchesEventsAroundCommandAndReturnsModifiedResult(): void
    {
        $calls          = [];
        $initialization = [];
        $request        = Request::create('/efconnect/default/articles', 'GET', ['cmd' => 'open']);
        $parameters     = ['instances' => ['default' => []]];
        $loader         = $this->createMock(ElFinderLoaderInterface::class);
        $session        = $this->createStub(SessionInterface::class);

        $loader->expects(self::once())
            ->method('setSession')
            ->with($session)
            ->willReturnCallback(static function () use (&$initialization): void {
                $initialization[] = 'session';
            });
        $loader->expects(self::once())
            ->method('initBridge')
            ->with('default', $parameters)
            ->willReturnCallback(static function () use (&$initialization): void {
                self::assertSame(['session'], $initialization);
                $initialization[] = 'bridge';
            });
        $loader->expects(self::once())
            ->method('load')
            ->with($request)
            ->willReturnCallback(static function () use (&$calls): array {
                self::assertSame(['pre'], $calls);
                $calls[] = 'load';

                return ['cwd' => ['name' => 'original']];
            });

        $dispatcher = new EventDispatcher();
        $dispatcher->addListener(
            ElFinderPreExecutionEvent::class,
            static function (ElFinderPreExecutionEvent $event) use (&$calls, $request): void {
                self::assertSame($request, $event->getRequest());
                self::assertSame('default', $event->getInstance());
                self::assertSame('articles', $event->getHomeFolder());
                $calls[] = 'pre';
            }
        );
        $dispatcher->addListener(
            ElFinderPostExecutionEvent::class,
            static function (ElFinderPostExecutionEvent $event) use (&$calls, $request): void {
                self::assertSame(['pre', 'load'], $calls);
                self::assertSame($request, $event->getRequest());
                self::assertSame('default', $event->getInstance());
                self::assertSame('articles', $event->getHomeFolder());
                self::assertSame(['cwd' => ['name' => 'original']], $event->getResult());

                $calls[] = 'post';
                $event->setResult(['cwd' => ['name' => 'modified']]);
            }
        );

        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $parameters,
            $loader
        );

        $response = $controller->load(
            $session,
            $this->createStub(HttpKernelInterface::class),
            $dispatcher,
            $request,
            'default',
            'articles'
        );

        self::assertSame(['pre', 'load', 'post'], $calls);
        self::assertSame(['session', 'bridge'], $initialization);
        self::assertSame(
            ['cwd' => ['name' => 'modified']],
            json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR)
        );
    }

    public function testUploadRejectsMissingFile(): void
    {
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $response = $controller->upload(
            $this->createStub(SessionInterface::class),
            $this->createStub(HttpKernelInterface::class),
            new EventDispatcher(),
            Request::create('/efupload/default', 'POST'),
            'default',
            ''
        );

        self::assertSame(400, $response->getStatusCode());
        self::assertSame([
            'uploaded' => 0,
            'error'    => ['message' => 'No upload file was provided.'],
        ], json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR));
    }

    public function testUploadRejectsInvalidUploadedFile(): void
    {
        $file   = new UploadedFile('', 'photo.png', 'image/png', UPLOAD_ERR_INI_SIZE, true);
        $loader = $this->createStubForIntersectionOfInterfaces([
            ElFinderLoaderInterface::class,
            ElFinderUploadLoaderInterface::class,
        ]);
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $loader
        );

        $response = $controller->upload(
            $this->createStub(SessionInterface::class),
            $this->createStub(HttpKernelInterface::class),
            new EventDispatcher(),
            Request::create('/efupload/default', 'POST', [], [], ['upload' => $file]),
            'default',
            ''
        );

        self::assertSame(400, $response->getStatusCode());
        self::assertSame('No valid upload file was provided.', $this->decodeResponse($response)['error']['message']);
    }

    public function testUploadRejectsUnsupportedCustomLoader(): void
    {
        $file       = $this->createTestUpload();
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        try {
            $response = $controller->upload(
                $this->createStub(SessionInterface::class),
                $this->createStub(HttpKernelInterface::class),
                new EventDispatcher(),
                Request::create('/efupload/default', 'POST', [], [], ['upload' => $file]),
                'default',
                ''
            );

            self::assertSame(400, $response->getStatusCode());
            self::assertSame('The configured loader does not support uploads.', $this->decodeResponse($response)['error']['message']);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadRejectsUnknownInstance(): void
    {
        $file   = $this->createTestUpload();
        $loader = $this->createStubForIntersectionOfInterfaces([
            ElFinderLoaderInterface::class,
            ElFinderUploadLoaderInterface::class,
        ]);
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $loader
        );

        try {
            $response = $controller->upload(
                $this->createStub(SessionInterface::class),
                $this->createStub(HttpKernelInterface::class),
                new EventDispatcher(),
                Request::create('/efupload/unknown', 'POST', [], [], ['upload' => $file]),
                'unknown',
                ''
            );

            self::assertSame(404, $response->getStatusCode());
            self::assertSame('Instance not found.', $this->decodeResponse($response)['error']['message']);
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadDispatchesEventsAndTranslatesPostProcessedSuccess(): void
    {
        $calls   = [];
        $file    = $this->createTestUpload();
        $request = Request::create('/efupload/default/articles', 'POST', [], [], ['upload' => $file]);
        $loader  = $this->createMockForIntersectionOfInterfaces([
            ElFinderLoaderInterface::class,
            ElFinderUploadLoaderInterface::class,
        ]);
        $loader->expects(self::once())->method('setSession');
        $loader->expects(self::once())->method('initBridge')->with('default', $this->editorParameters('ckeditor'));
        $loader->expects(self::once())->method('upload')->with($file)->willReturnCallback(
            static function () use (&$calls): array {
                self::assertSame(['pre'], $calls);
                $calls[] = 'upload';

                return [
                    'added'     => [['name' => 'photo.png', 'hash' => 'l1_photo']],
                    'uploadUrl' => '/uploads/photo.png',
                ];
            }
        );
        $dispatcher = new EventDispatcher();
        $dispatcher->addListener(ElFinderPreExecutionEvent::class, static function (ElFinderPreExecutionEvent $event) use (&$calls, $request, $file): void {
            self::assertSame($request, $event->getRequest());
            self::assertSame('upload', $event->getCommand());
            self::assertSame($file, $event->getRequest()->files->get('upload'));
            $calls[] = 'pre';
        });
        $dispatcher->addListener(ElFinderPostExecutionEvent::class, static function (ElFinderPostExecutionEvent $event) use (&$calls): void {
            self::assertSame(['pre', 'upload'], $calls);
            $calls[] = 'post';
            $event->setResult([
                'added'     => [['name' => 'renamed.png', 'hash' => 'l1_renamed']],
                'uploadUrl' => '/uploads/renamed.png',
            ]);
        });
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $loader
        );

        try {
            $response = $controller->upload(
                $this->createStub(SessionInterface::class),
                $this->createStub(HttpKernelInterface::class),
                $dispatcher,
                $request,
                'default',
                'articles'
            );

            self::assertSame(['pre', 'upload', 'post'], $calls);
            self::assertSame(200, $response->getStatusCode());
            self::assertSame([
                'uploaded' => 1,
                'fileName' => 'renamed.png',
                'url'      => '/uploads/renamed.png',
            ], $this->decodeResponse($response));
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testUploadReturnsHandledElFinderFailureWithHttp200(): void
    {
        $response = $this->uploadWithLoaderResult(['error' => ['File type is not allowed.']]);

        self::assertSame(200, $response->getStatusCode());
        self::assertSame([
            'uploaded' => 0,
            'error'    => ['message' => 'File type is not allowed.'],
        ], $this->decodeResponse($response));
    }

    public function testUploadReturnsSuccessfulRenameWarning(): void
    {
        $response = $this->uploadWithLoaderResult([
            'added'     => [['name' => 'photo-1.png', 'hash' => 'l1_photo']],
            'uploadUrl' => '/uploads/photo-1.png',
            'warning'   => ['The file was renamed.'],
        ]);

        self::assertSame([
            'uploaded' => 1,
            'fileName' => 'photo-1.png',
            'url'      => '/uploads/photo-1.png',
            'error'    => ['message' => 'The file was renamed.'],
        ], $this->decodeResponse($response));
    }

    public function testUploadReturnsConfigurationFailureWithHttp400(): void
    {
        $file   = $this->createTestUpload();
        $loader = $this->createStubForIntersectionOfInterfaces([
            ElFinderLoaderInterface::class,
            ElFinderUploadLoaderInterface::class,
        ]);
        $loader->method('upload')->willThrowException(
            new UploadConfigurationException('CKEditor uploads require exactly one readable volume.')
        );
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $loader
        );

        try {
            $response = $controller->upload(
                $this->createStub(SessionInterface::class),
                $this->createStub(HttpKernelInterface::class),
                new EventDispatcher(),
                Request::create('/efupload/default', 'POST', [], [], ['upload' => $file]),
                'default',
                ''
            );

            self::assertSame(400, $response->getStatusCode());
            self::assertSame(
                'CKEditor uploads require exactly one readable volume.',
                $this->decodeResponse($response)['error']['message']
            );
        } finally {
            unlink($file->getPathname());
        }
    }

    public function testRendersTinyMCE5Editor(): void
    {
        $twig = $this->createMock(Environment::class);
        $twig->expects(self::once())
            ->method('render')
            ->with(
                '@FMElfinder/Elfinder/tinymce5.html.twig',
                self::callback(static fn (array $parameters): bool => 'default' === $parameters['instance'] &&
                    'articles' === $parameters['homeFolder'] &&
                    'en' === $parameters['locale']
                )
            )
            ->willReturn('tinymce5 manager');

        $controller = new ElFinderController(
            $twig,
            [
                'assets_path' => 'assets',
                'instances'   => [
                    'default' => [
                        'editor'             => 'tinymce5',
                        'locale'             => 'en',
                        'fullscreen'         => true,
                        'relative_path'      => true,
                        'path_prefix'        => '/',
                        'theme'              => 'smoothness',
                        'visible_mime_types' => [],
                    ],
                ],
            ],
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $response = $controller->show(
            Request::create('/elfinder/default/articles'),
            'default',
            'articles'
        );

        self::assertSame('tinymce5 manager', $response->getContent());
    }

    public function testRendersCallbackEditorWithConfiguredSelectionContract(): void
    {
        $twig = $this->createMock(Environment::class);
        $twig->expects(self::once())
            ->method('render')
            ->with(
                '@FMElfinder/Elfinder/callback.html.twig',
                self::callback(static fn (array $parameters): bool => 'App.media.onSelect' === $parameters['callbackFunction'] &&
                    true === $parameters['multiple'] &&
                    true === $parameters['relative_path'] &&
                    '/media/' === $parameters['pathPrefix']
                )
            )
            ->willReturn('callback manager');

        $controller = new ElFinderController(
            $twig,
            $this->editorParameters('callback', [
                'callback_function' => 'App.media.onSelect',
                'multiple'          => true,
                'path_prefix'       => '/media/',
            ]),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $response = $controller->show(Request::create('/elfinder/default'), 'default', '');

        self::assertSame('callback manager', $response->getContent());
    }

    public function testCallbackEditorRequiresConfiguredFunction(): void
    {
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('callback', ['callback_function' => null]),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $this->expectException(Exception::class);
        $this->expectExceptionMessage('callback_function');

        $controller->show(Request::create('/elfinder/default'), 'default', '');
    }

    #[DataProvider('invalidCallbackFunctionProvider')]
    public function testCallbackEditorRejectsInvalidFunctionPath(string $callbackFunction): void
    {
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('callback', ['callback_function' => $callbackFunction]),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $this->expectException(Exception::class);
        $this->expectExceptionMessage('valid dotted JavaScript path');

        $controller->show(Request::create('/elfinder/default'), 'default', '');
    }

    public static function invalidCallbackFunctionProvider(): array
    {
        return [
            'bracket notation'     => ['App["media"].onSelect'],
            'prototype traversal' => ['__proto__.toString'],
        ];
    }

    #[DataProvider('formMultipleOverrideProvider')]
    public function testFormEditorAcceptsStrictMultipleOverride(?string $queryValue, bool $expected): void
    {
        $twig = $this->createMock(Environment::class);
        $twig->expects(self::once())
            ->method('render')
            ->with(
                '@FMElfinder/Elfinder/elfinder_type.html.twig',
                self::callback(static fn (array $parameters): bool => $expected === $parameters['multiple'])
            )
            ->willReturn('form manager');
        $controller = new ElFinderController(
            $twig,
            $this->editorParameters('form', ['multiple' => true]),
            $this->createStub(ElFinderLoaderInterface::class)
        );
        $query = null === $queryValue ? [] : ['multiple' => $queryValue];

        $controller->show(Request::create('/elfinder/default', 'GET', $query), 'default', '');
    }

    public static function formMultipleOverrideProvider(): array
    {
        return [
            'instance setting' => [null, true],
            'explicit false'   => ['0', false],
            'explicit true'    => ['1', true],
        ];
    }

    #[DataProvider('invalidMultipleOverrideProvider')]
    public function testFormEditorRejectsInvalidMultipleOverride(string $queryValue): void
    {
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('form', ['multiple' => false]),
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $this->expectException(BadRequestHttpException::class);
        $this->expectExceptionMessage('must be 0 or 1');

        $controller->show(
            Request::create('/elfinder/default', 'GET', ['multiple' => $queryValue]),
            'default',
            ''
        );
    }

    public static function invalidMultipleOverrideProvider(): array
    {
        return [
            'word'   => ['true'],
            'number' => ['2'],
        ];
    }

    public function testRendersEditorWithNestedUnicodeHomeFolderUnchanged(): void
    {
        $homeFolder = 'новости/Article drafts/v1.2';
        $twig       = $this->createMock(Environment::class);
        $twig->expects(self::once())
            ->method('render')
            ->with(
                '@FMElfinder/Elfinder/tinymce5.html.twig',
                self::callback(static fn (array $parameters): bool => $homeFolder === $parameters['homeFolder'])
            )
            ->willReturn('tinymce5 manager');

        $controller = new ElFinderController(
            $twig,
            [
                'assets_path' => 'assets',
                'instances'   => [
                    'default' => [
                        'editor'             => 'tinymce5',
                        'locale'             => 'en',
                        'fullscreen'         => true,
                        'relative_path'      => true,
                        'path_prefix'        => '/',
                        'theme'              => 'smoothness',
                        'visible_mime_types' => [],
                    ],
                ],
            ],
            $this->createStub(ElFinderLoaderInterface::class)
        );

        $response = $controller->show(
            Request::create('/elfinder/default'),
            'default',
            $homeFolder
        );

        self::assertSame('tinymce5 manager', $response->getContent());
    }

    private function editorParameters(string $editor, array $overrides = []): array
    {
        return [
            'assets_path' => 'assets',
            'instances'   => [
                'default' => array_replace([
                    'editor'             => $editor,
                    'editor_template'    => null,
                    'callback_function'  => null,
                    'multiple'           => false,
                    'locale'             => 'en',
                    'fullscreen'         => true,
                    'relative_path'      => true,
                    'path_prefix'        => '/',
                    'theme'              => 'smoothness',
                    'visible_mime_types' => [],
                ], $overrides),
            ],
        ];
    }

    private function uploadWithLoaderResult(array $result): JsonResponse
    {
        $file   = $this->createTestUpload();
        $loader = $this->createStubForIntersectionOfInterfaces([
            ElFinderLoaderInterface::class,
            ElFinderUploadLoaderInterface::class,
        ]);
        $loader->method('upload')->willReturn($result);
        $controller = new ElFinderController(
            $this->createStub(Environment::class),
            $this->editorParameters('ckeditor'),
            $loader
        );

        try {
            return $controller->upload(
                $this->createStub(SessionInterface::class),
                $this->createStub(HttpKernelInterface::class),
                new EventDispatcher(),
                Request::create('/efupload/default', 'POST', [], [], ['upload' => $file]),
                'default',
                ''
            );
        } finally {
            unlink($file->getPathname());
        }
    }

    private function createTestUpload(): UploadedFile
    {
        $path = tempnam(sys_get_temp_dir(), 'fm_elfinder_controller_upload_');
        file_put_contents($path, 'image');

        return new UploadedFile($path, 'photo.png', 'image/png', UPLOAD_ERR_OK, true);
    }

    private function decodeResponse(JsonResponse $response): array
    {
        return json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR);
    }
}
