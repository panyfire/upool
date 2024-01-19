<?php

namespace App\Helper;

class PriceHelper
{
    public static function convertFloatToString(float $float): string
    {
        return explode('.', (string)$float)[0] . '.' . mb_substr(explode('.', (string)$float)[1], '0', '11');
    }
}