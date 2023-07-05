-- AlterTable
ALTER TABLE `Comment` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Feed` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `createdAt` DROP DEFAULT;
