<?php

namespace App\Controller;

use App\Entity\Staking;
use App\Entity\Transaction;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
        $transaction->setStartLocking((new \DateTime())->format('Y-m-d H:i:s'));
        $transaction->setEndLocking((new \DateTime())
            ->modify('+' . $params['duration'] . ' days')->format('Y-m-d H:i:s'));
        foreach ($params as $nameParam => $valueParam) {
            $methodName = 'set' . ucfirst($nameParam);
            $transaction->$methodName($valueParam);
            $expectedProfit = (float)$params['amount'] * ((float)$params['apr'] / 100);
            $transaction->setTotalExpectedProfit((float)$params['amount'] + $expectedProfit);
            $transaction->setExpectedProfit($expectedProfit);
        }

        $manager->persist($transaction);
        $manager->flush();

        return new JsonResponse(['status' => true]);
    }

    public function get(EntityManagerInterface $manager, Request $request, string $wallet = ''): Response
    {
        $transactions = $manager->getRepository(Transaction::class)->findBy(['wallet' => $wallet]);

        $result = [];
        $totalProfitProfile = 0;
        $totalLockedProfile = 0;
        foreach ($transactions as $transaction) {

            try {
                $staking=current($manager->getRepository(Staking::class)->findBy(['id'=>$transaction->getStakeId()]));
                $result['transactions'][]=[
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


                if ($totalProfitProfile) {
                    $result['totalProfitProfile']=$totalProfitProfile;
                }

                if ($totalLockedProfile) {
                    $result['totalLockedProfile']=$totalLockedProfile;
                }
            } catch (\Throwable $exception) {
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