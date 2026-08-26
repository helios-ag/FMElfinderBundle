# Event listeners and subscribers

## Events

The bundle dispatches these events during each elFinder command:

- `FM\ElfinderBundle\Event\ElFinderPreExecutionEvent` before the command runs;
- `FM\ElfinderBundle\Event\ElFinderPostExecutionEvent` after the command runs.

`ElFinderPreExecutionEvent` provides the HTTP request, elFinder instance name,
home folder, and command name. `ElFinderPostExecutionEvent` also provides the
command result. Use `hasErrors()` to check it and `setResult()` to change the
response returned to the elFinder client.

Register listeners with Symfony's EventDispatcher. The recommended attribute
configuration is:

```php
<?php

declare(strict_types=1);

namespace App\EventListener;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener]
final class ElFinderPostExecutionListener
{
    public function __invoke(ElFinderPostExecutionEvent $event): void
    {
        if ($event->hasErrors()) {
            return;
        }

        // Inspect or change the result.
        $result = $event->getResult();
        $event->setResult($result);
    }
}
```

Without attributes, register the same listener in `config/services.yaml`:

```yaml
services:
    App\EventListener\ElFinderPostExecutionListener:
        tags:
            - { name: kernel.event_listener, event: 'FM\ElfinderBundle\Event\ElFinderPostExecutionEvent', method: __invoke }
```

Do not combine the attribute and YAML tag for the same listener, or Symfony will
register it twice.

Event subscribers can implement Symfony's `EventSubscriberInterface` and return
the concrete event classes from `getSubscribedEvents()`:

```php
use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use FM\ElfinderBundle\Event\ElFinderPreExecutionEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class ElFinderSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            ElFinderPreExecutionEvent::class => 'onPreExecute',
            ElFinderPostExecutionEvent::class => 'onPostExecute',
        ];
    }

    public function onPreExecute(ElFinderPreExecutionEvent $event): void
    {
        // Inspect the request before elFinder executes the command.
    }

    public function onPostExecute(ElFinderPostExecutionEvent $event): void
    {
        // Inspect or change the command result.
    }
}
```

Symfony's default service autoconfiguration registers classes implementing
`EventSubscriberInterface`. If autoconfiguration is disabled, add the
`kernel.event_subscriber` service tag explicitly.

Events do not require `cors_support: true`. Enable CORS only when the elFinder
client accesses the connector from another origin; see the
[CORS guide](cors-support.md).

The available elFinder command names are listed in the
[ElFinderPHP source](https://github.com/helios-ag/ElFinderPHP/blob/master/src/ElFinder.php#L61).

## Sub-requests

An event listener can perform a sub-request for commands that use HTTP GET. Set
a stable `volume_id` on the configured root so it is mounted with the same ID in
the original request and the sub-request.

This listener reacts to a successful thumbnail command and requests file
information from the same elFinder instance:

```php
<?php

declare(strict_types=1);

namespace App\EventListener;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener]
final class ElFinderThumbnailListener
{
    public function __invoke(ElFinderPostExecutionEvent $event): void
    {
        if ($event->hasErrors() || 'tmb' !== $event->getCommand()) {
            return;
        }

        $query = $event->getRequest()->query->all();
        $query['cmd'] = 'info';

        $response = $event->subRequest([
            'instance' => $event->getInstance(),
            'homeFolder' => $event->getHomeFolder(),
        ], $query);

        $content = $response->getContent();
        if (false !== $content) {
            $data = json_decode($content, true);
            // Work with the sub-request data.
        }
    }
}
```
