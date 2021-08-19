<?php

namespace FM\ElfinderBundle\Tests\Event;

use Symfony\Component\HttpFoundation\Request;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;

class ElFinderPreExecutionEventTest extends \PHPUnit\Framework\TestCase
{
    public function testGetCommand()
    {
        $command    = 'rm';
        $request    = new Request(['cmd' => $command]);
        $httpKernel = $this->createMock('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');
        $this->assertEquals($command, $event->getCommand());
    }

    public function testSubRequest()
    {
        $request    = new Request(['cmd' => 'info']);
        $httpKernel = $this->createMock('Symfony\Component\HttpKernel\HttpKernelInterface');
        $httpKernel
            ->expects($this->once())
            ->method('handle');
        $event = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');

        $jsonResponse = $event->subRequest([
            'instance'   => $event->getInstance(),
            'homeFolder' => $event->getHomeFolder(),
        ], $request->query->all());
    }
}
