<?php

namespace FM\ElfinderBundle\Tests\Functional\Fixtures;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;

final class RecordingPostExecutionListener
{
    private ?ElFinderPostExecutionEvent $lastEvent = null;

    public function __invoke(ElFinderPostExecutionEvent $event): void
    {
        $this->lastEvent = $event;
    }

    public function getLastEvent(): ?ElFinderPostExecutionEvent
    {
        return $this->lastEvent;
    }
}
