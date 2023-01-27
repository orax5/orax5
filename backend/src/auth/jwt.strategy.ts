import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { env } from 'process';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly config: ConfigService){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretKey', // 시크릿키 넣어줘
        });
    }

    async validate(payload: any){
        return { user_wallet: payload.sub, username: payload.user_wallet}
    }

}