<?php

namespace App\DataFixtures;

use App\Entity\StakesChooser;
use App\Entity\Staking;
use App\Entity\Transaction;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $this->loadStaking($manager);
        $this->loadStakesChooser($manager);
        $this->loadTransactions($manager);
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

    private function loadTransactions(ObjectManager $manager)
    {
        $payload = [
            [
                'wallet' => '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
                'stakeId' => '69',
                'amount' => 0.0002,
                'duration' => 30,
                'apr' => 30,
                'expected_profit' => 0.0007032969,
                'total_expected_profit' => 0.0030476199,
                'start_locking' => '2023-11-20 23:24:46',
                'end_locking' => '2023-12-20 23:24:46',
                'transaction_hash' => 'fsdfkasfh23k4hkjhkrjhfdslkfhiauxf'
            ],
            [
                'wallet' => '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
                'stakeId' => '70',
                'amount' => 0.03,
                'duration' => 60,
                'apr' => 50,
                'expected_profit' => 0.015,
                'total_expected_profit' => 0.0045,
                'start_locking' => '2023-10-20 23:24:46',
                'end_locking' => '2024-12-20 23:24:46',
                'transaction_hash' => 'fsdfkasfh23k4hkjhkrjhfdslkfhiauxf'
            ],
            [
                'wallet' => '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
                'stakeId' => '69',
                'amount' => 1.02,
                'duration' => 50,
                'apr' => 30,
                'expected_profit' => 0.51,
                'total_expected_profit' => 1.53,
                'start_locking' => '2023-09-20 23:24:46',
                'end_locking' => '2023-10-20 23:24:46',
                'transaction_hash' => 'fsdfkasfh23k4hkjhkrjhfdslkfhiauxf'
            ],
            [
                'wallet' => '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
                'stakeId' => '69',
                'amount' => 0.0002,
                'duration' => 30,
                'apr' => 30,
                'expected_profit' => 0.0007032969,
                'total_expected_profit' => 0.0030476199,
                'start_locking' => '2023-11-20 23:24:46',
                'end_locking' => '2023-12-20 23:24:46',
                'transaction_hash' => 'fsdfkasfh23k4hkjhkrjhfdslkfhiauxf'
            ],
        ];

        foreach ($payload as $transaction) {
            $staking = new Transaction();
            $staking->setWallet($transaction['wallet']);
            $staking->setStakeId($transaction['stakeId']);
            $staking->setAmount(($transaction['amount']));
            $staking->setDuration($transaction['duration']);
            $staking->setApr($transaction['apr']);
            $staking->setExpectedProfit($transaction['expected_profit']);
            $staking->setTotalExpectedProfit($transaction['total_expected_profit']);
            $staking->setStartLocking($transaction['start_locking']);
            $staking->setEndLocking($transaction['end_locking']);
            $staking->setTransactionHash($transaction['transaction_hash']);
            $manager->persist($staking);
            $manager->flush();
        }
    }
}
