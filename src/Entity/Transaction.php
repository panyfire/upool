<?php

namespace App\Entity;

use App\Repository\StakingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TransactionRepository::class)]
class Transaction extends AbstarctEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 45)]
    private string $wallet;

    #[ORM\Column(length: 15)]
    private int $stakeId;

    #[ORM\Column(length: 100)]
    private float $amount;

    #[ORM\Column(length: 3)]
    private int $duration;

    #[ORM\Column(length: 256)]
    private string $startLocking;

    #[ORM\Column(length: 256)]
    private string $endLocking;
}