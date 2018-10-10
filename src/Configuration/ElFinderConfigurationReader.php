<?php

namespace FM\ElfinderBundle\Configuration;

use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use FM\ElfinderBundle\Security\ElfinderSecurityInterface;
use League\Flysystem\AdapterInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use League\Flysystem\Filesystem;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Adapter\Ftp;
use Spatie\FlysystemDropbox\DropboxAdapter;
use League\Flysystem\Sftp\SftpAdapter;
use League\Flysystem\AwsS3v2\AwsS3Adapter as AwsS3v2;
use League\Flysystem\AwsS3v3\AwsS3Adapter as AwsS3v3;
use League\Flysystem\GridFS\GridFSAdapter;
use OpenCloud\Rackspace;
use League\Flysystem\Rackspace\RackspaceAdapter;
use MongoClient;
use League\Flysystem\Copy\CopyAdapter;
use League\Flysystem\ZipArchive\ZipArchiveAdapter;
use Aws\S3\S3Client;
use Spatie\Dropbox\Client;
use Barracuda\Copy\API;

/**
 * Class ElFinderConfigurationReader.
 */
class ElFinderConfigurationReader implements ElFinderConfigurationProviderInterface
{
    /**
     * @var array
     */
    protected $options = array();

    /**
     * @var array
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
     * @param ContainerInterface                             $container
     */
    public function __construct($parameters, RequestStack $requestStack, ContainerInterface $container)
    {
        $this->parameters   = $parameters;
        $this->requestStack = $requestStack;
        $this->container    = $container;
    }

    /**
     * @param $instance
     *
     * @return array
     *
     * @throws \Exception
     */
    public function getConfiguration($instance)
    {
        $request                = $this->requestStack->getCurrentRequest();
        $efParameters           = $this->parameters;
        $parameters             = $efParameters['instances'][$instance];
        $options                = array();
        $options['corsSupport'] = $parameters['cors_support'];
        $options['debug']       = $parameters['connector']['debug'];
        $options['bind']        = $parameters['connector']['binds'];
        $options['plugins']     = $parameters['connector']['plugins'];
        $options['roots']       = array();

        foreach ($parameters['connector']['roots'] as $parameter) {
            $path              = $parameter['path'];
            $homeFolder        = $request->attributes->get('homeFolder');
            $pathAndHomeFolder = $homeFolder ? sprintf('%s/%s', $path, $homeFolder) : $path;

            if ($parameter['flysystem']['enabled']) {
                if ($parameter['flysystem']['filesystem']) {
                    $serviceName = $parameter['flysystem']['filesystem'];
                    $filesystem  = $this->getFlysystemFilesystem($serviceName);
                } else {
                    $adapter     = $parameter['flysystem']['type']; // ftp ex.
                    $serviceName = $parameter['flysystem']['adapter_service'];
                    $opt         = $parameter['flysystem']['options'];
                    $filesystem  = $this->configureFlysystem($opt, $adapter, $serviceName);
                }
            }
            $driver = $this->container->has($parameter['driver']) ? $this->container->get($parameter['driver']) : null;

            $driverOptions = array(
                'driver'            => $parameter['driver'],
                'service'           => $driver,
                'glideURL'          => $parameter['glide_url'],
                'glideKey'          => $parameter['glide_key'],
                'plugin'            => $parameter['plugins'],
                'path'              => $pathAndHomeFolder,
                'startPath'         => $parameter['start_path'],
                'encoding'          => $parameter['encoding'],
                'URL'               => $this->getURL($parameter, $request, $homeFolder, $path),
                'alias'             => $parameter['alias'],
                'mimeDetect'        => $parameter['mime_detect'],
                'mimefile'          => $parameter['mimefile'],
                'imgLib'            => $parameter['img_lib'],
                'tmbPath'           => $parameter['tmb_path'],
                'tmbPathMode'       => $parameter['tmb_path_mode'],
                'tmbURL'            => $parameter['tmb_url'],
                'tmbSize'           => $parameter['tmb_size'],
                'tmbCrop'           => $parameter['tmb_crop'],
                'tmbBgColor'        => $parameter['tmb_bg_color'],
                'copyOverwrite'     => $parameter['copy_overwrite'],
                'copyJoin'          => $parameter['copy_join'],
                'copyFrom'          => $parameter['copy_from'],
                'copyTo'            => $parameter['copy_to'],
                'uploadOverwrite'   => $parameter['upload_overwrite'],
                'uploadAllow'       => $parameter['upload_allow'],
                'uploadDeny'        => $parameter['upload_deny'],
                'uploadMaxSize'     => $parameter['upload_max_size'],
                'defaults'          => $parameter['defaults'],
                'attributes'        => $parameter['attributes'],
                'acceptedName'      => $parameter['accepted_name'],
                'disabled'          => $parameter['disabled_commands'],
                'treeDeep'          => $parameter['tree_deep'],
                'checkSubfolders'   => $parameter['check_subfolders'],
                'separator'         => $parameter['separator'],
                'timeFormat'        => $parameter['time_format'],
                'archiveMimes'      => $parameter['archive_mimes'],
                'archivers'         => $parameter['archivers'],
                'fileMode'          => $parameter['fileMode'],
            );

            if ($parameter['volume_id'] > 0) {
                $driverOptions['id'] = $parameter['volume_id'];
            }

            if (!$parameter['show_hidden']) {
                $driverOptions['accessControl'] = array($this, 'access');
            }

            if ($parameter['security_voter']) {
                /** @var ElfinderSecurityInterface $voter */
                $voter = $this->container->get($parameter['security_voter']);

                $driverOptions['disabled'] = $this->parseSecurityConfiguration($voter);
            }

            if ('Flysystem' == $parameter['driver']) {
                $driverOptions['filesystem'] = $filesystem;
            }
            $options['roots'][] = array_merge($driverOptions, $this->configureDriver($parameter));
        }

        return $options;
    }

