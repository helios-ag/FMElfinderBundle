<?php

namespace FM\ElfinderBundle\Event;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;

class ElFinderPostExecutionEvent extends ElFinderPreExecutionEvent
{
    /**
     * Command execution result.
     */
    protected array $result;

    /**
     * Constructor.
     */
    public function __construct(Request $request, HttpKernelInterface $httpKernel, string $instance, string $homeFolder, array $result = null)
    {
        parent::__construct($request, $httpKernel, $instance, $homeFolder);

        $this->result = $result;
    }

    /**
     * Tells if execution has encountered errors.
     */
    public function hasErrors(): bool
    {
        return isset($this->result['error']);
    }

    public function getResult(): array
    {
        return $this->result;
    }

    public function setResult(array $result): void
    {
        $this->result = $result;
    }
}
