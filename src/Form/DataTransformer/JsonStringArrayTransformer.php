<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Form\DataTransformer;

use JsonException;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

final class JsonStringArrayTransformer implements DataTransformerInterface
{
    public function transform(mixed $value): string
    {
        if (null === $value || [] === $value) {
            return '';
        }

        if (!is_array($value) || array_filter($value, static fn (mixed $item): bool => !is_string($item))) {
            throw new TransformationFailedException('Expected an array of strings.');
        }

        try {
            return json_encode(array_values($value), JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES);
        } catch (JsonException $exception) {
            throw new TransformationFailedException('Expected an array of valid UTF-8 strings.', 0, $exception);
        }
    }

    public function reverseTransform(mixed $value): array
    {
        if (null === $value || '' === $value) {
            return [];
        }

        if (!is_string($value)) {
            throw new TransformationFailedException('Expected a JSON string.');
        }

        try {
            $decoded = json_decode($value, false, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            throw new TransformationFailedException('Expected a JSON array of strings.', 0, $exception);
        }

        if (!is_array($decoded) || array_filter($decoded, static fn (mixed $item): bool => !is_string($item))) {
            throw new TransformationFailedException('Expected a JSON array of strings.');
        }

        return array_values($decoded);
    }
}
