<?php

namespace FM\ElfinderBundle\Event;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Contracts\EventDispatcher\Event;

class ElFinderPreExecutionEvent extends Event
{
    /**
     * Request object containing ElFinder command and parameters.
     *
     * @var Request
     */
    protected $request;

    /**
     * Used to make sub requests.
     *
     * @var HttpKernelInterface
     */
    private $httpKernel;

    /**
     * ElFinder instance.
     *
     * @var string
     */
    protected $instance;

    /**
     * Home folder.
     *
     * @var string
     */
    protected $homeFolder;

    /**
     * Constructor.
     *
     * @param Request             $request
     * @param HttpKernelInterface $httpKernel
     * @param string              $instance
     * @param string              $homeFolder
     */
    public function __construct(Request $request, HttpKernelInterface $httpKernel, $instance, $homeFolder)
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
     * @return Symfony\Component\HttpFoundation\Response A Response instance
     */
    public function subRequest(array $path, array $query)
    {
        $path['_controller'] = 'FMElfinderBundle:ElFinder:load';
        $subRequest          = $this->request->duplicate($query, null, $path);

        return $this->httpKernel->handle($subRequest, HttpKernelInterface::SUB_REQUEST);
    }

    /**
     * Returns executed command.
     *
     * @return string
     */
    public function getCommand()
    {
        return $this->request->get('cmd');
    }

    /**
     * @return Request
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * @return string
     */
    public function getInstance()
    {
        return $this->instance;
    }

    /**
     * @return string
     */
    public function getHomeFolder()
    {
        return $this->homeFolder;
    }
}
