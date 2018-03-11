<?php

namespace FM\ElfinderBundle\ElFinder;

use elFinder as BaseElFinder;
use elFinderSessionInterface;

/**
 * Class ElFinder.
 */
class ElFinder extends BaseElFinder
{
    /**
     * Constructor.
     *
     * @param  array  elFinder and roots configurations
     *
     * @author Dmitry (dio) Levashov
     */
    public function __construct($opts)
    {
        // set default_charset
        if (version_compare(PHP_VERSION, '5.6', '>=')) {
            ini_set('internal_encoding', 'UTF-8');
            ini_set('default_charset', 'UTF-8');
        }

        // define accept constant of server commands path
        !defined('ELFINDER_TAR_PATH') && define('ELFINDER_TAR_PATH', 'tar');
        !defined('ELFINDER_GZIP_PATH') && define('ELFINDER_GZIP_PATH', 'gzip');
        !defined('ELFINDER_BZIP2_PATH') && define('ELFINDER_BZIP2_PATH', 'bzip2');
        !defined('ELFINDER_XZ_PATH') && define('ELFINDER_XZ_PATH', 'xz');
        !defined('ELFINDER_ZIP_PATH') && define('ELFINDER_ZIP_PATH', 'zip');
        !defined('ELFINDER_UNZIP_PATH') && define('ELFINDER_UNZIP_PATH', 'unzip');
        !defined('ELFINDER_RAR_PATH') && define('ELFINDER_RAR_PATH', 'rar');
        !defined('ELFINDER_UNRAR_PATH') && define('ELFINDER_UNRAR_PATH', 'unrar');
        !defined('ELFINDER_7Z_PATH') && define('ELFINDER_7Z_PATH', ('WIN' === substr(PHP_OS, 0, 3)) ? '7z' : '7za');
        !defined('ELFINDER_CONVERT_PATH') && define('ELFINDER_CONVERT_PATH', 'convert');
        !defined('ELFINDER_EXIFTRAN_PATH') && define('ELFINDER_EXIFTRAN_PATH', 'exiftran');
        !defined('ELFINDER_JPEGTRAN_PATH') && define('ELFINDER_JPEGTRAN_PATH', 'jpegtran');
        !defined('ELFINDER_FFMPEG_PATH') && define('ELFINDER_FFMPEG_PATH', 'ffmpeg');

        // for backward compat
        $this->version = (string) self::$ApiVersion;

        // set error handler of WARNING, NOTICE
        $errLevel = E_WARNING | E_NOTICE | E_USER_WARNING | E_USER_NOTICE | E_STRICT | E_RECOVERABLE_ERROR;
        if (defined('E_DEPRECATED')) {
            $errLevel |= E_DEPRECATED | E_USER_DEPRECATED;
        }
        set_error_handler('elFinder::phpErrorHandler', $errLevel);

        // Associative array of files to delete at the end of script: ['temp file path' => true]
        $GLOBALS['elFinderTempFiles'] = array();
        // regist Shutdown function
        register_shutdown_function(array('elFinder', 'onShutdown'));

        // convert PATH_INFO to GET query
        if (!empty($_SERVER['PATH_INFO'])) {
            $_ps = explode('/', trim($_SERVER['PATH_INFO'], '/'));
            if (!isset($_GET['cmd'])) {
                $_cmd = $_ps[0];
                if (isset($this->commands[$_cmd])) {
                    $_GET['cmd'] = $_cmd;
                    $_i          = 1;
                    foreach (array_keys($this->commands[$_cmd]) as $_k) {
                        if (isset($_ps[$_i])) {
                            if (!isset($_GET[$_k])) {
                                $_GET[$_k] = $_ps[$_i];
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        // set elFinder instance
        self::$instance = $this;

        // setup debug mode
        $this->debug = (isset($opts['debug']) && $opts['debug'] ? true : false);
        if ($this->debug) {
            error_reporting(defined('ELFINDER_DEBUG_ERRORLEVEL') ? ELFINDER_DEBUG_ERRORLEVEL : -1);
            ini_set('diaplay_errors', '1');
            // clear output buffer and stop output filters
            while (ob_get_level() && ob_end_clean()) {
            }
        }

        if (!interface_exists('elFinderSessionInterface')) {
            include_once dirname(__FILE__).'/elFinderSessionInterface.php';
        }

        // session handler
        if (!empty($opts['session']) && $opts['session'] instanceof elFinderSessionInterface) {
            $this->session = $opts['session'];
        } else {
            $sessionOpts = array(
                'base64encode' => !empty($opts['base64encodeSessionData']),
                'keys'         => array(
                    'default'   => !empty($opts['sessionCacheKey']) ? $opts['sessionCacheKey'] : 'elFinderCaches',
                    'netvolume' => !empty($opts['netVolumesSessionKey']) ? $opts['netVolumesSessionKey'] : 'elFinderNetVolumes',
                ),
            );
            $this->session = new \elFinderSession($sessionOpts);
        }
        // try session start | restart
        $this->session->start();

        $sessionUseCmds = array();
        if (isset($opts['sessionUseCmds']) && is_array($opts['sessionUseCmds'])) {
            $sessionUseCmds = $opts['sessionUseCmds'];
        }

        // set self::$volumesCnt by HTTP header "X-elFinder-VolumesCntStart"
        if (isset($_SERVER['HTTP_X_ELFINDER_VOLUMESCNTSTART']) && ($volumesCntStart = intval($_SERVER['HTTP_X_ELFINDER_VOLUMESCNTSTART']))) {
            self::$volumesCnt = $volumesCntStart;
        }

        $this->time                = $this->utime();
        $this->sessionCloseEarlier = isset($opts['sessionCloseEarlier']) ? (bool) $opts['sessionCloseEarlier'] : true;
        $this->sessionUseCmds      = array_flip($sessionUseCmds);
        $this->timeout             = (isset($opts['timeout']) ? $opts['timeout'] : 0);
        $this->uploadTempPath      = (isset($opts['uploadTempPath']) ? $opts['uploadTempPath'] : '');
        $this->callbackWindowURL   = (isset($opts['callbackWindowURL']) ? $opts['callbackWindowURL'] : '');
        $this->maxTargets          = (isset($opts['maxTargets']) ? intval($opts['maxTargets']) : $this->maxTargets);
        self::$commonTempPath      = (isset($opts['commonTempPath']) ? $opts['commonTempPath'] : './.tmp');
        if (!is_writable(self::$commonTempPath)) {
            self::$commonTempPath = sys_get_temp_dir();
            if (!is_writable(self::$commonTempPath)) {
                self::$commonTempPath = '';
            }
        }
        if (isset($opts['connectionFlagsPath']) && is_writable($opts['connectionFlagsPath'])) {
            self::$connectionFlagsPath = $opts['connectionFlagsPath'];
        } else {
            self::$connectionFlagsPath = self::$commonTempPath;
        }

        if (!empty($opts['tmpLinkPath'])) {
            self::$tmpLinkPath = $opts['tmpLinkPath'];
        }
        if (!empty($opts['tmpLinkUrl'])) {
            self::$tmpLinkUrl = $opts['tmpLinkUrl'];
        }
        if (!empty($opts['tmpLinkLifeTime'])) {
            self::$tmpLinkLifeTime = $opts['tmpLinkLifeTime'];
        }
        if (!empty($opts['textMimes']) && is_array($opts['textMimes'])) {
            self::$textMimes = $opts['textMimes'];
        }
        $this->maxArcFilesSize   = isset($opts['maxArcFilesSize']) ? intval($opts['maxArcFilesSize']) : 0;
        $this->optionsNetVolumes = (isset($opts['optionsNetVolumes']) && is_array($opts['optionsNetVolumes'])) ? $opts['optionsNetVolumes'] : array();
        if (isset($opts['itemLockExpire'])) {
            $this->itemLockExpire = intval($opts['itemLockExpire']);
        }

        // deprecated settings
        $this->netVolumesSessionKey = !empty($opts['netVolumesSessionKey']) ? $opts['netVolumesSessionKey'] : 'elFinderNetVolumes';
        self::$sessionCacheKey      = !empty($opts['sessionCacheKey']) ? $opts['sessionCacheKey'] : 'elFinderCaches';

        // check session cache
        $_optsMD5 = md5(json_encode($opts['roots']));
        if ($this->session->get('_optsMD5') !== $_optsMD5) {
            $this->session->set('_optsMD5', $_optsMD5);
        }

        // setlocale and global locale regists to elFinder::locale
        self::$locale = !empty($opts['locale']) ? $opts['locale'] : ('WIN' === substr(PHP_OS, 0, 3) ? 'C' : 'en_US.UTF-8');
        if (false === setlocale(LC_ALL, self::$locale)) {
            self::$locale = setlocale(LC_ALL, '0');
        }

        // set defaultMimefile
        self::$defaultMimefile = (isset($opts['defaultMimefile']) ? $opts['defaultMimefile'] : '');

        // bind events listeners
        if (!empty($opts['bind']) && is_array($opts['bind'])) {
            $_req    = 'POST' == $_SERVER['REQUEST_METHOD'] ? $_POST : $_GET;
            $_reqCmd = isset($_req['cmd']) ? $_req['cmd'] : '';
            foreach ($opts['bind'] as $cmd => $handlers) {
                $doRegist = (false !== strpos($cmd, '*'));
                if (!$doRegist) {
                    $doRegist = ($_reqCmd && in_array($_reqCmd, array_map('self::getCmdOfBind', explode(' ', $cmd))));
                }
                if ($doRegist) {
                    // for backward compatibility
                    if (!is_array($handlers)) {
                        $handlers = array($handlers);
                    } else {
                        if (2 === count($handlers) && is_object($handlers[0])) {
                            $handlers = array($handlers);
                        }
                    }
                    foreach ($handlers as $handler) {
                        if ($handler) {
                            if (is_string($handler) && strpos($handler, '.')) {
                                list($_domain, $_name, $_method) = array_pad(explode('.', $handler), 3, '');
                                if (0 === strcasecmp($_domain, 'plugin')) {
                                    if ($plugin = $this->getPluginInstance($_name, isset($opts['plugin'][$_name]) ? $opts['plugin'][$_name] : array())
                                        and method_exists($plugin, $_method)) {
                                        $this->bind($cmd, array($plugin, $_method));
                                    }
                                }
                            } else {
                                $this->bind($cmd, $handler);
                            }
                        }
                    }
                }
            }
        }

        if (!isset($opts['roots']) || !is_array($opts['roots'])) {
            $opts['roots'] = array();
        }

        // check for net volumes stored in session
        $netVolumes = $this->getNetVolumes();
        foreach ($netVolumes as $key => $root) {
            if (!isset($root['id'])) {
                // given fixed unique id
                if (!$root['id'] = $this->getNetVolumeUniqueId($netVolumes)) {
                    $this->mountErrors[] = 'Netmount Driver "'.$root['driver'].'" : Could\'t given volume id.';

                    continue;
                }
            }
            $opts['roots'][$key] = $root;
        }

        $this->mountVolumes($opts);

        // if at least one readable volume - ii desu >_<
        $this->loaded = !empty($this->default);

        // restore error handler for now
        restore_error_handler();
    }

    /**
     * Mount volumes.
     *
     * Instantiate corresponding driver class and
     * add it to the list of volumes.
     *
     * @param array $opts
     */
    protected function mountVolumes($opts)
    {
        foreach ($opts['roots'] as $i => $o) {
            $class = 'elFinderVolume'.(isset($o['driver']) ? $o['driver'] : '');

            if (class_exists($class)) {
                $volume = new $class();

                try {
                    if ($this->maxArcFilesSize && (empty($o['maxArcFilesSize']) || $this->maxArcFilesSize < $o['maxArcFilesSize'])) {
                        $o['maxArcFilesSize'] = $this->maxArcFilesSize;
                    }
                    // pass session handler
                    $volume->setSession($this->session);
                    if ($volume->mount($o)) {
                        // unique volume id (ends on "_") - used as prefix to files hash
                        $id = $volume->id();

                        $this->volumes[$id] = $volume;
                        if ((!$this->default || $volume->root() !== $volume->defaultPath()) && $volume->isReadable()) {
                            $this->default = $this->volumes[$id];
                        }
                    } else {
                        $this->removeNetVolume($i, $volume);
                        $this->mountErrors[] = 'Driver "'.$class.'" : '.implode(' ', $volume->error());
                    }
                } catch (Exception $e) {
                    $this->removeNetVolume($i, $volume);
                    $this->mountErrors[] = 'Driver "'.$class.'" : '.$e->getMessage();
                }
            } else {
                $this->removeNetVolume($i, $volume);
                $this->mountErrors[] = 'Driver "'.$class.'" does not exist';
            }
        }
    }
}
