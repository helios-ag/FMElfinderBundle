<?php

namespace FM\ElfinderBundle\Tests\Event;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use Symfony\Component\HttpFoundation\Request;

class ElFinderPostExecutionEventTest extends \PHPUnit\Framework\TestCase
{
    public function testHasErrors()
    {
        $request    = new Request();
        $httpKernel = $this->createStub('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPostExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder', []);
        $this->assertEquals(false, $event->hasErrors());

        $event = new ElFinderPostExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder', ['error' => true]);
        $this->assertEquals(true, $event->hasErrors());
    }

    public function testGetAndSetResult()
    {
        $request    = new Request();
        $httpKernel = $this->createStub('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPostExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder', ['foo' => 'bar']);

        $this->assertSame(['foo' => 'bar'], $event->getResult());

        $event->setResult(['baz' => 'qux']);
        $this->assertSame(['baz' => 'qux'], $event->getResult());
    }
}
