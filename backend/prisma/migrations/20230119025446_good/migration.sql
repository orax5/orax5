/*
  Warnings:

  - You are about to drop the column `com_profile` on the `composer` table. All the data in the column will be lost.
  - You are about to drop the column `lyric_profile` on the `lyricist` table. All the data in the column will be lost.
  - You are about to drop the column `shin_period` on the `shinchunghada` table. All the data in the column will be lost.
  - You are about to drop the column `sing_profile` on the `singer` table. All the data in the column will be lost.
  - The `user_streaming` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `musiccart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shin_descrip` to the `Shinchunghada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shin_opendate` to the `Shinchunghada` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `musiccart` DROP FOREIGN KEY `MusicCart_music_id_fkey`;

-- DropForeignKey
ALTER TABLE `musiccart` DROP FOREIGN KEY `MusicCart_user_mc_id_fkey`;

-- AlterTable
ALTER TABLE `composer` DROP COLUMN `com_profile`;

-- AlterTable
ALTER TABLE `lyricist` DROP COLUMN `lyric_profile`;

-- AlterTable
ALTER TABLE `shinchunghada` DROP COLUMN `shin_period`,
    ADD COLUMN `shin_descrip` VARCHAR(191) NOT NULL,
    ADD COLUMN `shin_opendate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `singer` DROP COLUMN `sing_profile`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_streaming`,
    ADD COLUMN `user_streaming` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `musiccart`;
