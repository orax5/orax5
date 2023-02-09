/*
  Warnings:

  - A unique constraint covering the columns `[shin_title]` on the table `Shinchunghada` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Shinchunghada_shin_title_key` ON `Shinchunghada`(`shin_title`);
