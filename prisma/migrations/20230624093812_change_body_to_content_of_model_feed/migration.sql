/*
  Warnings:

  - You are about to drop the column `body` on the `Feed` table. All the data in the column will be lost.
  - Added the required column `content` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feed` DROP COLUMN `body`,
    ADD COLUMN `content` LONGTEXT NOT NULL;
