/*
  Warnings:

  - Made the column `user_email_token` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `User_user_email_token_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `user_email_token` VARCHAR(191) NOT NULL DEFAULT '';
