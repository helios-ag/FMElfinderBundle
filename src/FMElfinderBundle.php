<?php

namespace FM\ElfinderBundle;

use FM\ElfinderBundle\DependencyInjection\Compiler\ElFinderConfigurationPass;
use FM\ElfinderBundle\DependencyInjection\Compiler\TwigFormPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class FMElfinderBundle extends Bundle
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new TwigFormPass());
        $container->addCompilerPass(new ElFinderConfigurationPass());
    }
}
