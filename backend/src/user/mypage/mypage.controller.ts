import { Controller, Get, Param, Headers, UseGuards } from '@nestjs/common';
import { UserInfo } from '../user_dto/UserInfo';
import { JwtAuthGuard } from '../../auth/jwt-auth';
import { UserMypageService } from './mypage.service';

@Controller('/user/mypage')
export class UserMypageController {
  constructor(private mypage: UserMypageService) {}

  // 마이 페이지에서 닉네임만 띄워주면 될듯 나머지는 컨트랙트에서 띄워준다고함
  // /mypage/Auth api가 호출될때 JwtAuthGuard의 canActive()를 먼저 실행하고 문제없으면
  // 해당 로직의 api가 실행된다
  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getUserMypage(
    @Headers() headers: any,
    @Param('id') userId: string,
  ): Promise<string> {
    // 토큰확인?
    //const jwtString = headers.auth
    const userNum = parseInt(userId);
    const user = this.mypage.getOneUser(userNum);
    return user;
  }
}
