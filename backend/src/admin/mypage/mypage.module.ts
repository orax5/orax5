import { Module } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { MypageController } from './mypage.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [MypageController],
  providers: [MypageService, PrismaService],
})
export class MypageModule {}
