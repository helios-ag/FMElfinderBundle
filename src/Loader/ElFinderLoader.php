<?php

namespace FM\ElfinderBundle\Loader;

use FM\ElfinderBundle\Connector\ElFinderConnector;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Class ElFinderLoader.
 */
class ElFinderLoader
{
    /** @var string */
    protected $instance;

    /** @var ElFinderConfigurationProviderInterface */
    protected $configurator;

    /** @var array */
    protected $config;

    /** @var ElFinderBridge */
    protected $bridge;

    /** @var SessionInterface */
    protected $session;

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
     *
     * @throws \Exception
     */
    public function initBridge($instance)
    {
        $this->setInstance($instance);
        $this->config = $this->configure();
        $this->bridge = new ElFinderBridge($this->config);
        if ($this->session) {
            $this->bridge->setSession($this->session);
        }
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
     * @param string $instance
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

        if (1 == count($aPathEncoded)) {
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

        /* @var $volume \elFinderVolumeDriver */
        return (!empty($volume)) ? $volume->getPath($hash) : false;
    }

    public function setSession($session)
    {
        $this->session = $session;
    }
}
