<?php

namespace FM\ElfinderBundle\Configuration;

/**
 * Interface ElFinderConfigurationProviderInterface.
 */
interface ElFinderConfigurationProviderInterface
{
    public function getConfiguration(string $instance): array;
}
