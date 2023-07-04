-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_feedId_fkey`;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_feedId_fkey` FOREIGN KEY (`feedId`) REFERENCES `Feed`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
