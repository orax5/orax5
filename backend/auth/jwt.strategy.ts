import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import path = require('path');
import { JwtPayload } from './payload.dto';
import { AuthService } from './auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: process.env.JWT_SECRET, // 수정!!! 도움!!!
        });
    }

    async validate(payload: JwtPayload,  done: VerifiedCallback): Promise<any>{
        const user = await this.authService.tokenValidateUser(payload);
        if(!user){
            return done(new UnauthorizedException({message: '존재하지 않는 유저입니다.'}))
        }
        return { grade: payload.usergrade, nickname: payload.nickname}
        //{ grade: payload.usergrade, nickname: payload.nickname}
    }

}