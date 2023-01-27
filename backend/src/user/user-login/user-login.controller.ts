import { Controller,Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { LocalAuthGuard } from '../../auth/local-auth';
import { JwtAuthGuard } from '../../auth/jwt-auth';


@Controller('user_login')
export class UserLoginController {
    constructor(private authService: AuthService){}

    //UseGuards : 경비역할을 하는 미들웨어
    //LocalAuthGuard
    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req){
        return this.authService.login(req.user); // passport
    }

    @UseGuards(JwtAuthGuard)
    @Get('/mypage')
    getMyPage(@Request() req){
        return req.user;
    }
}
