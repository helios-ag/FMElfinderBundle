<?php

namespace FM\ElfinderBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use FM\ElfinderBundle\Event\ElFinderEvents;
use FM\ElfinderBundle\Controller\ElFinderController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\Container;

class ElFinderControllerTest extends WebTestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->container = static::createClient()->getContainer();
    }

    public function testDispatchedPrePostExecutionEvents()
    {
        $preExecCount = 0;
        $postExecCount = 0;
        // storing the real event dispatcher
        $eventDispatcher = $this->container->get('event_dispatcher');
        // creating a container with mocked services for this test
        $container = $this->getContainer($eventDispatcher);
        // adding listeners        
        $eventDispatcher->addListener(ElFinderEvents::PRE_EXECUTION, $preExecListener = function (ElFinderEvents $e) use (&$preExecCount) {
            $preExecCount++;
        });
        $eventDispatcher->addListener(ElFinderEvents::POST_EXECUTION, $postExecListener = function (ElFinderEvents $e) use (&$postExecCount) {
            $postExecCount++;
        });

        $controller = new ElFinderController();
        $controller->setContainer($container);
        $controller->loadAction(new Request(array('cmd' => 'info')), 'default', null);

        $this->assertGreaterThan(0, $preExecCount);
        $this->assertGreaterThan(0, $postExecCount);
    }

    private function getContainer($eventDispatcher)
    {
        $container = new Container();
        $container->set('fm_elfinder.loader', $this->getElFinderLoaderMock());
        $container->set('http_kernel', $this->getHttpKernelMock());
        $container->set('event_dispatcher', $eventDispatcher);
        return $container;
    }

    private function getElFinderLoaderMock()
    {
        $stub = $this->getMockBuilder('FM\ElfinderBundle\Loader\ElFinderLoader')
            ->disableOriginalConstructor()
            ->getMock();
        $stub->expects($this->once())
            ->method('load')
            ->willReturn(array());
        return $stub;
    }

    private function getHttpKernelMock()
    {
        $stub = $this->getMockBuilder('Symfony\Component\HttpKernel\HttpKernelInterface')
            ->disableOriginalConstructor()
            ->getMock();
        return $stub;
    }
}
