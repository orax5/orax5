import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { SignUpModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { MycartModule } from './mycart/mycart.module';
                                                                                                                                                                                                          


// MypageModule
@Module({
  imports:[SignUpModule, LoginModule, AuthModule, MycartModule],
  controllers: [],
  providers: [],
  exports: []
})
export class UserModule {}
// service : 유저를 검색하고 비밀번호 확인