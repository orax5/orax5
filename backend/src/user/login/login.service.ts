import { Injectable, Body, HttpStatus, HttpException, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { userLoginDto } from '../user_dto/user-login.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class UserLoginService {
 
    // PrismaService 이걸 지정해야하는게 아닌감 // PrismaClient 이었음 처음에
    constructor(private readonly prisma: PrismaService){}

    // 지갑주소로 유저 찾기(가입한 유저인지 확인)
    // 특정유저 찾아서 결과 return
   async findOne(userwallet: string): Promise<any>{
            const result = await this.prisma.user.findUnique({ 
                where :
                {
                    user_wallet : userwallet,
                },
            });
            if(result == null || undefined ){
                throw new HttpException('아이디가 존재하지 않습니다.', HttpStatus.BAD_REQUEST); // 오류번호 수정예정
            }
            return result;
    
    }

    getUser(userwallet: string): Promise<User>{
        try {
            const result = this.prisma.user.findUnique({ where :{
                user_wallet : userwallet,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException('아이디가 존재하지 않습니다.', HttpStatus.BAD_REQUEST); // 오류번호 수정예정   
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
