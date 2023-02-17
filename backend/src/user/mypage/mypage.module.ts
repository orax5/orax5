import { Module } from '@nestjs/common';
import { UserMypageController } from './mypage.controller';
import { UserMypageService } from './mypage.service';
import { PrismaService } from '../../prisma.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
    imports:[AuthModule],
    controllers: [UserMypageController],
    providers: [UserMypageService, PrismaService]

})
export class MypageModule {}
