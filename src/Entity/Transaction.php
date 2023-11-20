<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
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

    #[ORM\Column(length: 15)]
    private int $apr;

    #[ORM\Column(length: 100)]
    private float $amount;

    #[ORM\Column(length: 100)]
    private float $expectedProfit;

    #[ORM\Column(length: 100)]
    private float $totalExpectedProfit;

    #[ORM\Column(length: 3)]
    private int $duration;

    #[ORM\Column(length: 256)]
    private string $transactionHash;

    #[ORM\Column(length: 256)]
    private string $startLocking;

    #[ORM\Column(length: 256)]
    private string $endLocking;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWallet(): ?string
    {
        return $this->wallet;
    }

    public function setWallet(string $wallet): static
    {
        $this->wallet = $wallet;

        return $this;
    }

    public function getStakeId(): ?int
    {
        return $this->stakeId;
    }

    public function setStakeId(int $stakeId): static
    {
        $this->stakeId = $stakeId;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): static
    {
        $this->duration = $duration;

        return $this;
    }

    public function getStartLocking(): ?string
    {
        return $this->startLocking;
    }

    public function setStartLocking(string $startLocking): static
    {
        $this->startLocking = $startLocking;

        return $this;
    }

    public function getEndLocking(): ?string
    {
        return $this->endLocking;
    }

    public function setEndLocking(string $endLocking): static
    {
        $this->endLocking = $endLocking;

        return $this;
    }

    public function getTransactionHash(): ?string
    {
        return $this->transactionHash;
    }

    public function setTransactionHash(string $transactionHash): static
    {
        $this->transactionHash = $transactionHash;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getApr(): ?int
    {
        return $this->apr;
    }

    public function setApr(int $apr): static
    {
        $this->apr = $apr;

        return $this;
    }

    public function getExpectedProfit(): ?float
    {
        return $this->expectedProfit;
    }

    public function setExpectedProfit(float $expectedProfit): static
    {
        $this->expectedProfit = $expectedProfit;

        return $this;
    }

    public function getTotalExpectedProfit(): ?float
    {
        return $this->totalExpectedProfit;
    }

    public function setTotalExpectedProfit(float $totalExpectedProfit): static
    {
        $this->totalExpectedProfit = $totalExpectedProfit;

        return $this;
    }
}