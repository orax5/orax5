import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { userLoginDto } from '../user_dto/user-login.dto';
import { UserLoginService } from './login.service';

@Controller('/user')
export class UserLoginController {
  constructor(
    private authService: AuthService,
    private userLoginService: UserLoginService,
  ) {}

  //UseGuards : 경비역할을 하는 미들웨어
  //LocalAuthGuard에 적용한 설정 사용
  // @UseGuards(LocalAuthGuard)
  @Post('/authlogin')
  async authLogin(@Body() loginForm: userLoginDto) {
    console.log('로그인 시도 ');
    return this.authService.validateUser(loginForm); // passport
  }

  @Post('/login')
  async login(@Body() userLoginForm: userLoginDto) {
    console.log('유저 로그인 시도 ');
    const response = await this.userLoginService.userLogin(userLoginForm);
    console.log(response);
    return response;
  }
}

/*
    "user_email": "j8747j@naver.com",
    "user_pwd": "qwer!!09",
    "user_wallet": "0x12qwe123qwe",
    "user_nickname": "cookie"
*/
