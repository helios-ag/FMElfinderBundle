<?php

namespace FM\ElfinderBundle\Configuration;

use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

final class HomeFolderPath
{
    public static function assertValid(string $homeFolder): void
    {
        if ('' === $homeFolder) {
            return;
        }

        if (true === str_contains($homeFolder, "\0") ||
            true === str_contains($homeFolder, '\\') ||
            true === str_starts_with($homeFolder, '/') ||
            true === str_ends_with($homeFolder, '/')
        ) {
            throw new BadRequestHttpException('Invalid home folder path.');
        }

        foreach (explode('/', $homeFolder) as $segment) {
            if ('' === $segment || '.' === $segment || '..' === $segment) {
                throw new BadRequestHttpException('Invalid home folder path.');
            }
        }
    }
}
