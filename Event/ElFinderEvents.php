<?php

namespace FM\ElfinderBundle\Event;

use Symfony\Component\EventDispatcher\Event;

abstract class ElFinderEvents extends Event
{
    /**
     * Event name to identify pre execution event.
     * @var string
     */
    const PRE_EXECUTION = 'fm_elfinder.event.pre_execution';

    /**
     * Event name to identify post execution event.
     * @var string
     */
    const POST_EXECUTION = 'fm_elfinder.event.post_execution';
}