    /**
     * @param $parameter
     * @param $request
     * @param $homeFolder
     * @param $path
     *
     * @return string
     */
    private function getURL($parameter, Request $request, $homeFolder, $path)
    {
        if (isset($parameter['url']) && $parameter['url']) {
            if (0 === strpos($parameter['url'], 'http')) {
                return $parameter['url'];
            }

            $path = $parameter['url'].'/'.$homeFolder;
        } else {
            $path = $path.'/'.$homeFolder;
        }

        return $request->getUriForPath('/'.trim($path, '/'));
    }

    /**
     * @param $opt
     * @param $adapter
     * @param $serviceName
     *
     * @return Filesystem
     *
     * @throws \MongoConnectionException
     */
    private function configureFlysystem($opt, $adapter, $serviceName)
    {
        switch ($adapter) {
            case 'local':
                $filesystem = new Filesystem(new Local($opt['local']['path']));

                break;
            case 'ftp':
                $settings = array(
                    'host'     => $opt['ftp']['host'],
                    'username' => $opt['ftp']['username'],
                    'password' => $opt['ftp']['password'],

                    /* optional config settings */
                    'port'          => $opt['ftp']['port'],
                    'root'          => $opt['ftp']['root'],
                    'passive'       => $opt['ftp']['passive'],
                    'ssl'           => $opt['ftp']['ssl'],
                    'timeout'       => $opt['ftp']['timeout'],
                    'directoryPerm' => $opt['ftp']['directoryPerm'],
                );
                $filesystem = new Filesystem(new Ftp($settings));

                break;
            case 'sftp':
                $settings = array(
                  'host' => $opt['sftp']['host'],
                  'port' => $opt['sftp']['port'],
                  'username' => $opt['sftp']['username'],
                  'password' => $opt['sftp']['password'],
                  'privateKey' => $opt['sftp']['privateKey'],
                  'root' => $opt['sftp']['root'],
                  'timeout' => $opt['sftp']['timeout'],
                );
                $filesystem = new Filesystem(new SftpAdapter($settings));

                break;
            case 'aws_s3_v2':
                $options = array(
                    'key'     => $opt['aws_s3_v2']['key'],
                    'secret'  => $opt['aws_s3_v2']['secret'],
                    'region'  => $opt['aws_s3_v2']['region'],
                );
                if (isset($opt['aws_s3_v2']['base_url']) && $opt['aws_s3_v2']['base_url']) {
                    $options['base_url'] = $opt['aws_s3_v2']['base_url'];
                }
                $client     = S3Client::factory($options);
                $filesystem = new Filesystem(new AwsS3v2($client, $opt['aws_s3_v2']['bucket_name'], $opt['aws_s3_v2']['optional_prefix']));

                break;
            case 'aws_s3_v3':
                $client = new S3Client(array(
                    'credentials' => array(
                        'key'     => $opt['aws_s3_v3']['key'],
                        'secret'  => $opt['aws_s3_v3']['secret'],
                    ),
                    'region'  => $opt['aws_s3_v3']['region'],
                    'version' => $opt['aws_s3_v3']['version'],
                ));
                $filesystem = new Filesystem(new AwsS3v3($client, $opt['aws_s3_v3']['bucket_name'], $opt['aws_s3_v3']['optional_prefix']));

                break;
            case 'copy_com':
                $client = new API(
                    $opt['copy_com']['consumer_key'],
                    $opt['copy_com']['consumer_secret'],
                    $opt['copy_com']['access_token'],
                    $opt['copy_com']['token_secret']
                );
                $filesystem = new Filesystem(new CopyAdapter($client, $opt['copy_com']['optional_prefix']));

                break;
            case 'gridfs':
                $mongoClient = new MongoClient();
                $gridFs      = $mongoClient->selectDB($opt['gridfs']['db_name'])->getGridFS();
                $filesystem  = new Filesystem(new GridFSAdapter($gridFs));

                break;
            case 'zip':
                $filesystem = new Filesystem(new ZipArchiveAdapter($opt['zip']['path']));

                break;
            case 'dropbox':
                $filesystem = new Filesystem(new DropboxAdapter(new Client($opt['dropbox']['token'])));

                break;
            case 'rackspace':
                $client = new Rackspace(Rackspace::$opt['rackspace']['endpoint'], array(
                    'username' => $opt['rackspace']['username'],
                    'apiKey'   => $opt['rackspace']['apikey'],
                ));
                $store      = $client->objectStoreService('cloudFiles', $opt['rackspace']['region']);
                $container  = $store->getContainer($opt['rackspace']['container']);
                $filesystem = new Filesystem(new RackspaceAdapter($container));

                break;
            case 'custom':
                $adapter = $this->container->get($serviceName);
                if (is_object($adapter) && $adapter instanceof AdapterInterface) {
                    $filesystem = new Filesystem($adapter);
                }

                break;
        }

        return $filesystem;
    }

