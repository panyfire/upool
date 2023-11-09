<?php

namespace App\DataFixtures;

use App\Entity\StakesChooser;
use App\Entity\Staking;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $this->loadStaking($manager);
        $this->loadStakesChooser($manager);
    }

    private function loadStaking(ObjectManager $manager): void
    {
        $payload = [
            [
                'nameCoin' => 'BTC',
                'iconCoinUrl' => 'frontend/public/images/btc_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake BTC',
                'chainId' => '0x5',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
            ],
            [
                'nameCoin' => 'ETH',
                'iconCoinUrl' => 'frontend/public/images/eth_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake ETH',
                'chainId' => '0x5',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
            ],
            [
                'nameCoin' => 'ETC',
                'iconCoinUrl' => 'frontend/public/images/etc_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake ETC',
                'chainId' => '0x5',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
            ],
            [
                'nameCoin' => 'BNB',
                'iconCoinUrl' => 'frontend/public/images/bnb_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake BNB',
                'chainId' => '0x1',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
            ],
            [
                'nameCoin' => 'DOGE',
                'iconCoinUrl' => 'frontend/public/images/doge_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake DOGE',
                'chainId' => '0xe708',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
            ],
            [
                'nameCoin' => 'XRP',
                'iconCoinUrl' => 'frontend/public/images/xrp_icon_coin.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 88,
                'subHeader' => 'Stake XRP',
                'chainId' => '0xe708',
                'apr' => 0.93,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
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
            $staking->setApr($coin['apr']);
            $staking->setDuration($coin['duration']);
            $staking->setCoinToBeLocked($coin['coinToBeLocked']);
            $staking->setEndLocking($coin['endLocking']);
            $staking->setStartLocking($coin['startLocking']);
            $staking->setExpectedRoi($coin['expectedRoi']);
            $manager->persist($staking);
            $manager->flush();
        }
    }

    private function loadStakesChooser(ObjectManager $manager): void
    {
        $payload = [
            [
                'code' => 'percent',
                'value' => '25',
                'secondValue' => '1'
            ],
            [
                'code' => 'percent',
                'value' => '50',
                'secondValue' => '1'
            ],
            [
                'code' => 'percent',
                'value' => '75',
                'secondValue' => '1'
            ],
            [
                'code' => 'percent',
                'value' => 'MAX',
                'secondValue' => '1'
            ],
            [
                'code' => 'duration',
                'value' => '1',
                'secondValue' => '50'
            ],
            [
                'code' => 'duration',
                'value' => '7',
                'secondValue' => '30'
            ],
            [
                'code' => 'duration',
                'value' => '30',
                'secondValue' => '22'
            ],
            [
                'code' => 'duration',
                'value' => '60',
                'secondValue' => '25'
            ],
            [
                'code' => 'duration',
                'value' => '90',
                'secondValue' => '60'
            ],
        ];

        foreach ($payload as $chooser) {
            $stakesChooser = new StakesChooser();
            $stakesChooser->setCode($chooser['code']);
            $stakesChooser->setValue($chooser['value']);
            $stakesChooser->setSecondValue($chooser['secondValue']);
            $manager->persist($stakesChooser);
            $manager->flush();
        }
    }
}
