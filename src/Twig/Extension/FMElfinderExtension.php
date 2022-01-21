<?php

namespace FM\ElfinderBundle\Twig\Extension;

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FMElfinderExtension extends AbstractExtension
{
    protected Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * {@inheritdoc}
     *
     * @return array
     */
    public function getFunctions()
    {
        $options = ['is_safe' => ['html']];

        return [
            new TwigFunction('elfinder_tinymce_init', [$this, 'tinymce'], $options),
            new TwigFunction('elfinder_tinymce_init4', [$this, 'tinymce4'], $options),
            new TwigFunction('elfinder_tinymce_init5', [$this, 'tinymce5'], $options),
            new TwigFunction('elfinder_summernote_init', [$this, 'summernote'], $options),
        ];
    }

    /**
     * @return mixed
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function tinymce(string $instance = 'default', array $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'])
    {
        if (!is_string($instance)) {
            throw new RuntimeError('The function can be applied to strings only.');
        }

        return $this->twig->render(
            '@FMElfinder/Elfinder/helper/_tinymce.html.twig',
            [
                'instance' => $instance,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ]
        );
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function tinymce4(string $instance = 'default', array $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0']): string
    {
        return $this->twig->render(
            '@FMElfinder/Elfinder/helper/_tinymce4.html.twig',
            [
                'instance' => $instance,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ]
        );
    }

    public function tinymce5(string $instance = 'default'): string
    {
        return $this->twig->render(
            '@FMElfinder/Elfinder/helper/_tinymce5.html.twig', [
                'instance' => $instance,
            ]
        );
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function summernote(string $instance = 'default', string $selector = '.summenote', array $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0']): string
    {
        return $this->twig->render(
            '@FMElfinder/Elfinder/helper/_summernote.html.twig',
            [
                'instance' => $instance,
                'selector' => $selector,
                'width'    => $parameters['width'],
                'height'   => $parameters['height'],
                'title'    => $parameters['title'],
            ]
        );
    }

    /**
     * (non-PHPdoc).
     *
     * @see Twig_ExtensionInterface::getName()
     */
    public function getName(): string
    {
        return 'fm_elfinder_init';
    }
}
