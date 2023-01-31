import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { env } from 'process';

import dotenv = require('dotenv');
import path = require('path');
dotenv.config();

const KEY = process.env.JWT_SECRET || 'secretKey';
        
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private config: ConfigService){

        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: KEY, // 수정!!! 도움!!!
        });
    }

    async validate(payload: any){
        
        return { user_wallet: payload.sub, username: payload.user_wallet}
    }

}