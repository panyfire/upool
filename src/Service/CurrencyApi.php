<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CurrencyApi
{

    public function __construct(private HttpClientInterface $client)
    {}

    /**
     * @throws TransportExceptionInterface
     */
    public function getDollarInCoin(string $coinCode): ?float
    {
        $this->result[$coinCode] ??= array_filter($this->client->request(
            'GET',
            'https://api.coinlore.net/api/tickers/'
        )->toArray()['data'], function ($item) use ($coinCode) {
            return $item['symbol'] === $coinCode;
        });
        $coinData = current($this->result[$coinCode]);

        return  (float)$coinData['price_usd']?? null;
    }
}