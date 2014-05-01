<?php

namespace FM\ElfinderBundle\Model;

/**
 * Interface ElFinderConfigurationProviderInterface
 * @package FM\ElfinderBundle\Model
 */
interface ElFinderConfigurationProviderInterface
{
    /**
     * @param $instance
     * @return array
     */
    public function getConfiguration($instance);
}