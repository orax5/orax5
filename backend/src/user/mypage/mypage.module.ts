import { Module } from "@nestjs/common";
import { UserMypageController } from "./mypage.controller";
import { UserMypageService } from "./mypage.service";
import { PrismaService } from "../../prisma.service";

@Module({
  imports: [],
  controllers: [UserMypageController],
  providers: [UserMypageService, PrismaService],
})
export class MypageModule {}
