import {
  Injectable,
  Body,
  HttpStatus,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { userLoginDto } from '../user_dto/user-login.dto';
import { PrismaService } from '../../prisma.service';

import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserLoginService {
  // PrismaService 이걸 지정해야하는게 아닌감 // PrismaClient 이었음 처음에
  constructor(
    private readonly prisma: PrismaService,
    private config: ConfigService,
  ) {}

  // 지갑주소로 유저 찾기(가입한 유저인지 확인), 로그인 할 때 사용
  // 특정유저 찾아서 결과 return
  async findOne(userwallet: string): Promise<any> {
    console.log('findOne 들어옴 ');
    const result = await this.prisma.user.findUnique({
      where: {
        user_wallet: userwallet,
      },
    });

    console.log('@@@ 로그인할 때 findOne 결과 : ', result);
    if (result == null || undefined) {
      throw new HttpException(
        '아이디가 존재하지 않습니다.',
        HttpStatus.BAD_REQUEST,
      ); // 오류번호 수정예정
    }
    return result;
  }

  getUser(userwallet: string): Promise<User> {
    try {
      const result = this.prisma.user.findUnique({
        where: {
          user_wallet: userwallet,
        },
      });
      return result;
    } catch (error) {
      throw new HttpException(
        '아이디가 존재하지 않습니다.',
        HttpStatus.BAD_REQUEST,
      ); // 오류번호 수정예정
    }
  }

  // 닉네임 반환해주는 로그인
  async userLogin(userLoginForm: userLoginDto) {
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
      throw new HttpException('유저 로그인 실패', 400);
    }
  }
}

//====== AUTH에 로그인 새로 만듬
// async login(loginForm: userLoginDto): Promise<User | undefined>{
//     try {
//         // loginForm으로 유저지갑주소랑 비밀번호 받아옴
//         const result = await this.prisma.user.findUnique({ where: loginForm});
//         return result
//     } catch (error) {
//         throw new HttpException('Login Fail ', 401)
//     }
// }

// {
//     "user_no":  "1",
//     "user_nickname": 'Conan',
//     "user_pwd": '1234aaa',
//     "user_email" : 'test1@test.com',
//     "user_wallet": '0x123456ddd789sss',
//     "user_streaming": "0",
//     "user_grade" : "0",
//    }

// private readonly users =[
//    {
//     user_no:  1,
//     user_nickname: 'Conan',
//     user_pwd: '1234aaa',
//     user_email : 'test1@test.com',
//     user_wallet: '0x123456ddd789sss',
//     user_streaming: 0,
//     user_grade : 0,
//    },
//    {
//     user_no:  2,
//     user_nickname: 'RAYE',
//     user_pwd: '1234',
//     user_email : 'test2@test.com',
//     user_wallet: '0x9999ssss888',
//     user_streaming: 0,
//     user_grade : 1,
//    }
// ]
