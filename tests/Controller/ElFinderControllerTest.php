<?php

namespace FM\ElfinderBundle\Tests\Controller;

use FM\ElfinderBundle\Controller\ElFinderController;
use FM\ElfinderBundle\Loader\ElFinderLoaderInterface;
use PHPUnit\Framework\Attributes\CoversNothing;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Twig\Environment;

#[CoversNothing]
class ElFinderControllerTest extends TestCase
{
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
}
