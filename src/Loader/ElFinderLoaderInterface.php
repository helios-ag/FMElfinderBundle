<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Loader;

use Exception;
use FM\ElfinderBundle\Configuration\ElFinderConfigurationProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

interface ElFinderLoaderInterface
{
    /**
     * @throws Exception
     */
    public function configure(): array;

    /**
     * Configure the Bridge to ElFinder.
     *
     * @throws Exception
     */
    public function initBridge(string $instance, array $efParameters);

    public function load(Request $request): array|string;

    public function setInstance(string $instance): void;

    public function setConfigurator(ElFinderConfigurationProviderInterface $configurator);

    public function encode(string $path): mixed;

    public function decode(string $hash): string;

    public function setSession(?SessionInterface $session): void;
}
