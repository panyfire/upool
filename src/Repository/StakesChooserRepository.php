<?php

namespace App\Repository;

use App\Entity\StakesChooser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<StakesChooser>
 *
 * @method StakesChooser|null find($id, $lockMode = null, $lockVersion = null)
 * @method StakesChooser|null findOneBy(array $criteria, array $orderBy = null)
 * @method StakesChooser[]    findAll()
 * @method StakesChooser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StakesChooserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StakesChooser::class);
    }

//    /**
//     * @return StakesChooser[] Returns an array of StakesChooser objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?StakesChooser
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
