<?php

namespace FM\ElfinderBundle\Loader;

use FM\ElFinderPHP\Connector\ElFinderConnector;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ElFinderLoader.
 *
 * @package FM\ElfinderBundle\Loader
 */
class ElFinderLoader
{
    /**
     * @var
     */
    protected $instance;

    /**
     * @var ElFinderConfigurationProviderInterface
     *                                             Configurator service name
     */
    protected $configurator;

    /**
     * @var array
     */
    protected $config;

    /**
     * @var ElFinderBridge
     */
    protected $bridge;

    /**
     * @param \FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface $configurator
     */
    public function __construct(ElFinderConfigurationProviderInterface $configurator)
    {
        $this->configurator = $configurator;
    }

    /**
     * @throws \Exception
     *
     * @return array
     */
    public function configure()
    {
        $configurator = $this->configurator;
        if (!($configurator instanceof ElFinderConfigurationProviderInterface)) {
            throw new \Exception('Configurator class must implement ElFinderConfigurationProviderInterface');
        }
        $parameters = $configurator->getConfiguration($this->instance);

        return $parameters;
    }

    /**
     * Configure the Bridge to ElFinder.
     *
     * @var string
     */
    public function initBridge($instance)
    {
        $this->setInstance($instance);
        $this->config = $this->configure();
        $this->bridge = new ElFinderBridge($this->config);
    }

    /**
     * Starts ElFinder.
     *
     * @var Request
     *
     * @return void|array
     */
    public function load(Request $request)
    {
        $connector = new ElFinderConnector($this->bridge);

        if ($this->config['corsSupport']) {
            return $connector->execute($request->query->all());
        } else {
            $connector->run($request->query->all());
        }
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
    public function setConfigurator(ElFinderConfigurationProviderInterface $configurator)
    {
        $this->configurator = $configurator;
    }

    /**
     * Encode path into hash.
     *
     * @param string $path
     * 
     * @return mixed
     **/
    public function encode($path)
    {
        $aPathEncoded = array();

        $volumes = $this->bridge->getVolumes();

        foreach ($volumes as $hashId => $volume) {
            $aPathEncoded[$hashId] = $volume->encode($path);
        }

        if (count($aPathEncoded) == 1) {
            return array_values($aPathEncoded)[0];
        } elseif (count($aPathEncoded) > 1) {
            return $aPathEncoded;
        } else {
            return false;
        }
    }

    /**
     * Decode path from hash.
     *
     * @param string $hash
     * 
     * @return string
     **/
    public function decode($hash)
    {
        $volume = $this->bridge->getVolume($hash);

        return (!empty($volume)) ? $volume->decode($hash) : false;
    }
}
