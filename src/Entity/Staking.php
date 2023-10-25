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

    #[ORM\Column(length: 23)]
    private ?float $apr = null;

    #[ORM\Column(length: 23)]
    private ?string $duration = null;

    #[ORM\Column(length: 23)]
    private ?float $coinToBeLocked = null;

    #[ORM\Column(length: 23)]
    private ?string $startLocking = null;

    #[ORM\Column(length: 23)]
    private ?string $endLocking = null;

    #[ORM\Column(length: 23)]
    private ?float $expectedRoi = null;


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

    public function setApr(string $apr): self
    {
        $this->apr = $apr;
        return $this;
    }

    public function setDuration(string $duration): self
    {
        $this->duration = $duration;
        return $this;
    }

    public function setCoinToBeLocked(string $coinToBeLocked): self
    {
        $this->coinToBeLocked = $coinToBeLocked;
        return $this;
    }

    public function setStartLocking(string $startLocking): self
    {
        $this->startLocking = $startLocking;
        return $this;
    }

    public function setEndLocking(string $endLocking): self
    {
        $this->endLocking = $endLocking;
        return $this;
    }

    public function setExpectedRoi(string $expectedRoi): self
    {
        $this->expectedRoi = $expectedRoi;
        return $this;
    }
}
