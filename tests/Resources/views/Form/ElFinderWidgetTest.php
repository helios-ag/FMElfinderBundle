<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Tests\Resources\views\Form;

use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\ArrayLoader;
use Twig\Loader\ChainLoader;
use Twig\Loader\FilesystemLoader;
use Twig\TwigFunction;

final class ElFinderWidgetTest extends TestCase
{
    public function testWidgetPassesFieldIdAndMultipleModeToPicker(): void
    {
        $html = $this->renderWidget(true);

        self::assertStringContainsString('/elfinder/default/articles?id=media&multiple=1', $html);
        self::assertStringNotContainsString("console.warn('Test')", $html);
    }

    public function testWidgetKeepsDeprecatedSetValueShimForOverriddenPickerTemplates(): void
    {
        self::assertStringContainsString('function setValue', $this->renderWidget(true));
    }

    public function testWidgetPassesSingleModeToPicker(): void
    {
        self::assertStringContainsString(
            '/elfinder/default/articles?id=media&multiple=0',
            $this->renderWidget(false)
        );
    }

    private function renderWidget(bool $multiple): string
    {
        $filesystem = new FilesystemLoader();
        $filesystem->addPath(dirname(__DIR__, 4) . '/src/Resources/views', 'FMElfinder');
        $array = new ArrayLoader([
            'widget.html.twig' => <<<'TWIG'
                {% use '@FMElfinder/Form/elfinder_widget.html.twig' %}
                {% block widget_attributes %}id="{{ id }}"{% endblock %}
                {{ block('elfinder_widget') }}
                TWIG,
        ]);
        $twig = new Environment(new ChainLoader([$array, $filesystem]));
        $twig->addFunction(new TwigFunction('path', static function (string $route, array $parameters): string {
            self::assertSame('elfinder', $route);
            $path = sprintf('/elfinder/%s/%s', $parameters['instance'], $parameters['homeFolder']);
            unset($parameters['instance'], $parameters['homeFolder']);

            return $path . ([] !== $parameters ? '?' . http_build_query($parameters) : '');
        }));

        return $twig->render('widget.html.twig', [
            'value'      => '',
            'enable'     => true,
            'instance'   => 'default',
            'homeFolder' => 'articles',
            'id'         => 'media',
            'multiple'   => $multiple,
        ]);
    }
}
