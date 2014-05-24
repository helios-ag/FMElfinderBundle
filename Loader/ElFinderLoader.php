<?php

namespace FM\ElfinderBundle\Loader;

use Exception;
use FM\ElFinderPHP\Connector\ElFinderConnector;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;

/**
 * Class ElFinderLoader
 * @package FM\ElfinderBundle\Loader
 */
class ElFinderLoader
{
    /**
     * @var string
     */
    protected $instance;

    /**
     * @var string
     * Configurator service name
     */
    protected $configurator;

    /**
     * @param \FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface $configurator
     */
    public function __construct(ElFinderConfigurationProviderInterface $configurator)
    {
        $this->configurator = $configurator;
    }

    /**
     * @throws \Exception
     * @return array
     */
    protected function configure()
    {
        $configurator = $this->configurator;
        if (!($configurator instanceof ElFinderConfigurationProviderInterface)) {
            throw new Exception("Configurator class must implement ElFinderConfigurationProviderInterface");
        }
        $parameters = $configurator->getConfiguration($this->instance);

        return $parameters;
    }

    /**
     * Starts ElFinder
     * @var $instance string
     */
    public function load($instance)
    {
        $this->setInstance($instance);
        $options = $this->configure();
        $connector = new ElFinderConnector(new ElFinderBridge($options));
        $connector->run();
    }

    /**
     * @param mixed $instance
     */
    public function setInstance($instance)
    {
        $this->instance = $instance;
    }

    /**
     * @param \FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface $configurator
     */
    public function setConfigurator($configurator)
    {
        $this->configurator = $configurator;
    }
}
