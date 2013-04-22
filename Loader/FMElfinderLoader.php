<?php

namespace FM\ElfinderBundle\Loader;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;

error_reporting(0);
include_once __DIR__.'/../../../../fm-elfinder/FM/elfinder/php/elFinderConnector.class.php';
include_once __DIR__.'/../../../../fm-elfinder/FM/elfinder/php/elFinder.class.php';
include_once __DIR__.'/../../../../fm-elfinder/FM/elfinder/php/elFinderVolumeDriver.class.php';
include_once __DIR__.'/../../../../fm-elfinder/FM/elfinder/php/elFinderVolumeLocalFileSystem.class.php';

class FMElfinderLoader
{
    protected $options = array();
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->options = $this->configure();
    }

    /**
     * @return array
     */
    protected function configure()
    {
        $request = $this->container->get('request');
        $parameters = $this->container->getParameter('fm_elfinder');

        $options = array();
        $options['debug'] = $parameters['connector']['debug'];
        $options['roots'] = array();

        foreach ($parameters['connector']['roots'] as $parameter) {
            $path = $parameter['path'];
            $options['roots'][] = array(
                'driver'        => $parameter['driver'],
                'path'          => $path . '/',
                'URL'           => $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/' . $path . '/',
                'accessControl' => array($this, 'access'),
                'uploadAllow'   => $parameter['upload_allow'],
                'uploadDeny'    => $parameter['upload_deny'],
                'uploadMaxSize' => $parameter['upload_max_size']
            );
        }

        return $options;
    }

    /**
     * Starts the elFinder
     */
    public function load()
    {
        $connector = new \elFinderConnector(new \elFinder($this->options));
        $connector->run();
    }

    /**
     * Simple function to demonstrate how to control file access using "accessControl" callback.
     * This method will disable accessing files/folders starting from '.' (dot)
     *
     * @param  string  $attr  attribute name (read|write|locked|hidden)
     * @param  string  $path  file path relative to volume root directory started with directory separator
     * @return bool|null
     **/
    public function access($attr, $path, $data, $volume) {
        	return strpos(basename($path), '.') === 0       // if file/folder begins with '.' (dot)
		? !($attr == 'read' || $attr == 'write')    // set read+write to false, other (locked+hidden) set to true
		:  null;                                    // else elFinder decide it itself
    }
}
