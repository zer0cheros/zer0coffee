/*
  Warnings:

  - The primary key for the `coffee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `coffee` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `coffee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `poster` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `coffee` DROP FOREIGN KEY `Coffee_userId_fkey`;

-- AlterTable
ALTER TABLE `coffee` DROP PRIMARY KEY,
    DROP COLUMN `userId`,
    ADD COLUMN `poster` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Coffee` ADD CONSTRAINT `Coffee_poster_fkey` FOREIGN KEY (`poster`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
