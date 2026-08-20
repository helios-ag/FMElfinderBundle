<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection\Compiler;

use FM\ElfinderBundle\DependencyInjection\Compiler\ElFinderConfigurationPass;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\EventDispatcher\DependencyInjection\RegisterListenersPass;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * @internal
 *
 * Small stub classes used to exercise RegisterListenersPass without pulling in
 * a full framework bundle container
 */
class TestEvent
{
}

class TestListener
{
    public function onTest(TestEvent $event): void
    {
    }
}

class TestSubscriber implements EventSubscriberInterface
{
    public function onSub(TestEvent $event): void
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [TestEvent::class => 'onSub'];
    }
}

class EventDispatcherStub
{
    public function addListener(string $eventName, array $callback, int $priority = 0): void
    {
    }

    public function addSubscriber(EventSubscriberInterface $subscriber): void
    {
    }
}

class ElFinderConfigurationPassTest extends TestCase
{
    public function testProcessSkipsWhenNoEventDispatcher(): void
    {
        // No event_dispatcher definition/alias: the pass must bail out silently.
        $container = new ContainerBuilder();
        (new ElFinderConfigurationPass())->process($container);

        $this->assertFalse($container->hasDefinition('event_dispatcher'));
    }

    public function testProcessIsNoopWithoutTaggedServices(): void
    {
        $container = new ContainerBuilder();
        $container->register('event_dispatcher', EventDispatcherStub::class);

        (new ElFinderConfigurationPass())->process($container);

        $this->assertCount(0, $container->getDefinition('event_dispatcher')->getMethodCalls());
    }

    public function testProcessRegistersDeprecatedListenerAndSubscriberTags(): void
    {
        $container = new ContainerBuilder();
        $container->register('event_dispatcher', EventDispatcherStub::class);
        $container
            ->register('app.listener', TestListener::class)
            ->addTag('fm_elfinder.listener', ['event' => TestEvent::class, 'method' => 'onTest']);
        $container
            ->register('app.subscriber', TestSubscriber::class)
            ->addTag('fm_elfinder.subscriber');

        $deprecations = [];
        set_error_handler(
            function (int $severity, string $message) use (&$deprecations): bool {
                if (E_USER_DEPRECATED === $severity || E_DEPRECATED === $severity) {
                    $deprecations[] = $message;
                }

                return true;
            }
        );

        try {
            (new ElFinderConfigurationPass())->process($container);
        } finally {
            restore_error_handler();
        }

        // RegisterListenersPass wired the services onto the dispatcher.
        $this->assertGreaterThan(
            0,
            $container->getDefinition('event_dispatcher')->getMethodCalls(),
            'RegisterListenersPass should register the tagged services.'
        );

        $this->assertContains(
            'Using "fm_elfinder.listener" tag is deprecated, use "kernel.event_listener" instead.',
            $deprecations
        );
        $this->assertContains(
            'Using "fm_elfinder.subscriber" tag is deprecated, use "kernel.event_subscriber" instead.',
            $deprecations
        );
    }
}
