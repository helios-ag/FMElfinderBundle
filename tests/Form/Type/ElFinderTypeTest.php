<?php

namespace FM\ElfinderBundle\Tests\Form\Type;

use FM\ElfinderBundle\Form\Type\ElFinderType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Form\FormView;

class ElFinderTypeTest extends \PHPUnit\Framework\TestCase
{
    public function testGetName()
    {
        $type = new ElFinderType();
        $this->assertEquals('elfinder', $type->getName());
    }

    public function testConfigureOptions()
    {
        $resolver = new OptionsResolver();
        $type     = new ElFinderType();
        $type->configureOptions($resolver);
        $this->assertTrue($resolver->isDefined('enable'));
        $this->assertTrue($resolver->isDefined('instance'));
        $this->assertTrue($resolver->isDefined('homeFolder'));
    }

    public function testBuildView()
    {
        $options = [
            'instance'   => 'default1',
            'enable'     => true,
            'homeFolder' => '/home',
        ];
        $view = new FormView();
        $type = new ElFinderType();
        $form = $this->createMock('Symfony\Component\Form\Test\FormInterface');
        $type->buildView($view, $form, $options);
        foreach ($options as $name => $value) {
            $this->assertArrayHasKey($name, $view->vars);
            $this->assertEquals($value, $view->vars[$name]);
        }
    }
}
