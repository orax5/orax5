import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { LocalAuthGuard } from '../../auth/local-auth.guard';

@Controller('user')
export class UserLoginController {
  constructor(private authService: AuthService) {}

  //UseGuards : 경비역할을 하는 미들웨어
  //LocalAuthGuard에 적용한 설정 사용
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.validateUser(req.loginForm); // passport
  }

  // @UseGuards(LocalAuthGuard)
  // @Get('/mypage')
  // getMyPage(@Request() req){
  //     return req.user;
  // }
}
