<?php

namespace FM\ElfinderBundle\Tests\Form\Type;

use FM\ElfinderBundle\Form\DataTransformer\JsonStringArrayTransformer;
use FM\ElfinderBundle\Form\Type\ElFinderType;
use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

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
        $this->assertTrue($resolver->isDefined('multiple'));
    }

    #[DataProvider('multipleOptionProvider')]
    public function testMultipleOptionInheritsFromInstanceUnlessExplicitlyOverridden(
        ?string $instance,
        ?bool $configuredOption,
        bool $expected
    ): void {
        $resolver = new OptionsResolver();
        $type     = new ElFinderType([
            'instances' => [
                'single'  => ['multiple' => false],
                'gallery' => ['multiple' => true],
            ],
        ]);
        $type->configureOptions($resolver);

        $resolved = $resolver->resolve([
            'instance' => $instance,
            'multiple' => $configuredOption,
        ]);

        self::assertSame($expected, $resolved['multiple']);
    }

    public static function multipleOptionProvider(): array
    {
        return [
            'single inherits false'     => ['single', null, false],
            'gallery inherits true'     => ['gallery', null, true],
            'explicit false wins'       => ['gallery', false, false],
            'explicit true wins'        => ['single', true, true],
            'unknown instance is false' => ['unknown', null, false],
            'null instance is false'    => [null, null, false],
        ];
    }

    public function testBuildView()
    {
        $options = [
            'instance'   => 'default1',
            'enable'     => true,
            'homeFolder' => '/home',
            'multiple'   => true,
        ];
        $view = new FormView();
        $type = new ElFinderType();
        $form = $this->createStub('Symfony\Component\Form\Test\FormInterface');
        $type->buildView($view, $form, $options);
        foreach ($options as $name => $value) {
            $this->assertArrayHasKey($name, $view->vars);
            $this->assertEquals($value, $view->vars[$name]);
        }
    }

    public function testBuildFormSetsAttributesWhenEnabled()
    {
        $builder = $this->createStub(FormBuilderInterface::class);
        $builder->method('getAttribute')->willReturn(true);
        $set = [];
        $builder->method('setAttribute')->willReturnCallback(function (string $name, $value) use (&$set, $builder) {
            $set[$name] = $value;

            return $builder;
        });

        (new ElFinderType())->buildForm($builder, [
            'enable'     => true,
            'instance'   => 'custom',
            'homeFolder' => '/home',
            'multiple'   => false,
        ]);

        $this->assertTrue($set['enable']);
        $this->assertSame('custom', $set['instance']);
        $this->assertSame('/home', $set['homeFolder']);
        $this->assertFalse($set['multiple']);
    }

    public function testBuildFormAddsJsonTransformerInMultipleMode(): void
    {
        $builder = $this->createMock(FormBuilderInterface::class);
        $builder->expects(self::once())->method('getAttribute')->with('enable')->willReturn(true);
        $builder->method('setAttribute')->willReturnSelf();
        $builder->expects(self::once())
            ->method('addModelTransformer')
            ->with(self::isInstanceOf(JsonStringArrayTransformer::class))
            ->willReturnSelf();

        (new ElFinderType())->buildForm($builder, [
            'enable'     => true,
            'instance'   => 'gallery',
            'homeFolder' => '',
            'multiple'   => true,
        ]);
    }

    public function testBuildFormOmitsInstanceWhenDisabled()
    {
        $builder = $this->createStub(FormBuilderInterface::class);
        $builder->method('getAttribute')->willReturn(false);
        $set = [];
        $builder->method('setAttribute')->willReturnCallback(function (string $name, $value) use (&$set, $builder) {
            $set[$name] = $value;

            return $builder;
        });

        (new ElFinderType())->buildForm($builder, [
            'enable'     => false,
            'instance'   => 'default',
            'homeFolder' => '',
            'multiple'   => false,
        ]);

        $this->assertArrayNotHasKey('instance', $set);
        $this->assertFalse($set['enable']);
    }

    public function testBuildViewHidesInstanceWhenDisabled()
    {
        $view = new FormView();
        $form = $this->createStub('Symfony\Component\Form\Test\FormInterface');

        (new ElFinderType())->buildView($view, $form, [
            'enable'     => false,
            'instance'   => 'default',
            'homeFolder' => '',
            'multiple'   => true,
        ]);

        $this->assertFalse($view->vars['enable']);
        $this->assertTrue($view->vars['multiple']);
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
