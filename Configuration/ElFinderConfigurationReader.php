<?php

namespace FM\ElfinderBundle\Configuration;

use FM\ElfinderBundle\Model\ElFinderConfigurationProviderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use League\Flysystem\Filesystem;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Adapter\Ftp;
use League\Flysystem\Dropbox\DropboxAdapter;
use League\Flysystem\Sftp\SftpAdapter;
use League\Flysystem\AwsS3v2\AwsS3Adapter as AwsS3v2;
use League\Flysystem\AwsS3v3\AwsS3Adapter as AwsS3v3;
use League\Flysystem\GridFS\GridFSAdapter;
use MongoClient;
use League\Flysystem\Copy\CopyAdapter;
use League\Flysystem\ZipArchive\ZipArchiveAdapter;
use Aws\S3\S3Client;
use Dropbox\Client;
use Barracuda\Copy\API;

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
        $options['corsSupport'] = $parameters['cors_support'];
        $options['debug'] = $parameters['connector']['debug'];
        $options['bind'] =  $parameters['connector']['bind'];
        $options['plugin'] =  $parameters['connector']['plugin'];
        $options['roots'] = array();

        foreach ($parameters['connector']['roots'] as $parameter) {
            $path = $parameter['path'];
            $homeFolder = $request->attributes->get('homeFolder');
            if ($homeFolder !== '') {
                $homeFolder = '/'.$homeFolder.'/';
            }
            if($parameter['flysystem']['enabled']) {
                $adapter = $parameter['flysystem']['type']; // ftp ex.
                $opt = $parameter['flysystem']['options'];
                $filesystem  = $this->configureFlysystem($opt, $adapter);
            }
            $driver = $this->container->has($parameter['driver']) ? $this->container->get($parameter['driver']) : null;

            $driverOptions = array(
                'driver'            => $parameter['driver'],
                'service'           => $driver,
                'glideURL'          => $parameter['glide_url'],
                'glideKey'          => $parameter['glide_key'],
                'plugin'            => $parameter['plugin'],
                'path'              => $path . $homeFolder, //removed slash for Flysystem compatibility
                'startPath'         => $parameter['start_path'],
                'URL'               => isset($parameter['url']) && $parameter['url']
                        ? strpos($parameter['url'], 'http') === 0
                            ? $parameter['url']
                            : sprintf('%s://%s%s/%s/%s', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $parameter['url'], $homeFolder)
                        : sprintf('%s://%s%s/%s/%s', $request->getScheme(), $request->getHttpHost(), $request->getBasePath(), $path, $homeFolder),
                'alias'             => $parameter['alias'],
                'mimeDetect'        => $parameter['mime_detect'],
                'mimefile'          => $parameter['mimefile'],
                'imgLib'            => $parameter['img_lib'],
                'tmbPath'           => $parameter['tmb_path'],
                'tmbPathMode'       => $parameter['tmb_path_mode'],
                'tmbUrl'            => $parameter['tmb_url'],
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
                'accessControl'     => $parameter['access_control'],
                'accessControlData' => $parameter['access_control_data'],
                'disabled'          => $parameter['disabled_commands'],
                'treeDeep'          => $parameter['tree_deep'],
                'checkSubfolders'   => $parameter['check_subfolders'],
                'separator'         => $parameter['separator'],
                'timeFormat'        => $parameter['time_format'],
                'archiveMimes'      => $parameter['archive_mimes'],
                'archivers'         => $parameter['archivers']
            );

            if(!$parameter['show_hidden']) {
                $driverOptions['accessControl'] = array($this, 'access');
            };

            if($parameter['driver'] == 'Flysystem') {
                $driverOptions['filesystem'] = $filesystem;
            }

            $options['roots'][] = array_merge($driverOptions, $this->configureDriver($parameter));
        }

        return $options;
    }

    /**
     * @param $opt
     * @param $adapter
     * @return Filesystem
     */
    private function configureFlysystem($opt, $adapter)
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

                    /** optional config settings */
                    'port'     => $opt['ftp']['port'],
                    'root'     => $opt['ftp']['root'],
                    'passive'  => $opt['ftp']['passive'],
                    'ssl'      => $opt['ftp']['ssl'],
                    'timeout'  => $opt['ftp']['timeout']
                );
                $filesystem = (!$opt['ftp']['sftp']) ? new Filesystem(new Ftp($settings)): new Filesystem(new SftpAdapter($settings));
                break;
            case 'aws_s3_v2':
                $client = S3Client::factory([
                    'key'     => $opt['aws_s3_v2']['key'],
                    'secret'  => $opt['aws_s3_v2']['secret'],
                    'region'  => $opt['aws_s3_v2']['region']
                ]);
                $filesystem = new Filesystem(new AwsS3v2($client, $opt['aws_s3_v2']['bucket_name'], $opt['aws_s3_v2']['optional_prefix']));
                break;
            case 'aws_s3_v3':
                $client = S3Client::factory([
                    'key'     => $opt['aws_s3_v3']['key'],
                    'secret'  => $opt['aws_s3_v3']['secret'],
                    'region'  => $opt['aws_s3_v3']['region'],
                    'version' => $opt['aws_s3_v3']['version']
                ]);
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
                $gridFs = $mongoClient->selectDB($opt['gridfs']['db_name'])->getGridFS();
                $filesystem = new Filesystem(new GridFSAdapter($gridFs));
                break;
            case 'zip':
                $filesystem = new Filesystem(new ZipArchiveAdapter($opt['zip']['path']));
                break;
            case 'dropbox':
                $filesystem = new Filesystem(new DropboxAdapter(new Client($opt['dropbox']['token'],$opt['dropbox']['app'])));
                break;
        }
        return $filesystem;
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
