import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user_dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { HttpException } from '@nestjs/common/exceptions';
import { UserLoginService } from 'src/user/user-login/user-login.service';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid'; 
import { ConfigService } from '@nestjs/config';

import dotenv = require('dotenv');
dotenv.config();

@Injectable()
export class CreatorSignupService {
   
    constructor(private readonly prisma: PrismaService, 
        private userLoginService : UserLoginService, 
        private emailService: EmailService,  
        private readonly config: ConfigService){}



    async creatorSignUP(signupForm: CreateUserDto){
        // 존재하는 유저인지 확인
       const existUser = this.isExistUser(signupForm.user_wallet);
       const enterPWD = signupForm.user_pwd;
       const newsignupForm = {...signupForm}
        // 첫번째인수 = 환경변수 키값, 두번째 기본값 넣어줄 수 있음
    const SORTNUM = this.config.get<number>('SORT_NUM'); //갖고오는건가
    console.log(SORTNUM);
    
    //process.env.SORT_NUM;
       if(existUser){// 가입가능한 유저라면
            // 입력받은 비밀번호 해시화해서 저장
            // sort 횟수 .env로 빼기
            //const sortNum = this.configService.get<number>(SORT_NUM)
            bcrypt.hash(enterPWD, SORTNUM, (err, encryptedPw: string): any =>{
                newsignupForm.user_pwd = encryptedPw;
            });
            // 임시로 uuid 토큰 발급
            const signupVerifyToken = uuid.v1();
            newsignupForm.user_email_token = signupVerifyToken; 

            // user_grade == 2 인지 검사 아래에서 함
            this.saveCreator(newsignupForm); // 토큰이 있다면 크리에이터로 db에 저장해주기
            await this.sendCreatorJoinEmail(signupForm.user_email, signupVerifyToken)
        }else{ 
            //return false.
            throw new HttpException("이미 계정이 존재합니다.", 401)
       }
    }

    // 이미 가입하는 유저인지 확인: bool
    isExistUser(user_wallet: string): boolean{
        try {
            const userwallet = user_wallet;
            // 이미 존재하는 유저인지 확인
            const exist = this.userLoginService.findOne(userwallet);
            if(exist){
                return false;
            } 
            return true;
        } catch (error) {
            throw new HttpException('이미 존재하는 회원입니다.', 402)
        }
    }


    // DB에 저장하기
    private saveCreator(signupform: CreateUserDto){
        try {
            // grade== 1 && 이메일이 유효하다는 토큰이 있다면 유저 생성
            if(signupform.user_email_token && signupform.user_grade === 1){
                return this.prisma.user.create({
                    data: signupform
                })
            }
        } catch (error) {
            console.log(error);
            throw new Error('이메일 토큰이 유효하지 않습니다.')
        }
    }

    // 크리에이터로 가입하려면 이메일 인증
    private async sendCreatorJoinEmail(email:string, signupVerifyToken: string){
        await this.emailService.sendCreatorJoinVerification(email, signupVerifyToken);
    }
    
    // controller에서 토큰 받아옴
    // 유효한 이메일인지 확인
    async verifyEmail(signupVerifyToken: string): Promise<string>{
        // DB에서 signupVerifyToken으로 회원가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
        // 바로 로그인 상태가 되도록 JWT 발급
        throw new Error('일단 오류 뱉기')
    }
}

