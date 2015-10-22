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
	protected $Bridge;

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

	$this->Bridge = new ElFinderBridge($config);

        $connector = new ElFinderConnector($this->Bridge);
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
	 * Encode path into hash
	 *
	 * @var Request
	 * @param  string
	 * @throws \Exception
	 * @return string
	 **/
	public function encode(Request $Request, $path) {

		$target = ($Request->isMethod('POST')) ? $Request->get('target') : $Request->query->get('target');

		if (empty($target)) {
			throw new Exception('Request: target parameter is empty. Volume id can\'t be found');
		}

		$Volume = $this->Bridge->getVolume($target);

		return (!empty($Volume)) ? $Volume->encode($path) : false;
	}

	/**
	 * Decode path from hash
	 *
	 * @var Request
	 * @param  string
	 * @return string
	 **/
	public function decode($hash) {

		$Volume = $this->Bridge->getVolume($hash);

		return (!empty($Volume)) ? $Volume->decode($hash) : false;
	}
}
