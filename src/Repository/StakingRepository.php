<?php

namespace App\Repository;

use App\Entity\Staking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Staking>
 *
 * @method Staking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Staking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Staking[]    findAll()
 * @method Staking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StakingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Staking::class);
    }

    public function findById($id): ?array
    {
        $stakes = $this->createQueryBuilder('p')
            ->where('p.id = :inner_id')
            ->setParameter('inner_id', $id)
            ->getQuery()->getResult(AbstractQuery::HYDRATE_ARRAY);

        return $stakes ?? null;
    }
}
