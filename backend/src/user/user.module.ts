import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login/user-login.controller';
import { UserLoginService } from './user-login/user-login.service';
import { UserSignupController } from './user-signup/user-signup.controller';
import { UserSignupService } from './user-signup/user-signup.service';
import { UserMycartController } from './user-mycart/user-mycart.controller';
import { UserMycartService } from './user-mycart/user-mycart.service';
import { UserMypageController } from './user-mypage/user-mypage.controller';
import { UserMypageService } from './user-mypage/user-mypage.service';
import { EmailModule } from '../email/email.module';
import { PrismaService } from '../prisma.service';


@Module({
  imports:[EmailModule],
  controllers: [UserLoginController, UserSignupController, UserMycartController, UserMypageController],
  providers: [UserLoginService, UserSignupService, UserMycartService, UserMypageService, PrismaService],
  exports: [UserLoginService, UserSignupService]
})
export class UserModule {}
// service : 유저를 검색하고 비밀번호 확인