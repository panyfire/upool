<?php

namespace App\DataFixtures;

use App\Entity\Staking;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $payload = [
            [
                'nameCoin' => 'BTC',
                'iconCoinUrl' => 'frontend/public/images/btc_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake BTC',
                'chainId' => '0x1'
            ],
            [
                'nameCoin' => 'ETH',
                'iconCoinUrl' => 'frontend/public/images/eth_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake ETH',
                'chainId' => '0x1'
            ],
            [
                'nameCoin' => 'ETC',
                'iconCoinUrl' => 'frontend/public/images/etc_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake ETC',
                'chainId' => '0xe708'
            ],
            [
                'nameCoin' => 'BNB',
                'iconCoinUrl' => 'frontend/public/images/bnb_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake BNB',
                'chainId' => '0x1'
            ],
            [
                'nameCoin' => 'DOGE',
                'iconCoinUrl' => 'frontend/public/images/doge_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake DOGE',
                'chainId' => '0xe708'
            ],
            [
                'nameCoin' => 'XRP',
                'iconCoinUrl' => 'frontend/public/images/xrp_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake XRP',
                'chainId' => '0xe708'
            ]
        ];

        foreach ($payload as $coin) {
            $staking = new Staking();
            $staking->setNameCoin($coin['nameCoin']);
            $staking->setIconCoinUrl($coin['iconCoinUrl']);
            $staking->setMinArpPercent($coin['minArpPercent']);
            $staking->setMaxArpPercent($coin['maxArpPercent']);
            $staking->setSubHeader($coin['subHeader']);
            $staking->setChainId($coin['chainId']);
            $manager->persist($staking);
            $manager->flush();
        }
    }
}
