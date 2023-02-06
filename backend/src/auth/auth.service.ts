import {
  HttpStatus,
  Injectable,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserLoginService } from 'src/user/login/login.service';
// import { JwtService } from '@nestjs/jwt';
import { userLoginDto } from 'src/user/user_dto/user-login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { CreatorLoginDto } from '../creator/creator_dto/creator-login.dto';
import { User } from '@prisma/client';
// 지갑 바꿨을때 토큰초기화

// 여기서 비밀번호 해시화 해줘야함
@Injectable()
export class AuthService {
  // constructor(private userService: UserLoginService, private readonly jwtService: JwtService, private readonly config: ConfigService){}
  constructor(
    private userService: UserLoginService,
    private readonly config: ConfigService,
  ) {}
  // 최초 로그인
  // userWallet: string, enterPWD: string
  async validateUser(loginForm: CreatorLoginDto): Promise<any> {
    try {
      // 동일한 지갑 소유주가 있는지 확인
      const user = await this.userService
        .findOne(loginForm.user_wallet)
        .then((e) => {
          const pwdResult = bcrypt.compareSync(loginForm.user_pwd, e.user_pwd); // 비밀번호 동일한지 검사
          if (pwdResult) {
            // const { user_pwd, ...result} = user; // 비밀번호 제외하고 추출
            // 토큰발급 함수 호출 || 여기서 비밀번호는 넘겨줄 필요없나
            return this.login({
              user_wallet: e.user_wallet,
              user_email: e.user_email,
              user_pwd: e.user_pwd,
            });
          }
        });
    } catch (error) {
      throw new HttpException(
        '로그인 실패, 가입하지 않은 사람임',
        HttpStatus.BAD_REQUEST,
      ); // 일치하는 유저가 없으면 오류
    }
  }

  async login(user: userLoginDto) {
    const payload = { userWallet: user.user_wallet, sub: user.user_email };
    // const enteredPWD = user.user_pwd;
    // 토큰 발급
    return jwt.sign(payload, this.config.get('JWT_SECRET'), {
      expiresIn: this.config.get('JWT_EXPIRATION_TIME'),
    });
    // 로그인 토큰 발급
    // return {access_token: this.jwtService.sign(payload)}
  }

  // 토큰이 우리서버에서 발급한게 맞는지 확인
  // 지갑주소랑 이메일로 페이로드 생성해 줬었다
  isVerifyToken(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, this.config.get('JWT_SECRET')) as (
        | jwt.JwtPayload
        | string
      ) &
        User;
      const { user_wallet, user_email } = payload;

      return { user_wallet: user_wallet, user_email: user_email };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
