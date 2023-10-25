<?php

namespace App\Entity;

use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @property SerializerInterface&Serializer $serializer
 */
class AbstarctEntity
{

    /**
     * @throws ExceptionInterface
     */
    public function getArray(): ?array
    {
//        $normalizer = new ObjectNormalizer();
        dump('tut');
//        dump($serializer->normalize($this, 'json'));
//        dump($this->serializer->normalize($this));
die;
        return [] ?? null;
    }
}