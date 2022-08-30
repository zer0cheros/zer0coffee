/*
  Warnings:

  - You are about to drop the column `poster` on the `coffee` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `coffee` DROP FOREIGN KEY `Coffee_poster_fkey`;

-- AlterTable
ALTER TABLE `coffee` DROP COLUMN `poster`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Coffee` ADD CONSTRAINT `Coffee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
