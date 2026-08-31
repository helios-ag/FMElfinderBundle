<?php

declare(strict_types=1);

namespace FM\ElfinderBundle\Tests\Functional;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\ErrorHandler\ErrorHandler;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

final class CKEditorUploadIntegrationTest extends KernelTestCase
{
    protected function setUp(): void
    {
        $this->removeDirectory(CKEditorUploadTestKernel::testRoot());
        mkdir(CKEditorUploadTestKernel::uploadRoot() . '/articles', 0777, true);
    }

    protected function tearDown(): void
    {
        self::ensureKernelShutdown();
        $this->removeDirectory(CKEditorUploadTestKernel::testRoot());

        parent::tearDown();

        $exceptionHandler = set_exception_handler(static function (): void {
        });
        restore_exception_handler();

        if (true === is_array($exceptionHandler) && true === ($exceptionHandler[0] instanceof ErrorHandler)) {
            restore_exception_handler();
        }

        $errorHandler = set_error_handler(static function (): bool {
            return false;
        });
        restore_error_handler();

        if (true === is_array($errorHandler) && true === ($errorHandler[0] instanceof ErrorHandler)) {
            restore_error_handler();
        }
    }

    public function testUploadsPastedImageIntoConfiguredStartPath(): void
    {
        $source = CKEditorUploadTestKernel::testRoot() . '/pixel.png';
        $bytes  = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', true);
        file_put_contents($source, $bytes);
        $file   = new UploadedFile($source, 'pixel.png', 'image/png', UPLOAD_ERR_OK, true);
        $kernel = self::bootKernel(['environment' => 'ckeditor_upload', 'debug' => false]);

        $response = $kernel->handle(Request::create(
            '/efupload/ckeditor_upload',
            'POST',
            [],
            [],
            ['upload' => $file]
        ));

        self::assertSame(200, $response->getStatusCode());
        self::assertSame([
            'uploaded' => 1,
            'fileName' => 'pixel.png',
            'url'      => '/media/articles/pixel.png',
        ], json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR));
        self::assertSame($bytes, file_get_contents(CKEditorUploadTestKernel::uploadRoot() . '/articles/pixel.png'));
    }

    public function testRejectsDisallowedMimeThroughElFinderRules(): void
    {
        $source = CKEditorUploadTestKernel::testRoot() . '/notes.txt';
        file_put_contents($source, 'not an image');
        $file   = new UploadedFile($source, 'notes.txt', 'text/plain', UPLOAD_ERR_OK, true);
        $kernel = self::bootKernel(['environment' => 'ckeditor_upload', 'debug' => false]);

        $response = $kernel->handle(Request::create(
            '/efupload/ckeditor_upload',
            'POST',
            [],
            [],
            ['upload' => $file]
        ));
        $payload = json_decode((string) $response->getContent(), true, 512, JSON_THROW_ON_ERROR);

        self::assertSame(200, $response->getStatusCode());
        self::assertSame(0, $payload['uploaded']);
        self::assertNotEmpty($payload['error']['message']);
        self::assertFileDoesNotExist(CKEditorUploadTestKernel::uploadRoot() . '/articles/notes.txt');
    }

    protected static function getKernelClass(): string
    {
        return CKEditorUploadTestKernel::class;
    }

    private function removeDirectory(string $directory): void
    {
        if (false === is_dir($directory)) {
            return;
        }

        foreach (array_diff(scandir($directory), ['.', '..']) as $item) {
            $path = $directory . '/' . $item;

            if (true === is_dir($path)) {
                $this->removeDirectory($path);
            } else {
                unlink($path);
            }
        }

        rmdir($directory);
    }
}
