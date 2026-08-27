<?php

namespace FM\ElfinderBundle\Tests\Routing;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;

class RoutingTest extends TestCase
{
    #[DataProvider('nestedHomeFolderRouteProvider')]
    public function testNestedHomeFolderMatches(string $path, string $route): void
    {
        $parameters = $this->createMatcher()->match($path);

        self::assertSame($route, $parameters['_route']);
        self::assertSame('images', $parameters['instance']);
        self::assertSame('body/articles/criteres_memes', $parameters['homeFolder']);
    }

    public static function nestedHomeFolderRouteProvider(): array
    {
        return [
            'connector' => ['/efconnect/images/body/articles/criteres_memes', 'ef_connect'],
            'manager'   => ['/elfinder/images/body/articles/criteres_memes', 'elfinder'],
        ];
    }

    #[DataProvider('malformedHomeFolderRouteProvider')]
    public function testMalformedHomeFolderSlashShapeDoesNotMatch(string $path): void
    {
        $this->expectException(ResourceNotFoundException::class);

        $this->createMatcher()->match($path);
    }

    public static function malformedHomeFolderRouteProvider(): array
    {
        return [
            'connector leading slash'  => ['/efconnect/images//articles'],
            'connector trailing slash' => ['/efconnect/images/articles/'],
            'connector double slash'   => ['/efconnect/images/articles//private'],
            'manager leading slash'    => ['/elfinder/images//articles'],
            'manager trailing slash'   => ['/elfinder/images/articles/'],
            'manager double slash'     => ['/elfinder/images/articles//private'],
        ];
    }

    private function createMatcher(): UrlMatcher
    {
        $loader = new YamlFileLoader(new FileLocator(__DIR__ . '/../../src/Resources/config'));

        return new UrlMatcher($loader->load('routing.yaml'), new RequestContext());
    }
}
