<?php

namespace FM\ElfinderBundle\Configuration;

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
use League\Flysystem\AwsS3V3\AwsS3V3Adapter as AwsS3v3;
use League\Flysystem\GridFS\GridFSAdapter;
use OpenCloud\Rackspace;
use League\Flysystem\Rackspace\RackspaceAdapter;
use MongoClient;
use League\Flysystem\Copy\CopyAdapter;
use League\Flysystem\ZipArchive\ZipArchiveAdapter;
use Aws\S3\S3Client;
use Spatie\Dropbox\Client;
use Barracuda\Copy\API;
use League\Flysystem\AzureBlobStorage\AzureBlobStorageAdapter;
use MicrosoftAzure\Storage\Blob\BlobRestProxy;

/**
 * Class ElFinderConfigurationReader.
 */
class ElFinderConfigurationReader implements ElFinderConfigurationProviderInterface
{
    /** @var array */
    protected $options = [];

    /** @var array */
    protected $parameters;

    /** @var RequestStack */
    protected $requestStack;

    /** @var ContainerInterface */
    protected $container;

    public function __construct(array $parameters, RequestStack $requestStack, ContainerInterface $container)
    {
        $this->parameters   = $parameters;
        $this->requestStack = $requestStack;
        $this->container    = $container;
    }

    public function getConfiguration(string $instance): array
    {
        $request                = $this->requestStack->getCurrentRequest();
        $efParameters           = $this->parameters;
        $parameters             = $efParameters['instances'][$instance];
        $options                = [];
        $options['corsSupport'] = $parameters['cors_support'];
        $options['debug']       = $parameters['connector']['debug'];
        $options['bind']        = $parameters['connector']['binds'];
        $options['plugin']      = $parameters['connector']['plugins'];
        $options['roots']       = [];

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
            $driver = $this->container->has($parameter['driver']) ? $this->container->get($parameter['driver']) : false;

            $driverOptions = [
                'driver'            => $parameter['driver'],
                'service'           => $driver,
                'glideURL'          => $parameter['glide_url'],
                'glideKey'          => $parameter['glide_key'],
                'plugin'            => $options['plugin'],
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
                'uploadMaxConn'     => $parameter['upload_max_conn'],
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
            ];

            if (null !== $parameter['quarantine']) {
                $driverOptions['quarantine'] = $parameter['quarantine'];
            }

            if ($parameter['volume_id'] > 0) {
                $driverOptions['id'] = $parameter['volume_id'];
            }

            if (!$parameter['show_hidden']) {
                $driverOptions['accessControl'] = [$this, 'access'];
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

    private function getURL(array $parameter, Request $request, string $homeFolder, string $path): string
    {
        if (isset($parameter['url']) && $parameter['url']) {
            if (0 === strpos($parameter['url'], 'http')) {
                return str_replace('{homeFolder}', $homeFolder, $parameter['url']);
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
     */
    private function configureFlysystem($opt, $adapter, $serviceName)
    {
        $filesystem = null;
        switch ($adapter) {
            case 'local':
                $filesystem = new Filesystem(new Local($opt['local']['path']));

                break;
            case 'ftp':
                $settings = [
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
                ];
                $filesystem = new Filesystem(new Ftp($settings));

                break;
            case 'sftp':
                $settings = [
                  'host'       => $opt['sftp']['host'],
                  'port'       => $opt['sftp']['port'],
                  'username'   => $opt['sftp']['username'],
                  'password'   => $opt['sftp']['password'],
                  'privateKey' => $opt['sftp']['privateKey'],
                  'root'       => $opt['sftp']['root'],
                  'timeout'    => $opt['sftp']['timeout'],
                ];
                $filesystem = new Filesystem(new SftpAdapter($settings));

                break;
            case 'azure':
                $client = BlobRestProxy::createBlobService(
                    sprintf('DefaultEndpointsProtocol=https;AccountName=%s;AccountKey=%s;', $opt['azure']['account_name'], $opt['azure']['account_key'])
                );
                $adapter    = new AzureBlobStorageAdapter($client, $opt['azure']['container_name']);
                $filesystem = new Filesystem($adapter);

                break;
            case 'aws_s3_v2':
                $options = [
                    'key'     => $opt['aws_s3_v2']['key'],
                    'secret'  => $opt['aws_s3_v2']['secret'],
                    'region'  => $opt['aws_s3_v2']['region'],
                ];
                if (isset($opt['aws_s3_v2']['base_url']) && $opt['aws_s3_v2']['base_url']) {
                    $options['base_url'] = $opt['aws_s3_v2']['base_url'];
                }
                $client     = S3Client::factory($options);
                $filesystem = new Filesystem(new AwsS3v2($client, $opt['aws_s3_v2']['bucket_name'], $opt['aws_s3_v2']['optional_prefix']));

                break;
            case 'aws_s3_v3':
                $s3Options = [
                    'region'                  => $opt['aws_s3_v3']['region'],
                    'version'                 => $opt['aws_s3_v3']['version'],
                    'endpoint'                => $opt['aws_s3_v3']['endpoint'],
                    'use_path_style_endpoint' => $opt['aws_s3_v3']['use_path_style_endpoint'],
                ];
                if (!empty($opt['aws_s3_v3']['key']) && !empty($opt['aws_s3_v3']['secret'])) {
                    $s3Options['credentials'] = [
                        'key'    => $opt['aws_s3_v3']['key'],
                        'secret' => $opt['aws_s3_v3']['secret'],
                    ];
                }
                $client     = new S3Client($s3Options);
                $filesystem = new Filesystem(new AwsS3v3($client, $opt['aws_s3_v3']['bucket_name'], $opt['aws_s3_v3']['optional_prefix'], null, null, $opt['aws_s3_v3']['options']));

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
                $client = new Rackspace(Rackspace::$opt['rackspace']['endpoint'], [
                    'username' => $opt['rackspace']['username'],
                    'apiKey'   => $opt['rackspace']['apikey'],
                ]);
                $store      = $client->objectStoreService('cloudFiles', $opt['rackspace']['region']);
                $container  = $store->getContainer($opt['rackspace']['container']);
                $filesystem = new Filesystem(new RackspaceAdapter($container));

                break;
            case 'custom':
                $adapter = $this->container->get($serviceName);
                try {
                    $filesystem = new Filesystem($adapter);
                } catch (\TypeError $error) {
                    throw new \Exception(sprintf('Service %s is not an instance of %s.', $serviceName, AdapterInterface::class));
                }

                break;
        }

        return $filesystem;
    }

    private function getFlysystemFilesystem(string $serviceName)
    {
        $filesystem = $this->container->get($serviceName);
        if (!is_object($filesystem) || (!$filesystem instanceof Filesystem)) {
            throw new \Exception(sprintf('Service %s is not an instance of %s.', $serviceName, Filesystem::class));
        }

        return $filesystem;
    }

    private function configureDriver(array $parameter): array
    {
        $settings = [];

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
     * @return array
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
