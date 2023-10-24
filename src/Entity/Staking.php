<?php

namespace App\Entity;

use App\Repository\StakingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StakingRepository::class)]
class Staking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    private ?string $nameCoin = null;

    #[ORM\Column(length: 256)]
    private ?string $iconCoinUrl = null;

    #[ORM\Column(length: 3)]
    private ?int $minArpPercent = null;

    #[ORM\Column(length: 3)]
    private ?int $maxArpPercent = null;

    #[ORM\Column(length: 256)]
    private ?string $subHeader = null;

    #[ORM\Column(length: 23)]
    private ?string $chainId = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameCoin(): ?string
    {
        return $this->nameCoin;
    }

    public function setNameCoin(string $nameCoin): static
    {
        $this->nameCoin = $nameCoin;
        return $this;
    }

    public function getIconCoinUrl(): ?string
    {
        return $this->iconCoinUrl;
    }

    public function setIconCoinUrl(string $iconCoinUrl): static
    {
        $this->iconCoinUrl = $iconCoinUrl;
        return $this;
    }

    public function getMinArpPercent(): ?string
    {
        return $this->minArpPercent;
    }

    public function setMinArpPercent(int $minArpPercent): static
    {
        $this->minArpPercent = $minArpPercent;
        return $this;
    }

    public function getMaxArpPercent(): ?string
    {
        return $this->maxArpPercent;
    }

    public function setMaxArpPercent(int $maxArpPercent): static
    {
        $this->maxArpPercent = $maxArpPercent;
        return $this;
    }

    public function getSubHeader(): ?string
    {
        return $this->subHeader;
    }

    public function setSubHeader(string $subHeader): static
    {
        $this->subHeader = $subHeader;
        return $this;
    }

    public function setChainId(string $nameCoin)
    {
        $this->chainId = $nameCoin;
        return $this;
    }

    public function getChainId(): ?string
    {
        return $this->chainId;
    }
}
