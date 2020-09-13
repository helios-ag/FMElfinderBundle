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
    /**
     * @var Environment
     */
    protected $twig;

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
            new TwigFunction('elfinder_summernote_init', [$this, 'summernote'], $options),
        ];
    }

    /**
     * @param string $instance
     * @param array  $parameters
     *
     * @return mixed
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function tinymce($instance = 'default', $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'])
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
     * @param string $instance
     * @param array  $parameters
     *
     * @return mixed
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function tinymce4($instance = 'default', $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'])
    {
        if (!is_string($instance)) {
            throw new RuntimeError('The function can be applied to strings only.');
        }

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

    /**
     * @param string $instance
     * @param string $selector
     * @param array  $parameters
     *
     * @return mixed
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function summernote($instance = 'default', $selector = '.summenote', $parameters = ['width' => 900, 'height' => 450, 'title' => 'elFinder 2.0'])
    {
        if (!is_string($instance)) {
            throw new RuntimeError('The function can be applied to strings only.');
        }

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
    public function getName()
    {
        return 'fm_elfinder_init';
    }
}
