<?php

namespace FM\ElfinderBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\EventDispatcher\DependencyInjection\RegisterListenersPass;

final class ElFinderConfigurationPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        // use main symfony dispatcher
        if (!$container->hasDefinition('event_dispatcher') && !$container->hasAlias('event_dispatcher')) {
            return;
        }

        $listeners = $container->findTaggedServiceIds('fm_elfinder.listener');
        $subscribers = $container->findTaggedServiceIds('fm_elfinder.subscriber');

        foreach ($listeners as $serviceId => $tags) {
            @\trigger_error('Using "fm_elfinder.listener" tag is deprecated, use "kernel.event_listener" instead.', \E_USER_DEPRECATED);
        }

        foreach ($subscribers as $serviceId => $tags) {
            @\trigger_error('Using "fm_elfinder.subscriber" tag is deprecated, use "kernel.event_subscriber" instead.', \E_USER_DEPRECATED);
        }

        if (\count($listeners) > 0 || \count($subscribers) > 0) {
            $pass = new RegisterListenersPass('event_dispatcher', 'fm_elfinder.listener', 'fm_elfinder.subscriber');
            $pass->process($container);
        }
    }
}