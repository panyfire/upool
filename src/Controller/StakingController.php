<?php

namespace App\Controller;

use App\Entity\Staking;
use App\Repository\StakingRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StakingController extends AbstractController
{
    /**
     * @throws Exception
     */
    #[Route('/api/staking/{chainId}', name: 'api_staking_chain', defaults: ['chainId' => ''])]
    public function list(EntityManagerInterface $manager, string $chainId = ''): Response
    {

        if (empty($chainId)) {
            $stakes = $manager->getRepository(Staking::class)->findAll();
        } else {
            $stakes = $manager->getRepository(Staking::class)->findBy(['chainId' => $chainId]);
        }

        $stakingResult = [];

        if (!empty($stakes)) {
            foreach ($stakes as $staking) {
                $stakingResult[] = [
                    'nameCoin' => $staking->getNameCoin(),
                    'iconCoinUrl' => $staking->getIconCoinUrl(),
                    'minArpPercent' => $staking->getMinArpPercent(),
                    'maxArpPercent' => $staking->getMaxArpPercent(),
                    'subHeader' => $staking->getSubHeader()
                ];
            }
        }


        return new JsonResponse($stakingResult);
    }
}