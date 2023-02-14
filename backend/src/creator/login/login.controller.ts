import {
  Controller,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { VerifyEamilDto } from '../../email/verifyEamil.dto';
import { CreatorLoginDto } from '../creator_dto/creator-login.dto';
import { AuthService } from '../../auth/auth.service';
import { CreatorLoginService } from './login.service';
// import { LocalAuthGuard } from '../../auth/local-auth.guard';
// import { AuthGuard } from '@nestjs/passport';

@Controller('/creator')
export class CreatorLoginController {
  constructor(private creatorLoginService: CreatorLoginService) {}

  @Post('/login')
  async login(@Body() loginForm: CreatorLoginDto) {
    console.log('로그인 시도 ');
    const response = await this.creatorLoginService.creatorLogin(loginForm);
    console.log(response);
    return response;
  }
}

// @UseGuards(AuthGuard('local'))
// @Post('/authlogin')
// async creatorLogin(@Body() creatorLoginDto: CreatorLoginDto){
//     console.log(creatorLoginDto);
//     // auth 토큰 발급하는 로그인
//     return this.authService.validateUser(creatorLoginDto);
// }
/*
        // // 유효한 이메일인지 확인 -> 회원가입으로 옮김
    // @Post('email_verify')
    // async verifyEamil(@Query() emailDto: VerifyEamilDto): Promise<string>{
    //     const { signupVerifyToken } = emailDto; // 토큰 추출
    //     return await this.creatorService.verifyEmail(signupVerifyToken);
    // }
*/
