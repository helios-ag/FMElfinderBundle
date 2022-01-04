<?php

namespace FM\ElfinderBundle;

use FM\ElfinderBundle\DependencyInjection\Compiler\TwigFormPass;
use Symfony\Component\EventDispatcher\DependencyInjection\RegisterListenersPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * Class FMElfinderBundle.
 */
class FMElfinderBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new TwigFormPass());
        $container->addCompilerPass(new RegisterListenersPass('event_dispatcher', 'kernel.event_listener', 'kernel.event_subscriber'));
    }
}
