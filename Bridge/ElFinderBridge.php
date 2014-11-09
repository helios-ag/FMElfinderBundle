<?php

namespace FM\ElfinderBundle\Bridge;

use FM\ElFinderPHP\ElFinder;
use FM\ElFinderPHP\Driver\ElFinderVolumeDriver;

/**
 * Class ElFinderBridge
 *
 * Use Symfony services as regular VolumeDrivers.
 *
 */
class ElFinderBridge extends ElFinder
{
    /**
     * @param array $opts
     */
    protected function mountVolumes($opts)
    {
        foreach ($opts['roots'] as $i => $o) {
            $volume = null;
            if (isset($o['service'])) {
                $driver = $o['service'];
                if (is_object($driver) && $driver instanceof ElFinderVolumeDriver) {
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
}
