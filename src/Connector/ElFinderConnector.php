<?php

namespace FM\ElfinderBundle\Connector;

use elFinder;

class ElFinderConnector extends \elFinderConnector
{
    public function run($queryParameters = null)
    {
        if (null === $queryParameters) {
            $queryParameters = $_GET;
        }

        return $this->execute($queryParameters);
    }

    public function execute($queryParameters)
    {
        $isPost = 'POST' == $_SERVER['REQUEST_METHOD'];
        $src    = 'POST' == $_SERVER['REQUEST_METHOD'] ? array_merge($_POST, $queryParameters) : $queryParameters;

        if ($isPost && !$src && $rawPostData = @file_get_contents('php://input')) {
            // for support IE XDomainRequest()
            $parts = explode('&', $rawPostData);
            foreach ($parts as $part) {
                [$key, $value] = array_pad(explode('=', $part), 2, '');
                $src[$key]     = rawurldecode($value);
            }
            $_POST    = $src;
            $_REQUEST = array_merge_recursive($src, $_REQUEST);
        }
        $cmd  = $src['cmd'] ?? '';
        $args = [];

        if (!function_exists('json_encode')) {
            $error = $this->elFinder->error(elFinder::ERROR_CONF, elFinder::ERROR_CONF_NO_JSON);

            return $this->output(['error' => '{"error":["' . implode('","', $error) . '"]}', 'raw' => true]);
        }

        if (!$this->elFinder->loaded()) {
            return $this->output(['error' => $this->elFinder->error(elFinder::ERROR_CONF, elFinder::ERROR_CONF_NO_VOL), 'debug' => $this->elFinder->mountErrors]);
        }

        // telepat_mode: on
        if (!$cmd && $isPost) {
            return $this->output(['error' => $this->elFinder->error(elFinder::ERROR_UPLOAD, elFinder::ERROR_UPLOAD_TOTAL_SIZE), 'header' => 'Content-Type: text/html']);
        }
        // telepat_mode: off

        if (!$this->elFinder->commandExists($cmd)) {
            return $this->output(['error' => $this->elFinder->error(elFinder::ERROR_UNKNOWN_CMD)]);
        }

        // collect required arguments to exec command
        foreach ($this->elFinder->commandArgsList($cmd) as $name => $req) {
            $arg = 'FILES' == $name
                ? $_FILES
                : ($src[$name] ?? '');

            if (!is_array($arg)) {
                $arg = trim($arg);
            }

            if ($req && (!isset($arg) || '' === $arg)) {
                return $this->output(['error' => $this->elFinder->error(elFinder::ERROR_INV_PARAMS, $cmd)]);
            }
            $args[$name] = $arg;
        }

        $args['debug'] = isset($src['debug']) && $src['debug'];

        return $this->output($this->elFinder->exec($cmd, $this->input_filter($args)));
    }

    protected function output(array $data)
    {
        if (isset($data['pointer'])) {
            parent::output($data);
        }

        return $data;
    }
}
