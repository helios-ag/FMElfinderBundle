<?php

namespace FM\ElfinderBundle\Loader;

use Exception;
use FM\ElFinderPHP\Connector\ElFinderConnector;
use FM\ElfinderBundle\Bridge\ElFinderBridge;
use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ElFinderLoader.
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
            throw new Exception('Configurator class must implement ElFinderConfigurationProviderInterface');
        }
        $parameters = $configurator->getConfiguration($this->instance);

        return $parameters;
    }

    /**
     * Starts ElFinder.
     *
     * @var Request
     * @var string  $instance
     */
    public function load(Request $request, $instance)
    {
        $this->setInstance($instance);
        $config = $this->configure();

        $this->bridge = new ElFinderBridge($config);

        $connector = new ElFinderConnector($this->bridge);

        if ($config['corsSupport']) {
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
    public function setConfigurator($configurator)
    {
        $this->configurator = $configurator;
    }

    /**
     * Encode path into hash.
     *
     * @param string $path
     *
     * @throws \Exception
     *
     * @return mixed
     **/
     public function encode($path)
     {
          if (empty($this->instance)) {
               throw new Exception('The instance have not been set.');
          }

          if ($this->bridge === null) {

               $config = $this->configurator->getConfiguration($this->instance);

               $this->bridge = new ElFinderBridge($config);
          }

          $aPathEncoded = array();

          foreach ($this->bridge->volumes as $hashId => $volume )
          {
               $aPathEncoded[$hashId] = $volume->encode($path);
          }

          if (count($aPathEncoded) == 1){
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
      * @throws \Exception
      *
      * @return string
      **/
     public function decode($hash)
     {
          if (empty($this->instance)) {
               throw new Exception('The instance have not been set.');
          }

          if ($this->bridge === null) {

               $config = $this->configurator->getConfiguration($this->instance);

               $this->bridge = new ElFinderBridge($config);
          }

          $volume = $this->bridge->getVolume($hash);

          return (!empty($volume)) ? $volume->decode($hash) : false;
     }
}
