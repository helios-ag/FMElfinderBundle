<?php

namespace FM\ElfinderBundle\Event;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;

class ElFinderPostExecutionEvent extends ElFinderPreExecutionEvent
{
    /**
     * Command execution result.
     *
     * @var array
     */
    protected $result;

    /**
     * Constructor.
     *
     * @param string $instance
     * @param string $homeFolder
     */
    public function __construct(Request $request, HttpKernelInterface $httpKernel, $instance, $homeFolder, array $result)
    {
        parent::__construct($request, $httpKernel, $instance, $homeFolder);

        $this->result = $result;
    }

    /**
     * Tells if execution has encountered errors.
     *
     * @return bool
     */
    public function hasErrors()
    {
        return isset($this->result['error']);
    }

    /**
     * @return array
     */
    public function getResult()
    {
        return $this->result;
    }

    public function setResult(array $result)
    {
        $this->result = $result;
    }
}
