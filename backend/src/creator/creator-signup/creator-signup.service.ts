import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user_dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { UserLoginService } from 'src/user/login/login.service';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid'; 
import { ConfigService } from '@nestjs/config';

import dotenv = require('dotenv');
import { User } from '@prisma/client';

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
       const newsignupForm = {...signupForm} // 입력값 다른 주소로 복사해서 할당해놓기 
        // 첫번째인수 = 환경변수 키값, 두번째 기본값 넣어줄 수 있음
        const SORTNUM = this.config.get<number>('SORT_NUM'); //갖고오는건가???
        console.log(SORTNUM);
        //process.env.SORT_NUM;

        // 닉네임 중복검사
        const existNickName = this.isExistNickName(signupForm.user_nickname);
        
       if(existUser || existNickName){// 가입가능한 유저라면
            // 입력받은 비밀번호 해시화해서 저장
            // sort 횟수 .env로 빼기
            //const sortNum = this.configService.get<number>(SORT_NUM)
            bcrypt.hash(enterPWD, SORTNUM, (err, encryptedPw: string): any =>{
                newsignupForm.user_pwd = encryptedPw;
            });
            // 임시로 uuid 토큰 발급
            // email인증에 담아보낼 토큰 임시값 무작위 문자열임
            const signupVerifyToken = uuid.v1();

            newsignupForm.user_email_token = signupVerifyToken; 

            this.sendCreatorJoinEmail(signupForm.user_email, signupVerifyToken); // 이메일 발송


            // user_grade == 2 인지 검사 아래에서 함
            await this.saveCreator(newsignupForm); // 토큰이 있다면 크리에이터로 db에 저장해주기
        }else{ 
            //return false.
            throw new HttpException("이미 계정이 존재합니다.", HttpStatus.BAD_REQUEST)
       }
    }

    // 이미 가입하는 유저인지 확인: bool
    private isExistUser(user_wallet: string): boolean{
        try {
            const userwallet = user_wallet;
            // 이미 존재하는 유저인지 확인
            const exist = this.userLoginService.findOne(userwallet);
            if(exist){
                return false;
            } 
            return true;
        } catch (error) {
            throw new HttpException('이미 존재하는 회원입니다.', HttpStatus.BAD_REQUEST)
        }
    }


    // 닉네임 중복검사
    private isExistNickName(user_nickname: string): boolean{
        try {
            const exist = this.userLoginService.findOne(user_nickname);
            // 값이 존재하면
            if(exist){
                return false;
            }
            return true;
        } catch (error) {
            throw new HttpException('중복된 아이디입니다.', HttpStatus.BAD_REQUEST);
        }
    }


    // DB에 저장하기
    private saveCreator(signupform: CreateUserDto){
        try {
            // grade== 1 && 이메일이 유효하다는 토큰이 있다면 유저 생성
            if(signupform.user_email_token && signupform.user_grade === 2){
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


    // 유효한 이메일인지 확인 받아서 db에 저장해줄거임
    async verifyEmail(signupVerifyToken: string): Promise<any>{
        // url에 담겼던 토큰 꺼내서 일치하는 유저가 있는지 확인
            return await this.prisma.$queryRaw`SELECT * FROM USER WHERE user_email_token =${signupVerifyToken}`.then(()=>{
                return new HttpException('잘못된 이메일입니다.', HttpStatus.BAD_REQUEST);
            })
           
      
        // DB에서 signupVerifyToken으로 회원가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
        // 바로 로그인 상태가 되도록 JWT 발급
        //throw new Error('일단 오류 뱉기')
    }
    

}

