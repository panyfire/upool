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
    public function validate(array $data): bool
    {
        $localData = $data;
        unset($localData['imgHash']);
        $localDataJson = json_encode($localData, true);
        $hash = hash_hmac('sha256', $localDataJson, getenv('PHP_SALT'));

        if ($this->imgHash !== $hash) {
            throw new Exception('No Access', 403);
        }
        
        return true;
    }
}