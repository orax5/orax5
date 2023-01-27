import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from '../user_dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { HttpException } from '@nestjs/common/exceptions';
import { UserLoginService } from '../user-login/user-login.service';


// 비밀번호 암호화

@Injectable()
export class UserSignupService {
    constructor(private prisma: PrismaService, private userLoginService : UserLoginService){}

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

    // async transformPassword(signupPWD: string): Promise<string>{
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }


    async signUP(signupform: CreateUserDto): Promise<User>{
        try {
            const userwallet = signupform.user_wallet;// 회원가입창에서 지갑주소만 추출
            const enterPWD = signupform.user_pwd;
            const newsignupForm = {...signupform}
            // 이미 존재하는 유저인지 확인
            const exist = this.userLoginService.findOne(userwallet); // boolean
            if(!exist){ // 이미 존재하는 계정이 아니라면
                bcrypt.hash(enterPWD, 10, (err, encryptedPw: string): any =>{
                    newsignupForm.user_pwd = encryptedPw;
                });
                return await this.prisma.user.create({
                    data: newsignupForm // 이미 객체 라서 그래도 넣어도 된다
                })
            }
        } catch (e) {
            console.log('회원가입 오류');
            throw new Error(e)
        }
    }


 
}
