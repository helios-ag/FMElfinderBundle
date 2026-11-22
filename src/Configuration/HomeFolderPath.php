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

        if (str_contains($homeFolder, "\0") ||
            str_contains($homeFolder, '\\') ||
            str_starts_with($homeFolder, '/') ||
            str_ends_with($homeFolder, '/')
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
