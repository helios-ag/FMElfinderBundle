<?php

namespace FM\ElfinderBundle\Event;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Contracts\EventDispatcher\Event;

class ElFinderPreExecutionEvent extends Event
{
    /** Request object containing ElFinder command and parameters. */
    protected Request $request;

    /** ElFinder instance. */
    protected string $instance;

    /** Home folder. */
    protected string $homeFolder;

    /** Used to make sub requests. */
    private HttpKernelInterface $httpKernel;

    public function __construct(Request $request, HttpKernelInterface $httpKernel, string $instance, string $homeFolder)
    {
        $this->request    = $request;
        $this->httpKernel = $httpKernel;
        $this->instance   = $instance;
        $this->homeFolder = $homeFolder;
    }

    /**
     * Makes a sub request to elFinder.
     * Function based on 'forward' function from Symfony controllers.
     *
     * @see https://github.com/symfony/symfony/blob/2.5/src/Symfony/Bundle/FrameworkBundle/Controller/Controller.php
     *
     * @param array $path  An array of path parameters
     * @param array $query An array of query parameters
     *
     * @return \Symfony\Component\HttpFoundation\Response A Response instance
     */
    public function subRequest(array $path, array $query)
    {
        $path['_controller'] = 'FMElfinderBundle:ElFinder:load';
        $subRequest          = $this->request->duplicate($query, null, $path);

        return $this->httpKernel->handle($subRequest, HttpKernelInterface::SUB_REQUEST);
    }

    /**
     * Returns executed command.
     */
    public function getCommand(): string
    {
        return $this->request->request->get('cmd');
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    public function getInstance(): string
    {
        return $this->instance;
    }

    public function getHomeFolder(): string
    {
        return $this->homeFolder;
    }
}
