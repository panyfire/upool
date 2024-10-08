<?php

namespace App\Entity;

use App\Repository\StakesChooserRepository;
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

    #[ORM\Column(length: 15)]
    private string $value;

    #[ORM\Column(length: 15)]
    private int $secondValue;

    #[ORM\Column(length: 26)]
    private string $durationCode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): static
    {
        $this->value = $value;

        return $this;
    }

    public function getSecondValue(): ?string
    {
        return $this->secondValue;
    }

    public function setSecondValue(int $secondValue): static
    {
        $this->secondValue = $secondValue;

        return $this;
    }

    public function getDurationCode(): ?string
    {
        return $this->durationCode;
    }

    public function setDurationCode(string $durationCode): static
    {
        $this->durationCode = $durationCode;

        return $this;
    }
}