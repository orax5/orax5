import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatorLoginDto } from './../creator_dto/creator-login.dto';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreatorLoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  // 닉네임 반환해주는 로그인
  async creatorLogin(userLoginForm: CreatorLoginDto) {
    console.log('로그인 들어옴 ');
    const plainPwd = userLoginForm.user_pwd;

    //const SORT_NUM = parseInt(this.config.get('SORT_NUM'));
    const SORT_NUM = parseInt(this.config.get('SORT_NUM'));
    console.log(typeof SORT_NUM);

    // 입력한 비밀번호 해시화
    const enteredPWD = await bcrypt.hashSync(plainPwd, SORT_NUM);
    console.log('@@ enteredPWD : ', enteredPWD);

    const result = await this.prisma.user.findUnique({
      where: {
        user_wallet: userLoginForm.user_wallet,
      },
      select: {
        user_email: true,
        user_grade: true,
        user_pwd: true,
        user_nickname: true,
      },
    });
    console.log('@@@ result : ', result);

    // 비밀번호 비크립트 비교하기
    const pwdResult = bcrypt.compare(enteredPWD, result.user_pwd);
    console.log(pwdResult);
    if (pwdResult) {
      const data = {
        user_grade: result.user_grade,
        user_nickname: result.user_nickname,
      };
      return data;
    } else {
      throw new HttpException('크리에이터 로그인 실패', 400);
    }
  }
}
