<?php

namespace App\DataFixtures;

use App\Entity\StakesChooser;
use App\Entity\Staking;
use App\Entity\Transaction;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Monolog\Logger;

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
                'nameCoin' => 'BNB',
                'iconCoinUrl' => '/images/bnb-bnb-logo.png',
                'minArpPercent' => 14,
                'maxArpPercent' => 45,
                'subHeader' => 'Stake BNB',
                'chainId' => '0x38',
                'apr' => 38,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
                'durationCode' => 'bnb'
            ],
            [
                'nameCoin' => 'CELO',
                'iconCoinUrl' => '/images/celo-celo-logo.png',
                'minArpPercent' => 10,
                'maxArpPercent' => 40,
                'subHeader' => 'CELO',
                'chainId' => '0x38',
                'apr' => 31,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
                'durationCode' => 'celo'
            ],
            [
                'nameCoin' => 'MATIC',
                'iconCoinUrl' => '/images/polygon-matic-logo.png',
                'minArpPercent' => 11,
                'maxArpPercent' => 41,
                'subHeader' => 'Stake USDT',
                'chainId' => '0x38',
                'apr' => 32,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
                'durationCode' => 'matic'
            ],
            [
                'nameCoin' => 'ETH',
                'iconCoinUrl' => '/images/ethereum-eth-logo.png',
                'minArpPercent' => 13,
                'maxArpPercent' => 47,
                'subHeader' => 'Stake ETH',
                'chainId' => '0x1',
                'apr' => 36,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
                'durationCode' => 'eth'
            ],
            [
                'nameCoin' => 'ETH',
                'iconCoinUrl' => '/images/ethereum-eth-logo.png',
                'minArpPercent' => 13,
                'maxArpPercent' => 47,
                'subHeader' => 'Stake ETH',
                'chainId' => '0x5',
                'apr' => 36,
                'duration' => '30',
                'coinToBeLocked' => 0.00,
                'endLocking' => '',
                'startLocking' => '',
                'expectedRoi' => 0.00,
                'durationCode' => 'eth'
            ],
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
            $staking->setDurationCode($coin['durationCode']);
            $manager->persist($staking);
            $manager->flush();
        }
    }

    private function loadStakesChooser(ObjectManager $manager): void
    {
        $payload = [
            [
                'code' => 'percent',
                'value' => '14',
                'secondValue' => '1',
                'durationCode' => 'bnb'
            ],
            [
                'code' => 'percent',
                'value' => '21',
                'secondValue' => '7',
                'durationCode' => 'bnb'
            ],
            [
                'code' => 'percent',
                'value' => '38',
                'secondValue' => '30',
                'durationCode' => 'bnb'
            ],
            [
                'code' => 'percent',
                'value' => '43',
                'secondValue' => '60',
                'durationCode' => 'bnb'
            ],
            [
                'code' => 'duration',
                'value' => '45',
                'secondValue' => '90',
                'durationCode' => 'bnb'
            ],
            [
                'code' => 'duration',
                'value' => '13',
                'secondValue' => '1',
                'durationCode' => 'eth'
            ],
            [
                'code' => 'duration',
                'value' => '21',
                'secondValue' => '7',
                'durationCode' => 'eth'
            ],
            [
                'code' => 'duration',
                'value' => '36',
                'secondValue' => '30',
                'durationCode' => 'eth'
            ],
            [
                'code' => 'duration',
                'value' => '43',
                'secondValue' => '60',
                'durationCode' => 'eth'
            ],
            [
                'code' => 'duration',
                'value' => '47',
                'secondValue' => '90',
                'durationCode' => 'eth'
            ],
            [
                'code' => 'duration',
                'value' => '10',
                'secondValue' => '1',
                'durationCode' => 'celo'
            ],
            [
                'code' => 'duration',
                'value' => '20',
                'secondValue' => '7',
                'durationCode' => 'celo'
            ],
            [
                'code' => 'duration',
                'value' => '31',
                'secondValue' => '30',
                'durationCode' => 'celo'
            ],
            [
                'code' => 'duration',
                'value' => '37',
                'secondValue' => '60',
                'durationCode' => 'celo'
            ],
            [
                'code' => 'duration',
                'value' => '40',
                'secondValue' => '90',
                'durationCode' => 'celo'
            ],
            [
                'code' => 'duration',
                'value' => '11',
                'secondValue' => '1',
                'durationCode' => 'matic'
            ],
            [
                'code' => 'duration',
                'value' => '21',
                'secondValue' => '7',
                'durationCode' => 'matic'
            ],
            [
                'code' => 'duration',
                'value' => '32',
                'secondValue' => '30',
                'durationCode' => 'matic'
            ],
            [
                'code' => 'duration',
                'value' => '38',
                'secondValue' => '60',
                'durationCode' => 'matic'
            ],
            [
                'code' => 'duration',
                'value' => '41',
                'secondValue' => '90',
                'durationCode' => 'matic'
            ],
        ];

        foreach ($payload as $chooser) {
            $stakesChooser = new StakesChooser();
            $stakesChooser->setCode($chooser['code']);
            $stakesChooser->setValue($chooser['value']);
            $stakesChooser->setSecondValue($chooser['secondValue']);
            $stakesChooser->setDurationCode($chooser['durationCode']);
            $manager->persist($stakesChooser);
            $manager->flush();
        }
    }

    private function loadTransactions(ObjectManager $manager)
    {
        $payload = [
            [
                'wallet' => '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
                'stakeId' => '92',
                'chainId' => '0x38',
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
                'stakeId' => '93',
                'isRedeemed' => true,
                'chainId' => '0x1',
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
                'stakeId' => '93',
                'isRedeemed' => true,
                'chainId' => '0xa4b1',
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
                'stakeId' => '96',
                'isRedeemed' => true,
                'chainId' => '0x38',
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
            $staking->setChainId($transaction['chainId']);
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
