<?php

namespace App\Controller;

use App\Entity\Transaction;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
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
        ];
        $params = $request->request->all();

        foreach ($params as $nameParam => $paramValue) {
            if (!in_array($nameParam, $mapping) && !empty($paramValue)) {
                throw new Exception($nameParam . ' параметр пуст - заполните все поля запроса.');
            }
        }

        $isTransacted = $params['status'] == 1;
        if (!$isTransacted) {
            throw new Exception('Транзакция не успешна');
        }

        $transaction = new Transaction();
        $transaction->setStartLocking((new \DateTime())->format('Y-m-d H:i:s'));
        $transaction->setEndLocking((new \DateTime())
            ->modify('+' . $params['duration'] . ' days')->format('Y-m-d H:i:s'));
        foreach ($params as $nameParam => $valueParam) {
            $methodName = 'set' . ucfirst($nameParam);
            $transaction->$methodName($valueParam);
        }

        $manager->persist($transaction);
        $manager->flush();

        return new JsonResponse(['status' => true]);
    }
}