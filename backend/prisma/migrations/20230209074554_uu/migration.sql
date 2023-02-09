-- CreateTable
CREATE TABLE `User` (
    `user_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` CHAR(20) NOT NULL,
    `user_pwd` VARCHAR(191) NOT NULL,
    `user_nickname` CHAR(12) NOT NULL,
    `user_grade` INTEGER NOT NULL DEFAULT 1,
    `user_wallet` CHAR(64) NOT NULL,
    `user_email_token` VARCHAR(191) NOT NULL DEFAULT '',

    UNIQUE INDEX `User_user_email_key`(`user_email`),
    UNIQUE INDEX `User_user_wallet_key`(`user_wallet`),
    PRIMARY KEY (`user_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shinchunghada` (
    `shin_no` INTEGER NOT NULL AUTO_INCREMENT,
    `shin_title` CHAR(20) NOT NULL,
    `shin_amount` INTEGER NOT NULL,
    `shin_nft_totalbalance` INTEGER NOT NULL,
    `shin_cover` VARCHAR(191) NOT NULL,
    `shin_opendate` VARCHAR(191) NOT NULL,
    `shin_description` VARCHAR(191) NOT NULL,
    `shin_category` VARCHAR(191) NOT NULL,
    `shin_ispermit` INTEGER NOT NULL DEFAULT 1,
    `shin_creator_address` CHAR(64) NOT NULL,

    UNIQUE INDEX `Shinchunghada_shin_title_key`(`shin_title`),
    PRIMARY KEY (`shin_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funding` (
    `fund_no` INTEGER NOT NULL AUTO_INCREMENT,
    `fund_state` INTEGER NOT NULL DEFAULT 1,
    `fund_pinurl` VARCHAR(191) NOT NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Funding_shin_no_key`(`shin_no`),
    PRIMARY KEY (`fund_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Singer` (
    `sing_no` INTEGER NOT NULL AUTO_INCREMENT,
    `sing_name` VARCHAR(191) NOT NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Singer_shin_no_key`(`shin_no`),
    PRIMARY KEY (`sing_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Composer` (
    `com_no` INTEGER NOT NULL AUTO_INCREMENT,
    `com_name` VARCHAR(191) NOT NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Composer_shin_no_key`(`shin_no`),
    PRIMARY KEY (`com_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lyricist` (
    `lyric_no` INTEGER NOT NULL AUTO_INCREMENT,
    `lyric_name` VARCHAR(191) NOT NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Lyricist_shin_no_key`(`shin_no`),
    PRIMARY KEY (`lyric_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Music` (
    `music_no` INTEGER NOT NULL AUTO_INCREMENT,
    `music_title` VARCHAR(50) NOT NULL,
    `music_lyricist` CHAR(20) NOT NULL,
    `music_composer` CHAR(20) NOT NULL,
    `music_singer` CHAR(20) NOT NULL,
    `music_category` CHAR(20) NOT NULL,
    `music_description` VARCHAR(191) NOT NULL,
    `music_isfunding` BOOLEAN NULL,

    PRIMARY KEY (`music_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MusicFile` (
    `mf_no` INTEGER NOT NULL AUTO_INCREMENT,
    `mf_path` VARCHAR(191) NOT NULL,
    `music_no` INTEGER NOT NULL,

    PRIMARY KEY (`mf_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `product_no` INTEGER NOT NULL AUTO_INCREMENT,
    `product_price` INTEGER NOT NULL,
    `product_descrip` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `cart_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_no` INTEGER NOT NULL,
    `product_no` INTEGER NOT NULL,

    PRIMARY KEY (`cart_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Funding` ADD CONSTRAINT `Funding_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Singer` ADD CONSTRAINT `Singer_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Composer` ADD CONSTRAINT `Composer_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lyricist` ADD CONSTRAINT `Lyricist_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicFile` ADD CONSTRAINT `MusicFile_music_no_fkey` FOREIGN KEY (`music_no`) REFERENCES `Music`(`music_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_user_no_fkey` FOREIGN KEY (`user_no`) REFERENCES `User`(`user_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_product_no_fkey` FOREIGN KEY (`product_no`) REFERENCES `Product`(`product_no`) ON DELETE RESTRICT ON UPDATE CASCADE;
