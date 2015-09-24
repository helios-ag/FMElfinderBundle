<?php

namespace FM\ElfinderBundle\Model;

/**
 * Interface ElFinderConfigurationProviderInterface.
 */
interface ElFinderConfigurationProviderInterface
{
    /**
     * @param $instance
     *
     * @return array
     */
    public function getConfiguration($instance);
}
