<?php

namespace FM\ElfinderBundle\Loader;

use Exception;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Connector\ElFinderConnector;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ElFinderLoader implements ElFinderLoaderInterface
{
    protected string $instance;

    protected ElFinderConfigurationProviderInterface $configurator;

    protected array $config;

    protected ElFinderBridge $bridge;

    protected ?SessionInterface $session = null;

    public function __construct(ElFinderConfigurationProviderInterface $configurator)
    {
        $this->configurator = $configurator;
    }

    /**
     * @throws Exception
     */
    public function configure(): array
    {
        $configurator = $this->configurator;

        return $configurator->getConfiguration($this->instance);
    }

    /**
     * Configure the Bridge to ElFinder.
     * @throws Exception
     */
    public function initBridge(string $instance, array $efParameters): void
    {
        $this->setInstance($instance);

        $arrayInstance = $efParameters['instances'][$instance];
        $whereIsMulti  = $arrayInstance['where_is_multi'];
        $multiHome     = $arrayInstance['multi_home_folder'];
        $separator     = $arrayInstance['folder_separator'];

        $this->config = $this->configure();

        if (count($whereIsMulti) > 0) {
            foreach ($whereIsMulti as $key => $value) {
                if ($multiHome) {
                    $this->config[$key][$value]['path'] = str_replace($separator, '/', $this->config[$key][$value]['path']);
                    $this->config[$key][$value]['URL']  = str_replace($separator, '/', $this->config[$key][$value]['URL']);
                }
            }
        }

        $this->bridge = new ElFinderBridge($this->config);

        if ($this->session) {
            $this->bridge->setSession($this->session);
        }
    }

    /**
     * Starts ElFinder.
     */
    public function load(Request $request): array|string
    {
        $connector = new ElFinderConnector($this->bridge);

        if ($this->config['corsSupport']) {
            return $connector->execute($request->query->all());
        }

        return $connector->run($request->query->all());
    }

    public function setInstance(string $instance): void
    {
        $this->instance = $instance;
    }

    public function setConfigurator(ElFinderConfigurationProviderInterface $configurator): void
    {
        $this->configurator = $configurator;
    }

    /**
     * Encode path into hash.
     */
    public function encode(string $path): mixed
    {
        $aPathEncoded = [];

        $volumes = $this->bridge->getVolumes();

        foreach ($volumes as $hashId => $volume) {
            $aPathEncoded[$hashId] = $volume->getHash($path);
        }

        if (1 == count($aPathEncoded)) {
            return array_values($aPathEncoded)[0];
        } elseif (count($aPathEncoded) > 1) {
            return $aPathEncoded;
        }

        return false;
    }

    /**
     * Decode path from hash.
     */
    public function decode(string $hash): string
    {
        $volume = $this->bridge->getVolume($hash);

        /* @var $volume \elFinderVolumeDriver */
        return (!empty($volume)) ? $volume->getPath($hash) : false;
    }

    public function setSession(?SessionInterface $session): void
    {
        $this->session = $session;
    }
}
