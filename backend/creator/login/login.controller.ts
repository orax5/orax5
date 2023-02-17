import { Controller, Post, Request, UseGuards, Get, Body, Res, Headers } from '@nestjs/common';
import { VerifyEamilDto } from '../../email/verifyEamil.dto';
import {Response} from 'express'
import { CreatorLoginDto } from '../creator_dto/creator-login.dto';
import { AuthService } from '../../auth/auth.service';
import { CreatorLoginService } from './login.service';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('creator')
export class CreatorLoginController {
    constructor(private authService: AuthService){}

   
    @Post('/login')
    async creatorLogin(@Body() creatorLoginDto: CreatorLoginDto, @Res() res:Response, @Headers() headers: any){
        console.log("로그인 시도1 ")
        const token = await this.authService.validateUser(creatorLoginDto); // passport
        const data = await this.authService.postUserinfo(creatorLoginDto.user_wallet);
        res.header('Authorization', `Bearer ${token}`);
        res.json(data);
    }

}

/*
        // // 유효한 이메일인지 확인 -> 회원가입으로 옮김
    // @Post('email_verify')
    // async verifyEamil(@Query() emailDto: VerifyEamilDto): Promise<string>{
    //     const { signupVerifyToken } = emailDto; // 토큰 추출
    //     return await this.creatorService.verifyEmail(signupVerifyToken);
    // }
*/