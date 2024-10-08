<?php

namespace App\Helper;

use Exception;
use Monolog\Logger;
use function Symfony\Component\DependencyInjection\Loader\Configurator\env;

class ImgHash
{


    public function __construct(private readonly string $imgHash)
    {
    }


    /**
     * @throws Exception
     */
    public function validate(array $data, string $phpSalt): bool
    {
        $localData = $data;

        if (isset($localData['imgHash'])) {
            unset($localData['imgHash']);
        }

        $localDataJson = json_encode($localData, true);
        $hash = hash_hmac('sha256', $localDataJson, $phpSalt);
        dump($hash);
        dump($localDataJson);
        dump($this->imgHash);
        die;
        if ($this->imgHash !== $hash) {
            throw new Exception('No Access', 403);
        }

        return true;
    }
}
