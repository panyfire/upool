<?php

namespace App\Repository;

use App\Entity\StakesChooser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<StakesChooser>
 *
 * @method Staking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Staking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Staking[]    findAll()
 * @method Staking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StakesChooserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StakesChooser::class);
    }
}