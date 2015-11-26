<?php

namespace FM\ElfinderBundle\Tests\Form\Type;

use FM\ElfinderBundle\Form\Type\ElFinderType;
use Symfony\Component\Form\Forms;
use Symfony\Component\Form\Test\TypeTestCase;

/**
 * Class ElFinderTypeTest.
 *
 * @package FM\ElfinderBundle\Tests
 */
class ElFinderTypeTest extends TypeTestCase
{
    public function setUp()
    {
        parent::setUp();

        $elfinderType  = new ElFinderType();
        $this->factory = Forms::createFormFactoryBuilder()
            ->addType($elfinderType)
            ->getFormFactory();
    }

    public function testDefaults()
    {
        $form = $this->factory->create('elfinder');
        $view = $form->createView();

        $this->assertTrue($view->vars['enable']);
    }

    public function testDefaultInstance()
    {
        $form = $this->factory->create('elfinder');
        $view = $form->createView();

        $this->assertSame('', $view->vars['instance']);
    }

    public function testDefaultHomeFolder()
    {
        $form = $this->factory->create('elfinder');
        $view = $form->createView();

        $this->assertSame('', $view->vars['homeFolder']);
    }
}
