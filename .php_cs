<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$finder = Finder::create()
    ->in(__DIR__)
    ->exclude('vendor');

return Config::create()
    ->setUsingCache(true)
    ->setRules([
        '@Symfony'               => true,
        'array_syntax'           => ['syntax' => 'short'],
        'ordered_imports'        => true,
        'yoda_style'             => false,
    ])
    ->setFinder($finder);