<?php

namespace FM\ElfinderBundle\Bridge;

use FM\ElFinderBundle\ElFinder\ElFinder;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Class ElFinderBridge.
 * Use Symfony services as regular VolumeDrivers.
 */
class ElFinderBridge extends ElFinder
{

    /** @var SessionInterface */
    protected $session;

    /**
     * ElFinderBridge constructor.
     * @param $opts
     */
    public function __construct($opts)
    {
        if ($this->session) {
            $opts = array_merge($opts, ['session' => $this->session]);
        }
        parent::__construct($opts);
    }
    
    /**
     * @param array $opts
     */
    protected function mountVolumes($opts)
    {
        foreach ($opts['roots'] as $i => $o) {
            $volume = null;
            if (isset($o['service'])) {
                $driver = $o['service'];
                if (is_object($driver) && $driver instanceof \elFinderVolumeDriver) {
                    $volume = $driver;
                    unset($opts['roots'][$i]);
                }
            }

            if ($volume && $volume->mount($o)) {
                // unique volume id (ends on "_") - used as prefix to files hash
                $id = $volume->id();

                $this->volumes[$id] = $volume;
                if (!$this->default && $volume->isReadable()) {
                    $this->default = $this->volumes[$id];
                }
            }
        }
        parent::mountVolumes($opts);
    }

    /**
     * @param $session
     */
    public function setSession($session)
    {
        $this->session = $session;
    }
}
