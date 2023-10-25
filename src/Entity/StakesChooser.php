<?php

namespace App\Entity;
use App\Repository\StakingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StakesChooserRepository::class)]
class StakesChooser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id=null;

    #[ORM\Column(length: 15)]
    private string $code;


}