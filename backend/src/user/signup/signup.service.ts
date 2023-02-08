import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from '../user_dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserLoginService } from '../login/login.service';

// 비밀번호 암호화

@Injectable()
export class SignupService {
  constructor(
    private prisma: PrismaService,
    private userLoginService: UserLoginService,
  ) {}

  async signUP(signupform: CreateUserDto): Promise<User> {
    const userwallet = signupform.user_wallet; // 회원가입창에서 지갑주소만 추출
    const enterPWD = signupform.user_pwd;
    const newsignupForm = { ...signupform };

    // 이미 존재하는 유저인지 확인
    const exist = this.isExistUser(userwallet);
    console.log('@@ 이그지', exist);
    const existNickName = this.isExistNickName(signupform.user_nickname);
    console.log('@@ 닉네임', existNickName);

    if (exist && existNickName) {
      // 이미 존재하는 계정이 아니라면 가입시켜주기
      bcrypt.hash(enterPWD, 10, (err, encryptedPw: string): any => {
        newsignupForm.user_pwd = encryptedPw;
      });
      return await this.prisma.user.create({
        data: newsignupForm, // 이미 객체 라서 그래도 넣어도 된다
      });
    }
  }

  // 이미 가입하는 유저인지 확인: bool
  private isExistUser(user_wallet: string): boolean {
    try {
      const userwallet = user_wallet;
      // 이미 존재하는 유저인지 확인
      const exist = this.userLoginService.findOne(userwallet);
      if (exist == null || undefined) {
        return false;
      }
      return true;
    } catch (error) {
      throw new HttpException(
        '이미 존재하는 회원입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // 닉네임 중복검사
  private isExistNickName(user_nickname: string): boolean {
    try {
      const exist = this.userLoginService.findOne(user_nickname);
      // 값이 존재하면
      if (exist == null || undefined) {
        return false;
      }
      return true;
    } catch (error) {
      throw new HttpException('중복된 아이디입니다.', HttpStatus.BAD_REQUEST);
    }
  }
}
/*
        // 비밀번호 
    //     async transformPassword(signupform: userSignUpDto): Promise<userSignUpDto>{
    //         try {
    //             const userwallet = signupform.user_wallet;// 회원가입창에서 지갑주소만 추출
    //             const userPWD = signupform.user_pwd;
    //             const newsignupForm = {...signupform}
    //             // 이미 존재하는 유저인지 확인
    //             const exist = await this.userLoginService.findOne(userwallet).then((e)=>{
    //                 const hashPWD= bcrypt.hash(userPWD, 10, (err, encryptedPw: string): any =>{
    //                     newsignupForm.user_pwd = encryptedPw;
    //                 });
    //             })
    //             return newsignupForm;   
    //         } catch (error) {      
    //         throw new HttpException('로그인 실패', 401);
    //     }
    // }

*/
