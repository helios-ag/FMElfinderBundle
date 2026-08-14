<?php

namespace FM\ElfinderBundle\Tests\DependencyInjection;

use FM\ElfinderBundle\DependencyInjection\Configuration;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\Definition\Processor;

class ConfigurationTest extends TestCase
{
    /**
     * Several array nodes accept a comma-separated string that is normalised
     * into a trimmed list of scalars. The fixture-based test feeds arrays, so
     * exercise the string path here.
     */
    public function testNormalisesCommaSeparatedStringsToTrimmedArrays(): void
    {
        $processed = (new Processor())->processConfiguration(new Configuration(), [
            [
                'instances' => [
                    'default' => [
                        'where_is_multi' => 'a , b ,c',
                        'visible_mime_types' => 'image/png, image/jpg',
                        'connector' => [
                            'roots' => [
                                'uploads' => [
                                    'driver' => 'LocalFileSystem',
                                    'upload_allow' => 'image/png,image/jpeg',
                                    'upload_deny' => 'all, write',
                                    'upload_order' => 'deny, allow',
                                    'disabled_commands' => 'rm,delete',
                                    'archive_mimes' => 'application/zip',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ]);

        $instance = $processed['instances']['default'];
        $root = $instance['connector']['roots']['uploads'];

        $this->assertSame(['a', 'b', 'c'], $instance['where_is_multi']);
        $this->assertSame(['image/png', 'image/jpg'], $instance['visible_mime_types']);
        $this->assertSame(['image/png', 'image/jpeg'], $root['upload_allow']);
        $this->assertSame(['all', 'write'], $root['upload_deny']);
        $this->assertSame(['deny', 'allow'], $root['upload_order']);
        $this->assertSame(['rm', 'delete'], $root['disabled_commands']);
        $this->assertSame(['application/zip'], $root['archive_mimes']);
    }
}
