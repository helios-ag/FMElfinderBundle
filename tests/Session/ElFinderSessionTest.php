<?php

namespace FM\ElfinderBundle\Tests\Session;

use FM\ElfinderBundle\Session\ElFinderSession;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderSessionTest extends \PHPUnit\Framework\TestCase
{
    public function testStartDelegatesToInnerSession(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())->method('start');

        (new ElFinderSession($inner))->start();
    }

    public function testCloseSavesInnerSession(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())->method('save');

        (new ElFinderSession($inner))->close();
    }

    public function testGetReturnsInnerValueWithDefault(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())
            ->method('get')
            ->with('elFinderCaches', 'default')
            ->willReturn('stored');

        $this->assertSame('stored', (new ElFinderSession($inner))->get('elFinderCaches', 'default'));
    }

    public function testGetUsesEmptyStringDefaultWhenOmitted(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())
            ->method('get')
            ->with('elFinderCaches', '')
            ->willReturn('');

        (new ElFinderSession($inner))->get('elFinderCaches');
    }

    public function testSetForwardsToInnerSession(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())
            ->method('set')
            ->with('elFinderCaches', ['foo' => 'bar']);

        (new ElFinderSession($inner))->set('elFinderCaches', ['foo' => 'bar']);
    }

    public function testRemoveForwardsToInnerSession(): void
    {
        $inner = $this->createMock(SessionInterface::class);
        $inner->expects($this->once())->method('remove')->with('elFinderCaches');

        (new ElFinderSession($inner))->remove('elFinderCaches');
    }
}
