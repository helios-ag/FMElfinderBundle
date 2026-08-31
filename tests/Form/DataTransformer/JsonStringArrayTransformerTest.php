<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Tests\Form\DataTransformer;

use FM\ElfinderBundle\Form\DataTransformer\JsonStringArrayTransformer;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Exception\TransformationFailedException;

final class JsonStringArrayTransformerTest extends TestCase
{
    #[DataProvider('validModelValues')]
    public function testTransformsModelArrayToJson(?array $model, string $view): void
    {
        self::assertSame($view, (new JsonStringArrayTransformer())->transform($model));
    }

    public static function validModelValues(): array
    {
        return [
            'null'   => [null, ''],
            'empty'  => [[], ''],
            'values' => [['/one.jpg', '/two.jpg'], '["/one.jpg","/two.jpg"]'],
        ];
    }

    public function testReverseTransformsEmptySubmittedValueToEmptyArray(): void
    {
        self::assertSame([], (new JsonStringArrayTransformer())->reverseTransform(''));
    }

    public function testReverseTransformsJsonArrayToModelArray(): void
    {
        self::assertSame(
            ['/one.jpg', '/two.jpg'],
            (new JsonStringArrayTransformer())->reverseTransform('["/one.jpg","/two.jpg"]')
        );
    }

    #[DataProvider('invalidViewValues')]
    public function testRejectsInvalidSubmittedJson(string $value): void
    {
        $this->expectException(TransformationFailedException::class);

        (new JsonStringArrayTransformer())->reverseTransform($value);
    }

    public static function invalidViewValues(): array
    {
        return [
            'malformed'    => ['['],
            'not array'    => ['"/one.jpg"'],
            'object'       => ['{"first":"/one.jpg"}'],
            'empty object' => ['{}'],
            'non-string'   => ['["/one.jpg",42]'],
        ];
    }

    public function testRejectsNonArrayModelValue(): void
    {
        $this->expectException(TransformationFailedException::class);

        (new JsonStringArrayTransformer())->transform('/one.jpg');
    }
}
