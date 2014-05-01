<?php

namespace FM\ElfinderBundle\Configuration;

use Exception;
use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Model\ElFinderPermissionsInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

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
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    protected $container;

    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @param $instance
     * @throws \Exception
     * @return array
     */
    public function getConfiguration($instance)
    {
        $request = $this->container->get('request');
        $efParameters = $this->container->getParameter('fm_elfinder');
        $parameters = $efParameters['instances'][$instance];
        $userIntegration = $parameters['enableUserIntegration'];
        $options = array();
        $options['debug'] = $parameters['connector']['debug'];
        $options['roots'] = array();

        foreach ($parameters['connector']['roots'] as $parameter) {
            $path = $parameter['path'];
            if($userIntegration) {
                if(!$user = $this->container->get('security.context')->getToken()->getUser())
                    throw new Exception("Can't access user object");
                if(!($user instanceof ElFinderPermissionsInterface)) {
                    throw new Exception("User class must implement ElFinderPermissionsInterface");
                }
                $path = $user->getRootDirectoryName();
            };

            $driver = $this->container->has($parameter['driver']) ? $this->container->get($parameter['driver']) : null;
            $driverOptions = array(
                'driver'        => $parameter['driver'],
                'service'       => $driver,
                'path'          => $path . '/',
                'URL'           => isset($parameter['url']) && $parameter['url']
                        ? strpos($parameter['url'], 'http') === 0
                            ? $parameter['url']
                            : sprintf('%s://%s%s/%s/', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $parameter['url'])
                        : sprintf('%s://%s%s/%s/', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $path),
                'accessControl' => array($this, 'access'),
                'uploadAllow'   => $parameter['upload_allow'],
                'uploadDeny'    => $parameter['upload_deny'],
                'uploadMaxSize' => $parameter['upload_max_size']
            );
            $options['roots'][] = array_merge($driverOptions, $this->configureDriver($parameter));
        }

        return $options;
    }


    /**
     * @param array $parameter
     * @return array
     */
    private function configureDriver(array $parameter)
    {
        $settings = array();

        switch(strtolower($parameter['driver'])){
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
                $settings['consumerKey'] = $parameter['dropbox_settings']['consumerKey'];
                $settings['consumerSecret'] = $parameter['dropbox_settings']['consumerSecret'];
                $settings['accessToken'] = $parameter['dropbox_settings']['accessToken'];
                $settings['accessTokenSecret'] = $parameter['dropbox_settings']['accessTokenSecret'];
                $settings['dropboxUid'] = $parameter['dropbox_settings']['dropboxUid'];
                $settings['metaCachePath'] = $parameter['dropbox_settings']['metaCachePath'];
                break;
            case "s3":
                $settings['accesskey'] = $parameter['s3_settings']['accesskey'];
                $settings['secretkey'] = $parameter['s3_settings']['secretkey'];
                $settings['bucket'] = $parameter['s3_settings']['bucket'];
                $settings['tmpPath'] = $parameter['s3_settings']['tmpPath'];
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
     * @param  string $attr attribute name (read|write|locked|hidden)
     * @param  string $path file path relative to volume root directory started with directory separator
     * @param $data
     * @param $volume
     * @return bool|null
     */
    public function access($attr, $path, $data, $volume) {
        return strpos(basename($path), '.') === 0       // if file/folder begins with '.' (dot)
            ? !($attr == 'read' || $attr == 'write')    // set read+write to false, other (locked+hidden) set to true
            :  null;                                    // else elFinder decide it itself
    }
}