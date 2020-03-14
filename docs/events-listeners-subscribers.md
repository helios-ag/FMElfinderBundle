# Events listeners / subscribers

## Events

The bundle is throwing some events during an elFinder command execution :
- `FM\ElfinderBundle\Event\ElFinderEvents::PRE_EXECUTION` : `fm_elfinder.event.pre_execution`
- `FM\ElfinderBundle\Event\ElFinderEvents::POST_EXECUTION` : `fm_elfinder.event.post_execution`

The pre execution event has its own class (`FM\ElfinderBundle\Event\ElFinderPreExecutionEvent`) which contains
the http request object, the elFinder instance name and the home folder.

The post execution event (`FM\ElfinderBundle\Event\ElFinderPostExecutionEvent`) has the same attributes
than the pre execution events, plus the command result and a `hasErrors()` function indicating if
errors has been encountered during command execution.
The result to return to the elFinder.js client can be modified with the post execution event
using the `setResult` function on this event.

You can register event listeners with the `fm_elfinder.event_listener` tag
and event subscribers with the `fm_elfinder.event_subscriber` tag.

**Note:** you must set the [`cors_support`](https://github.com/helios-ag/FMElfinderBundle/blob/master/docs/cors-support.md "CORS Support documentation") option to `true` to use events.
If you don't, the symfony life cycle won't end properly and the post execution event won't be dispatched.
Only use the NelmioCORSBundle if your elFinder client is on an other domain.

You can access to all commands names [here](https://github.com/helios-ag/ElFinderPHP/blob/master/src/ElFinder.php#L61 "elFinder commands").

## Sub requests

Events allows you to perform sub requests (only for commands used with HTTP GET method, i.e. not to upload a file).
These subrequests are working the same way than `forward` function on symfony controllers,
and are also hookable.

**Note:** You will have to set a `volume_id` to your instance's root to be sure the volume
is mounted with the same ID between each requests.

Here is an exemple of event listener on the post execution event, making a sub request :

```xml
<!-- src/AppBundle/Resources/config/services.xml -->
<service id="app_bundle.listener.elfinder_post_execution" class="AppBundle\EventListener\ElFinder\PostExecutionListener">
    <tag name="fm_elfinder.event_listener" event="fm_elfinder.event.post_execution" method="onPostExecute" />
</service>
```

```php
// src/AppBundle/EventListener/ElFinder/PostExecutionListener.php
namespace AppBundle\EventListener\ElFinder;

use FM\ElfinderBundle\Event\ElFinderPostExecutionEvent;

class PostExecutionListener
{
    /**
     * @param  ElFinderPostExecutionEvent $event
     */
    public function onPostExecute(ElFinderPostExecutionEvent $event)
    {
        if (!$event->hasErrors() && $event->getCommand() == 'tmb') { // 'tmb', 'mkdir', 'open', etc...
            // do your stuff here
            // ...
            // you can perform a sub request
            $queryParameters = $event->getRequest()->query->all(); // getting original request parameters
            $queryParameters['cmd'] = 'info'; // changing the command to execute in sub request

            $jsonResponse = $event->subRequest(array(
                'instance' => $event->getInstance(),    // you can also make a subrequest on an other instance
                'homeFolder' => $event->getHomeFolder() // and an other homeFolder
            ), $queryParameters);

            $data = json_decode($jsonResponse->getContent());
            // work with sub request data
            // ...
        }
    }
}
```
