<?php

namespace FM\ElfinderBundle\Configuration;

interface ElFinderConfigurationProviderInterface
{
    public function getConfiguration(string $instance): array;
}
