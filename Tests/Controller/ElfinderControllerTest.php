<?php

namespace FM\ElfinderBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ElfinderControllerTest extends WebTestCase
{
    public function testShow()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/elfinder');

        $this->assertTrue($crawler->filter('html:contains("elfinder")')->count() > 0);
    }
}
