<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Loader;

use Symfony\Component\HttpFoundation\File\UploadedFile;

interface ElFinderUploadLoaderInterface
{
    /**
     * Uploads a single already-validated file through the elFinder bridge.
     *
     * initBridge() must be called for the target instance before upload(),
     * otherwise no bridge or volumes are available.
     *
     * @return array<string, mixed>
     */
    public function upload(UploadedFile $file): array;
}
