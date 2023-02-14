import { Module } from '@nestjs/common';
import { MypageController } from './mypage.controller';
import { MypageService } from './mypage.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [MypageController],
  providers: [MypageService, PrismaService],
})
export class MypageModule {}
