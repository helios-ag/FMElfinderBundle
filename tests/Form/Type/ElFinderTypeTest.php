<?php

namespace FM\ElfinderBundle\Tests\Form\Type;

use FM\ElfinderBundle\Form\Type\ElFinderType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
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

    public function testBuildFormSetsAttributesWhenEnabled()
    {
        $builder = $this->createMock(FormBuilderInterface::class);
        $builder->method('getAttribute')->willReturn(true);
        $set = [];
        $builder->method('setAttribute')->willReturnCallback(function (string $name, $value) use (&$set, $builder) {
            $set[$name] = $value;

            return $builder;
        });

        (new ElFinderType())->buildForm($builder, ['enable' => true, 'instance' => 'custom', 'homeFolder' => '/home']);

        $this->assertTrue($set['enable']);
        $this->assertSame('custom', $set['instance']);
        $this->assertSame('/home', $set['homeFolder']);
    }

    public function testBuildFormOmitsInstanceWhenDisabled()
    {
        $builder = $this->createMock(FormBuilderInterface::class);
        $builder->method('getAttribute')->willReturn(false);
        $set = [];
        $builder->method('setAttribute')->willReturnCallback(function (string $name, $value) use (&$set, $builder) {
            $set[$name] = $value;

            return $builder;
        });

        (new ElFinderType())->buildForm($builder, ['enable' => false, 'instance' => 'default', 'homeFolder' => '']);

        $this->assertArrayNotHasKey('instance', $set);
        $this->assertFalse($set['enable']);
    }

    public function testBuildViewHidesInstanceWhenDisabled()
    {
        $view = new FormView();
        $form = $this->createMock('Symfony\Component\Form\Test\FormInterface');

        (new ElFinderType())->buildView($view, $form, ['enable' => false, 'instance' => 'default', 'homeFolder' => '']);

        $this->assertFalse($view->vars['enable']);
        $this->assertArrayNotHasKey('instance', $view->vars);
        $this->assertArrayNotHasKey('homeFolder', $view->vars);
    }

    public function testGetParentReturnsTextType()
    {
        $this->assertSame(
            'Symfony\Component\Form\Extension\Core\Type\TextType',
            (new ElFinderType())->getParent()
        );
    }
}
