<?php

namespace App\Controller;

use App\Entity\Staking;
use App\Entity\Transaction;
use App\Helper\PriceHelper;
use App\Service\CurrencyApi;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class TransactionController  extends AbstractController
{

    /**
     * @throws Exception
     */
    public function add(EntityManagerInterface $manager, Request $request): Response
    {
        $mapping = [
            'wallet',
            'stakeId',
            'chainId',
            'amount',
            'duration',
            'transactionHash',
            'status',
            'apr'
        ];
        $params = $request->request->all();

        foreach ($params as $nameParam => $paramValue) {
            if (!in_array($nameParam, $mapping) && !empty($paramValue)) {
                throw new Exception($nameParam . ' параметр пуст - заполните все поля запроса.');
            }
        }

        $transaction = new Transaction();
        $transaction->setStartLocking((new \DateTime())->format('d/m/Y'));
        $transaction->setEndLocking((new \DateTime())
            ->modify('+' . $params['duration'] . ' days')->format('d/m/Y'));

        foreach ($params as $nameParam => $valueParam) {
            $methodName = 'set' . ucfirst($nameParam);
            $transaction->$methodName($valueParam);
        }

        $expectedProfit = (float)$params['amount'] * ((float)$params['apr'] / 100);
        $transaction->setTotalExpectedProfit((float)$params['amount'] + $expectedProfit);
        $transaction->setExpectedProfit($expectedProfit);

        $manager->persist($transaction);
        $manager->flush();

        return new JsonResponse(['status' => true]);
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function get(EntityManagerInterface $manager, Request $request, HttpClientInterface $client, string $wallet = '', string $chainId = ''): Response
    {
        $transactions = $manager->getRepository(Transaction::class)->findBy(['wallet' => $wallet, 'chainId' => $chainId]);

        $result = [];
        $totalProfitProfile = 0;
        $totalLockedProfile = 0;
        $totalProfitProfileInUsd = 0;
        $totalLockedProfileInUseInUsd = 0;
        foreach ($transactions as $transaction) {
            try {
                $staking=current($manager->getRepository(Staking::class)->findBy(['id'=>$transaction->getStakeId()]));
                $coinPriceInUsd = (new CurrencyApi($client))->getDollarInCoin($staking->getNameCoin());

                $result['transactions'][]=[
                    'id'=>$transaction->getId(),
                    'asset'=>[
                        'coinName'=>$staking->getNameCoin() ?? null,
                        'coinIconUrl'=>$staking->getIconCoinUrl()
                    ],
                    'chainId' => $transaction->getChainId(),
                    'totalAmount'=>$transaction->getAmount(),
                    'realTimeApr'=>$transaction->getApr(),
                    'duration'=>$transaction->getDuration(),
                    'startLocking'=>$transaction->getStartLocking(),
                    'endLocking'=>$transaction->getEndLocking(),
                    'expectedProfit'=>$transaction->getExpectedProfit(),
                    'totalExpectedProfit'=>$transaction->getTotalExpectedProfit(),
                    'isRedeemed' => $transaction->getIsRedeemed()
                ];

                $totalProfitProfileInUsd += $transaction->getExpectedProfit() * $coinPriceInUsd;
                $totalLockedProfileInUseInUsd += $transaction->getAmount() * $coinPriceInUsd;

                $totalProfitProfile += $transaction->getExpectedProfit();
                $totalLockedProfile += $transaction->getAmount();

                if ($totalProfitProfile) {
                    $result['totalProfitProfile'] = PriceHelper::convertFloatToString($totalProfitProfile);
                }

                if ($totalLockedProfile) {
                    $result['totalLockedProfile'] = PriceHelper::convertFloatToString($totalLockedProfile);
                }

                if ($totalProfitProfile) {
                    $result['totalProfitProfileInUsd'] = PriceHelper::convertFloatToString($totalProfitProfileInUsd);
                }

                if ($totalLockedProfile) {
                    $result['totalLockedProfileInUseInUsd'] = PriceHelper::convertFloatToString($totalLockedProfileInUseInUsd);
                }
            } catch (\Throwable $exception) {
                $result['error'] = $exception->getMessage();
                continue;
            }
        }

        return new JsonResponse(['status' => true, 'data' => $result]);
    }

    /**
     * @throws Exception
     */
    public function redeem(EntityManagerInterface $manager, Request $request, LoggerInterface $logger, string $transactionId=''): Response
    {
        $transaction=current($manager->getRepository(Transaction::class)->findBy(['id'=>$transactionId]));
        $wallet = $request->getPayload()->get('wallet');

        if ($transaction->getIsRedeemed()) {
            return new JsonResponse(['status'=>true]);
        }

        if ($transaction && $wallet === $transaction->getWallet()) {
            $staking = current($manager->getRepository(Staking::class)->findBy(['id'=>$transaction->getStakeId()]));
            $totalProfitProfile = 0;
            $totalLockedProfile = 0;
            $transactionData['transactions'][] =[
                'id'=>$transaction->getId(),
                'asset'=>[
                    'coinName'=>$staking->getNameCoin(),
                    'coinIconUrl'=>$staking->getIconCoinUrl()
                ],
                'totalAmount'=>$transaction->getAmount(),
                'realTimeApr'=>$transaction->getApr(),
                'duration'=>$transaction->getDuration(),
                'startLocking'=>$transaction->getStartLocking(),
                'endLocking'=>$transaction->getEndLocking(),
                'expectedProfit'=>$transaction->getExpectedProfit(),
                'totalExpectedProfit'=>$transaction->getTotalExpectedProfit()
            ];

            $totalProfitProfile+=$transaction->getExpectedProfit();
            $totalLockedProfile+=$transaction->getAmount();

            $transaction->setRedeemed(true);
            $manager->persist($transaction);
            $manager->flush();

            $logger->notice(
                'TRANSACTION ID ' .
                $transaction->getId() .
                ' - REDEEM',
                ['transactionData' =>
                    array_merge(
                        $transactionData, [
                            'totalProfitProfile' => $totalProfitProfile,
                            'totalLockedProfile' => $totalLockedProfile
                        ]
                    )
                ]);
        } else {
            return new Response('', 403);
        }


        return new JsonResponse(['status'=>true]);
    }
}