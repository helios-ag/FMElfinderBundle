<?php

namespace FM\ElfinderBundle\Tests\Event;

use Symfony\Bundle\FrameworkBundle\Tests\TestCase;
use Symfony\Component\HttpFoundation\Request;
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;

class ElFinderPostExecutionEventTest extends TestCase
{
    public function testHasErrors()
    {
        $request    = new Request();
        $httpKernel = $this->createMock('Symfony\Component\HttpKernel\HttpKernelInterface');
        $event      = new ElFinderPostExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder', array());
        $this->assertEquals(false, $event->hasErrors());

        $event = new ElFinderPostExecutionEvent($request, $httpKernel, 'testInstance', 'testHomeFolder', array('error' => true));
        $this->assertEquals(true, $event->hasErrors());
    }
}
