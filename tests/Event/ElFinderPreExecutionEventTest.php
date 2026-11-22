<?php

namespace FM\ElfinderBundle\Tests\Event;

use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use Symfony\Component\HttpFoundation\Request;

class ElFinderPreExecutionEventTest extends \PHPUnit\Framework\TestCase
{
    public function testGetCommand()
    {
        $command    = 'rm';
        $request    = new Request(['cmd' => $command]);
        $httpKernel = $this->createStub('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');
        $this->assertEquals($command, $event->getCommand());
    }

    public function testGetCommandFromPostWithQueryTakingPrecedence(): void
    {
        $request = Request::create('/efconnect/default', 'POST', ['cmd' => 'tmb']);
        $httpKernel = $this->createStub(\Symfony\Component\HttpKernel\HttpKernelInterface::class);
        $event = new ElFinderPreExecutionEvent($request, $httpKernel, 'default', '');

        self::assertSame('tmb', $event->getCommand());

        $request->query->set('cmd', 'open');
        self::assertSame('open', $event->getCommand());

        $request->query->remove('cmd');
        $request->request->remove('cmd');
        self::assertSame('', $event->getCommand());
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

    public function testGetRequestAndAccessors()
    {
        $request    = new Request(['cmd' => 'rm']);
        $httpKernel = $this->createStub('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPreExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder');

        $this->assertSame($request, $event->getRequest());
        $this->assertSame('testInstance', $event->getInstance());
        $this->assertSame('testHomeFolder', $event->getHomeFolder());
    }
}
