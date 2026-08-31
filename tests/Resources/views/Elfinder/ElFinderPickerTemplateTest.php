<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Tests\Resources\views\Elfinder;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Twig\TwigFunction;

final class ElFinderPickerTemplateTest extends TestCase
{
    #[DataProvider('pickerTemplateProvider')]
    public function testCallbackAdapterUsesConfiguredAssetsPrefix(
        string $template,
        array $extraVariables,
        string $prefix,
        string $expectedUrl
    ): void
    {
        $loader = new FilesystemLoader();
        $loader->addPath(dirname(__DIR__, 4) . '/src/Resources/views', 'FMElfinder');
        $twig = new Environment($loader);
        $twig->addFunction(new TwigFunction('asset', static fn (string $path): string => $path));
        $twig->addFunction(new TwigFunction('path', static fn (string $route): string => '/' . $route));
        $twig->addGlobal('app', (object) [
            'request' => (object) ['schemeAndHttpHost' => 'https://example.test'],
        ]);

        $html = $twig->render($template, array_merge([
            'prefix'        => $prefix,
            'instance'      => 'default',
            'homeFolder'    => '',
            'locale'        => 'en',
            'onlyMimes'     => '[]',
            'multiple'      => false,
            'relative_path' => false,
            'pathPrefix'    => '/',
            'theme'         => 'smoothness',
        ], $extraVariables));

        self::assertStringContainsString(
            sprintf('src="%s"', $expectedUrl),
            $html
        );
    }

    public static function pickerTemplateProvider(): array
    {
        return [
            'callback editor with CDN prefix' => [
                '@FMElfinder/Elfinder/callback.html.twig',
                ['callbackFunction' => 'App.media.onSelect'],
                '/cdn',
                '/cdn/bundles/fmelfinder/js/elfinderCallback.js',
            ],
            'callback editor with root prefix' => [
                '@FMElfinder/Elfinder/callback.html.twig',
                ['callbackFunction' => 'App.media.onSelect'],
                '/',
                '/bundles/fmelfinder/js/elfinderCallback.js',
            ],
            'form editor with CDN prefix' => [
                '@FMElfinder/Elfinder/elfinder_type.html.twig',
                ['id' => 'media'],
                '/cdn',
                '/cdn/bundles/fmelfinder/js/elfinderCallback.js',
            ],
            'form editor with root prefix' => [
                '@FMElfinder/Elfinder/elfinder_type.html.twig',
                ['id' => 'media'],
                '/',
                '/bundles/fmelfinder/js/elfinderCallback.js',
            ],
        ];
    }
}
