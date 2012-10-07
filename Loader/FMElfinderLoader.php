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
        $opt = 'access';
        $properties = $this->container->getParameter('fm_elfinder');
        if($properties['showhidden'])
            $opt = null;
        $path = $properties['path'];
        $options = array(
            'roots' => array(
                array(
                    'driver'        => $properties['driver'],
                    'path'          => $path.'/',
                    'URL'           => $request->getScheme().'://'.$request->getHttpHost() . '/'.$path.'/',
                    'accessControl' => $opt
                )
            )
        );
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
}
