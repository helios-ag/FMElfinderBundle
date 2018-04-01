<?php

namespace FM\ElfinderBundle\Session;

use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Class ElFinderSession.
 */
class ElFinderSession implements \elFinderSessionInterface
{
    /** @var SessionInterface */
    protected $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    public function start()
    {
        $this->session->start();
    }

    public function close()
    {
        $this->session->save();
    }

    public function get($key, $empty = '')
    {
        return $this->session->get($key, $empty);
    }

    public function set($key, $data)
    {
        $this->session->set($key, $data);
    }

    public function remove($key)
    {
        $this->session->remove($key);
    }
}
