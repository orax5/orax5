/*
  Warnings:

  - You are about to alter the column `music_lyricist` on the `music` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(20)`.
  - You are about to alter the column `music_composer` on the `music` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(20)`.
  - You are about to alter the column `music_singer` on the `music` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(20)`.
  - You are about to alter the column `shin_creator_address` on the `shinchunghada` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(64)`.
  - You are about to alter the column `user_email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `Char(20)`.
  - You are about to alter the column `user_nickname` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `Char(12)`.
  - You are about to alter the column `user_wallet` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(64)`.
  - A unique constraint covering the columns `[shin_creator_address]` on the table `Shinchunghada` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `music` MODIFY `music_lyricist` CHAR(20) NOT NULL,
    MODIFY `music_composer` CHAR(20) NOT NULL,
    MODIFY `music_singer` CHAR(20) NOT NULL,
    MODIFY `music_category` CHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `shinchunghada` MODIFY `shin_creator_address` CHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `user_email` CHAR(20) NOT NULL,
    MODIFY `user_pwd` VARCHAR(191) NOT NULL,
    MODIFY `user_nickname` CHAR(12) NOT NULL,
    MODIFY `user_wallet` CHAR(64) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Shinchunghada_shin_creator_address_key` ON `Shinchunghada`(`shin_creator_address`);
