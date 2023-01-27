import { Injectable } from '@nestjs/common';
import { UserLoginService } from 'src/user/user-login/user-login.service';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { userLoginDto } from 'src/user/user_dto/user-login.dto';
import * as bcrypt from "bcrypt";

// 여기서 비밀번호 해시화 해줘야함
@Injectable()
export class AuthService {
    constructor(private userService: UserLoginService, private jwtService: JwtService){}

    // 최초 로그인
    async validateUser(userWallet: string, enterPWD: string): Promise<any>{
        try {
            // 동일한 지갑 소유주가 있는지 확인
            const user = await this.userService.findOne(userWallet).then((e)=>{
                const pwdResult = bcrypt.compareSync(enterPWD, e.user_pwd); // 비밀번호 동일한지 검사
                if(pwdResult){
                    // const { user_pwd, ...result} = user; // 비밀번호 제외하고 추출
                    return this.login({user_email: e.user_email, user_wallet: e.user_wallet})
                }
            }) 
            return user;
        } catch (error) {
            throw new HttpException('로그인 실패', 401); // 일치하는 유저가 없으면 오류
        }
    }

    async login(user: userLoginDto){
        const payload = { userWallet: user.user_wallet, sub: user.user_email}
        // 로그인 토큰 발급
        return {access_token: this.jwtService.sign(payload,{expiresIn:"1h",})} // expiresIn : 토큰 살아있는 시간
    }
}