    private function getFlysystemFilesystem($serviceName)
    {
        $filesystem = $this->container->get($serviceName);
        if (!is_object($filesystem) || (!$filesystem instanceof Filesystem)) {
            throw new \Exception(sprintf('Service %s is not an instance of %s.', $serviceName, Filesystem::class));
        }

        return $filesystem;
    }

    /**
     * @param array $parameter
     *
     * @return array
     */
    private function configureDriver(array $parameter)
    {
        $settings = array();

        switch (strtolower($parameter['driver'])) {
            case 'ftp':
                $settings['host'] = $parameter['ftp_settings']['host'];
                $settings['user'] = $parameter['ftp_settings']['user'];
                $settings['pass'] = $parameter['ftp_settings']['password'];
                $settings['path'] = $parameter['ftp_settings']['path'];

                break;
            case 'mysql':
                $settings['host']           = $parameter['mysql_settings']['host'];
                $settings['user']           = $parameter['mysql_settings']['user'];
                $settings['pass']           = $parameter['mysql_settings']['pass'];
                $settings['db']             = $parameter['mysql_settings']['db'];
                $settings['port']           = $parameter['mysql_settings']['port'];
                $settings['socket']         = $parameter['mysql_settings']['socket'];
                $settings['files_table']    = $parameter['mysql_settings']['files_table'];
                $settings['tmbPath']        = $parameter['mysql_settings']['tmbPath'];
                $settings['tmpPath']        = $parameter['mysql_settings']['tmpPath'];
                $settings['rootCssClass']   = $parameter['mysql_settings']['rootCssClass'];
                $settings['noSessionCache'] = explode(',', $parameter['mysql_settings']['noSessionCache']);

                break;
            case 'ftpiis':
                $settings['host'] = $parameter['ftp_settings']['host'];
                $settings['user'] = $parameter['ftp_settings']['user'];
                $settings['pass'] = $parameter['ftp_settings']['password'];
                $settings['path'] = $parameter['ftp_settings']['path'];

                break;
            case 'dropbox2':
                $settings['app_key']           = $parameter['dropbox2_settings']['app_key'];
                $settings['app_secret']        = $parameter['dropbox2_settings']['app_secret'];
                $settings['access_token']      = $parameter['dropbox2_settings']['access_token'];
                $settings['aliasFormat']       = $parameter['dropbox2_settings']['aliasFormat'];
                $settings['path']              = $parameter['dropbox2_settings']['path'];
                $settings['separator']         = $parameter['dropbox2_settings']['separator'];
                $settings['acceptedName']      = $parameter['dropbox2_settings']['acceptedName'];
                $settings['rootCssClass']      = $parameter['dropbox2_settings']['rootCssClass'];
                $settings['publishPermission'] = $parameter['dropbox2_settings']['publishPermission'];
                $settings['getThumbSize']      = $parameter['dropbox2_settings']['getThumbSize'];

                break;
            case 'onedrive':
                $settings['client_id']         = $parameter['onedrive_settings']['client_id'];
                $settings['client_secret']     = $parameter['onedrive_settings']['client_secret'];
                $settings['accessToken']       = $parameter['onedrive_settings']['accessToken'];
                $settings['root']              = $parameter['onedrive_settings']['root'];
                $settings['OneDriveApiClient'] = $parameter['onedrive_settings']['OneDriveApiClient'];
                $settings['path']              = $parameter['onedrive_settings']['path'];
                $settings['separator']         = $parameter['onedrive_settings']['separator'];
                $settings['tmbPath']           = $parameter['onedrive_settings']['tmbPath'];
                $settings['tmbURL']            = $parameter['onedrive_settings']['tmbURL'];
                $settings['tmpPath']           = $parameter['onedrive_settings']['tmpPath'];
                $settings['acceptedName']      = $parameter['onedrive_settings']['acceptedName'];
                $settings['rootCssClass']      = $parameter['onedrive_settings']['rootCssClass'];
                $settings['useApiThumbnail']   = $parameter['onedrive_settings']['useApiThumbnail'];

                break;
            case 'box':
                $settings['client_id']         = $parameter['box_settings']['client_id'];
                $settings['client_secret']     = $parameter['box_settings']['client_secret'];
                $settings['accessToken']       = $parameter['box_settings']['accessToken'];
                $settings['root']              = $parameter['box_settings']['root'];
                $settings['path']              = $parameter['box_settings']['path'];
                $settings['separator']         = $parameter['box_settings']['separator'];
                $settings['tmbPath']           = $parameter['box_settings']['tmbPath'];
                $settings['tmbURL']            = $parameter['box_settings']['tmbURL'];
                $settings['acceptedName']      = $parameter['box_settings']['acceptedName'];
                $settings['rootCssClass']      = $parameter['box_settings']['rootCssClass'];

                break;
            case 's3':
                $settings['accesskey']   = $parameter['s3_settings']['access_key'];
                $settings['secretkey']   = $parameter['s3_settings']['secret_key'];
                $settings['bucket']      = $parameter['s3_settings']['bucket'];
                $settings['tmpPath']     = $parameter['s3_settings']['tmp_path'];
                $settings['signature']   = $parameter['s3_settings']['signature'];
                $settings['region']      = $parameter['s3_settings']['region'];

                break;
            default:
                break;
        }

        return $settings;
    }

    /**
     * Simple function to demonstrate how to control file access using "accessControl" callback.
     * This method will disable accessing files/folders starting from '.' (dot).
     *
     * @param string $attr attribute name (read|write|locked|hidden)
     * @param string $path file path relative to volume root directory started with directory separator
     * @param $data
     * @param $volume
     *
     * @return bool|null
     */
    public function access($attr, $path, $data, $volume)
    {
        return 0 === strpos(basename($path), '.')       // if file/folder begins with '.' (dot)
            ? !('read' == $attr || 'write' == $attr)    // set read+write to false, other (locked+hidden) set to true
            : null;                                    // else elFinder decide it itself
    }

    /**
     * @param ElfinderSecurityInterface $voter
     *
     * @return array
     *
     * @throws \Exception
     */
    protected function parseSecurityConfiguration(ElfinderSecurityInterface $voter)
    {
        $configuration = $voter->getConfiguration();

        if (!is_array($configuration)) {
            throw new \Exception('ElfinderSecurityVoter should return array');
        }

        foreach ($configuration as $role => $commands) {
            if ($this->container->get('security.authorization_checker')->isGranted($role)) {
                return $commands;
            }
        }

        return [];
    }
}
