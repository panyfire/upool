<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230905190903 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'staking';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE staking (
            id INT AUTO_INCREMENT NOT NULL, 
            name_coin VARCHAR(15) NOT NULL, 
            icon_coin_url VARCHAR(256) NOT NULL,
            min_arp_percent int(3) not null,
            max_arp_percent int(3) not null,
            subheader VARCHAR(256) NOT NULL, 
            PRIMARY KEY(id)) 
            DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE staking');
    }
}
