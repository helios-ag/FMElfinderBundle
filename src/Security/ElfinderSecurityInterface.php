<?php

namespace FM\ElfinderBundle\Security;

interface ElfinderSecurityInterface
{
    /**
     * Array structure should have roles as keys and values as array of disabled commands
     * array('ROLE_USER' => array('rm','delete'));
     * First items (roles) in array has higher priority.
     */
    public function getConfiguration(): array;
}
