<?php

namespace FM\ElfinderBundle\Tests\Event;

use Symfony\Bundle\FrameworkBundle\Tests\TestCase;
use Symfony\Component\HttpFoundation\Request;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;

/**
 * Class ElFinderPreExecutionEventTest.
 *
 * @package FM\ElfinderBundle\Tests\Event
 */
class ElFinderPreExecutionEventTest extends TestCase
{
    public function testGetCommand()
    {
        $command    = 'rm';
        $request    = new Request(array('cmd' => $command));
        $httpKernel = $this->createMock('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');
        $this->assertEquals($command, $event->getCommand());
    }

    public function testSubRequest()
    {
        $request    = new Request(array('cmd' => 'info'));
        $httpKernel = $this->createMock('Symfony\Component\HttpKernel\HttpKernelInterface');
        $httpKernel
            ->expects($this->once())
            ->method('handle');
        $event = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');

        $jsonResponse = $event->subRequest(array(
            'instance'   => $event->getInstance(),
            'homeFolder' => $event->getHomeFolder(),
        ), $request->query->all());
    }
}
