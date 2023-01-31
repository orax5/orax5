import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { SignUpModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { MypageModule } from './mypage/mypage.module';
                                                                                                                                                                                                          

// @Module({
//   imports:[AuthModule],
//   controllers: [UserLoginController, UserSignupController, UserMycartController, UserMypageController, UserLogoutController],
//   providers: [AuthService ,UserLoginService, UserSignupService, UserMycartService, UserMypageService, PrismaService, UserLogoutService],
//   exports: [UserLoginService, UserSignupService]
// })
@Module({
  imports:[SignUpModule, LoginModule, AuthModule, MypageModule],
  controllers: [],
  providers: [],
  exports: []
})
export class UserModule {}
// service : 유저를 검색하고 비밀번호 확인