<?php

namespace FM\ElfinderBundle\Model;

/**
 * Interface ElFinderUserInterface
 * @package FM\ElfinderBundle\Model
 */
interface ElFinderPermissionsInterface
{
    /**
     * @return string
     */
    public function getRootDirectoryName();

//    /**
//     * @return array
//     * array('read','write','locked','hidden')
//     */
//    public function getPermissions();
//
//    /**
//     * @param array $permissions
//     * @return mixed
//     */
//    public function setPermissions($permissions = array());

}
