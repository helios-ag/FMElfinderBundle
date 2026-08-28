<?php

namespace FM\ElfinderBundle\Tests\Controller;

use FM\ElfinderBundle\Controller\ElFinderController;
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use FM\ElfinderBundle\Loader\ElFinderLoaderInterface;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Symfony\Component\EventDispatcher\EventDispatcher;
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
        $calls      = [];
        $request    = Request::create('/efconnect/default/articles', 'GET', ['cmd' => 'open']);
        $parameters = ['instances' => ['default' => []]];
        $loader     = $this->createMock(ElFinderLoaderInterface::class);

        $loader->expects(self::once())
            ->method('initBridge')
            ->with('default', $parameters);
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
            $this->createStub(SessionInterface::class),
            $this->createStub(HttpKernelInterface::class),
            $dispatcher,
            $request,
            'default',
            'articles'
        );

        self::assertSame(['pre', 'load', 'post'], $calls);
        self::assertSame(
            ['cwd' => ['name' => 'modified']],
            json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR)
        );
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
            $this->createMock(ElFinderLoaderInterface::class)
        );

        $response = $controller->show(
            Request::create('/elfinder/default/articles'),
            'default',
            'articles'
        );

        self::assertSame('tinymce5 manager', $response->getContent());
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
}
