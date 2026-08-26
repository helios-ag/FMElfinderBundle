<?php

namespace FM\ElfinderBundle\Tests\Functional;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use FM\ElfinderBundle\Tests\Functional\Fixtures\RecordingPostExecutionListener;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\ErrorHandler\ErrorHandler;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpKernel\Kernel;

final class EventListenerIntegrationTest extends KernelTestCase
{
    protected function tearDown(): void
    {
        parent::tearDown();

        $exceptionHandler = set_exception_handler(static function (): void {
        });
        restore_exception_handler();

        if (is_array($exceptionHandler) && $exceptionHandler[0] instanceof ErrorHandler) {
            restore_exception_handler();
        }

        $errorHandler = set_error_handler(static function (): bool {
            return false;
        });
        restore_error_handler();

        if (is_array($errorHandler) && $errorHandler[0] instanceof ErrorHandler) {
            restore_error_handler();
        }
    }

    public function testKernelEventListenerReceivesPostExecutionEvent(): void
    {
        self::bootKernel(['environment' => 'test', 'debug' => false]);

        $container  = self::getContainer();
        $listener   = $container->get(RecordingPostExecutionListener::class);
        $dispatcher = $container->get('event_dispatcher');
        $event      = new ElFinderPostExecutionEvent(
            Request::create('/efconnect/default', 'GET', ['cmd' => 'open']),
            $this->createStub(HttpKernelInterface::class),
            'default',
            '',
            ['cwd' => ['name' => 'uploads']]
        );

        self::assertInstanceOf(EventDispatcherInterface::class, $dispatcher);
        $dispatcher->dispatch($event);

        self::assertSame($event, $listener->getLastEvent());
    }

    protected static function getKernelClass(): string
    {
        return EventListenerTestKernel::class;
    }
}

final class EventListenerTestKernel extends Kernel
{
    use MicroKernelTrait;

    public function registerBundles(): iterable
    {
        yield new FrameworkBundle();
    }

    public function getCacheDir(): string
    {
        return sys_get_temp_dir() . '/fm_elfinder_event_listener_test/cache';
    }

    public function getLogDir(): string
    {
        return sys_get_temp_dir() . '/fm_elfinder_event_listener_test/log';
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->import(__DIR__ . '/config/event_listener_test.yml');
    }
}
