<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Model;

/**
 * Interface ElFinderConfigurationProviderInterface.
 */
interface ElFinderConfigurationProviderInterface
{
    public function getConfiguration(string $instance): array;
}
