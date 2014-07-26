<?php

namespace FM\ElfinderBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use FM\ElfinderBundle\Entity\ElFinderFile;

/**
 * Class LoadRootElement
 * @package FM\ElfinderBundle\DataFixtures\ORM
 * Sets root element when using MySQL VolumeDriver
 * Requires Doctrine Fixtures bundle
 */
class LoadRootElement implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $rootElement = new ElFinderFile();
        $rootElement->setId(1);
        $rootElement->setParentId(0);
        $rootElement->setName('DATABASE');
        $rootElement->setContent('');
        $rootElement->setSize(0);
        $rootElement->setMtime(0);
        $rootElement->setMime('directory');
        $rootElement->setRead(1);
        $rootElement->setWrite(1);
        $rootElement->setLocked(0);
        $rootElement->setHidden(0);
        $rootElement->setWidth(0);
        $rootElement->setHeight(0);

        $manager->persist($rootElement);
        $manager->flush();
    }
}
