<?php

namespace FM\ElfinderBundle\Configuration;

use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Class ElFinderConfigurationReader
 * @package FM\ElfinderBundle\Configuration
 */
class ElFinderConfigurationReader implements ElFinderConfigurationProviderInterface
{
    /**
     * @var array $options
     */
    protected $options = array();

    /**
     * @var array $parameters
     */
    protected $parameters;

    /**
     * @var RequestStack
     */
    protected $requestStack;

    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @param $parameters
     * @param \Symfony\Component\HttpFoundation\RequestStack $requestStack
     * @param ContainerInterface $container
     */
    public function __construct($parameters, RequestStack $requestStack, ContainerInterface $container)
    {
        $this->parameters   = $parameters;
        $this->requestStack = $requestStack;
        $this->container    = $container;
    }

    /**
     * @param $instance
     * @return array
     */
    public function getConfiguration($instance)
    {
        $request = $this->requestStack->getCurrentRequest();
        $efParameters = $this->parameters;
        $parameters = $efParameters['instances'][$instance];
        $options = array();
        $options['debug'] = $parameters['connector']['debug'];
        $options['bind'] =  $parameters['connector']['bind'];
        $options['plugin'] =  $parameters['connector']['plugin'];
        $options['roots'] = array();

        foreach ($parameters['connector']['roots'] as $parameter) {
            $path = $parameter['path'];

            $driver = $this->container->has($parameter['driver']) ? $this->container->get($parameter['driver']) : null;

            $driverOptions = array(
                'driver'        => $parameter['driver'],
                'service'       => $driver,
                'disabled'      => $parameter['disabled_commands'],
                'plugin'        => $parameter['plugin'],
                'path'          => $path . '/',
                'URL'           => isset($parameter['url']) && $parameter['url']
                        ? strpos($parameter['url'], 'http') === 0
                            ? $parameter['url']
                            : sprintf('%s://%s%s/%s/', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $parameter['url'])
                        : sprintf('%s://%s%s/%s/', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $path),
                'uploadAllow'   => $parameter['upload_allow'],
                'uploadDeny'    => $parameter['upload_deny'],
                'uploadMaxSize' => $parameter['upload_max_size']
            );
            if(!$parameter['showhidden']) {
                $driverOptions['accessControl'] = array($this, 'access');
            };
            $options['roots'][] = array_merge($driverOptions, $this->configureDriver($parameter));
        }

        return $options;
    }

    /**
     * @param  array $parameter
     * @return array
     */
    private function configureDriver(array $parameter)
    {
        $settings = array();

        switch (strtolower($parameter['driver'])) {
            case "ftp":
                $settings['host'] = $parameter['ftp_settings']['host'];
                $settings['user'] = $parameter['ftp_settings']['user'];
                $settings['pass'] = $parameter['ftp_settings']['password'];
                $settings['path'] = $parameter['ftp_settings']['path'];
                break;
            case "ftpiis":
                $settings['host'] = $parameter['ftp_settings']['host'];
                $settings['user'] = $parameter['ftp_settings']['user'];
                $settings['pass'] = $parameter['ftp_settings']['password'];
                $settings['path'] = $parameter['ftp_settings']['path'];
                break;
            case "dropbox":
                $settings['consumerKey']       = $parameter['dropbox_settings']['consumerKey'];
                $settings['consumerSecret']    = $parameter['dropbox_settings']['consumerSecret'];
                $settings['accessToken']       = $parameter['dropbox_settings']['accessToken'];
                $settings['accessTokenSecret'] = $parameter['dropbox_settings']['accessTokenSecret'];
                $settings['dropboxUid']        = $parameter['dropbox_settings']['dropboxUid'];
                $settings['metaCachePath']     = $parameter['dropbox_settings']['metaCachePath'];
                break;
            case "s3":
                $settings['accesskey'] = $parameter['s3_settings']['accesskey'];
                $settings['secretkey'] = $parameter['s3_settings']['secretkey'];
                $settings['bucket']    = $parameter['s3_settings']['bucket'];
                $settings['tmpPath']   = $parameter['s3_settings']['tmpPath'];
                break;
            default:
                break;
        }

        return $settings;
    }

    /**
     * Simple function to demonstrate how to control file access using "accessControl" callback.
     * This method will disable accessing files/folders starting from '.' (dot)
     *
     * @param  string    $attr attribute name (read|write|locked|hidden)
     * @param  string    $path file path relative to volume root directory started with directory separator
     * @param $data
     * @param $volume
     * @return bool|null
     */
    public function access($attr, $path, $data, $volume)
    {
        return strpos(basename($path), '.') === 0       // if file/folder begins with '.' (dot)
            ? !($attr == 'read' || $attr == 'write')    // set read+write to false, other (locked+hidden) set to true
            :  null;                                    // else elFinder decide it itself
    }
}
