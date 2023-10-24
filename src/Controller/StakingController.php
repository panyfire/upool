<?php

namespace App\Controller;

use App\Entity\Staking;
use App\Repository\StakingRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StakingController extends AbstractController
{
    #[Route('/api/staking/list/', name: 'api_staking_list')]
    public function list(EntityManagerInterface $manager): Response
    {
        $stakings = $manager->getRepository(Staking::class)->findAll();
        $stakingResult = [];
        foreach ($stakings as $staking) {
            $stakingResult[] = [
                'nameCoin' => $staking->getNameCoin(),
                'iconCoinUrl' => $staking->getIconCoinUrl(),
                'minArpPercent' => $staking->getMinArpPercent(),
                'maxArpPercent' => $staking->getMaxArpPercent(),
                'subHeader' => $staking->getSubHeader()
            ];
        }
        return new JsonResponse($stakingResult);
    }
}