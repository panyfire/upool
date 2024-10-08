<?php

namespace App\Controller;

use App\Entity\StakesChooser;
use App\Entity\Staking;
use Doctrine\ORM\AbstractQuery;
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

        if (empty($stakes)) {
            throw new Exception('Stakes does not exists.', 404);
        }

        $choosers = $manager->getRepository(StakesChooser::class)->findAll();
        $aprData = [];
        foreach ($choosers as $chooser) {
            $aprData[$chooser->getDurationCode()][] =
                [
                    'apr' => $chooser->getValue(),
                    'duration' => $chooser->getSecondValue()
                ];
        }

        $stakingResult = [];
        foreach ($stakes as $index => $staking) {
            $stakingResult[$index] = [
                'id' => $staking->getId(),
                'nameCoin' => $staking->getNameCoin(),
                'iconCoinUrl' => $staking->getIconCoinUrl(),
                'minArpPercent' => $staking->getMinArpPercent(),
                'maxArpPercent' => $staking->getMaxArpPercent(),
                'subHeader' => $staking->getSubHeader(),
                'aprData' => $aprData[$staking->getDurationCode()],
                'apr' => $staking->getApr(),
                'duration' => $staking->getDuration(),
                'coinToBeLocked' => $staking->getCoinToBeLocked(),
                'expectedRoi' => $staking->getExpectedRoi(),
            ];
        }

        return new JsonResponse($stakingResult);
    }

    /**
     * @param EntityManagerInterface $manager
     * @param string $id
     * @return Response
     */
    #[Route('/api/staking/detail/{id}', name: 'api_staking_detail')]
    public function detail(EntityManagerInterface $manager, string $id): Response
    {
        $staking = current($manager->getRepository(Staking::class)->createQueryBuilder('s')
            ->where('s.id = :id')->setParameter('id', $id)
        ->getQuery()->getResult(AbstractQuery::HYDRATE_ARRAY));

        $staking['aprData'] = $manager->getRepository(StakesChooser::class)->createQueryBuilder('s')
            ->where('s.durationCode = :durationCode')->setParameter('durationCode', $staking['durationCode'])
            ->getQuery()->getResult(AbstractQuery::HYDRATE_ARRAY);

        $staking['startLocking'] = (new \DateTime('now'))->format('M dS, Y H:m');
        $staking['endLocking'] = (new \DateTime('now'))->modify('+30 days')->format('M dS, Y H:m');

        return new JsonResponse($staking);
    }

}