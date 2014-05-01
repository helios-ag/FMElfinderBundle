<?php

namespace FM\ElfinderBundle\Loader;

use Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
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
     * @var ContainerInterface $container
     */
    protected $container;

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
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @throws \Exception
     * @return array
     */
    protected function configure()
    {
        $configurator = $this->container->get($this->configurator);
        if(!($configurator instanceof ElFinderConfigurationProviderInterface)) {
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
        $this->options = $this->configure();
        $connector = new ElFinderConnector(new ElFinderBridge($this->options));
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
