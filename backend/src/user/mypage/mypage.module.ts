import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { UserMypageController } from './mypage.controller';
import { UserMypageService } from './mypage.service';
import { PrismaService } from '../../prisma.service';

@Module({
    imports:[],
    controllers: [UserMypageController],
    providers: [UserMypageService, PrismaService]

})
=======

@Module({})
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
export class MypageModule {}
