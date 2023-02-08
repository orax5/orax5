import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
<<<<<<< HEAD
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
=======
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';

import dotenv = require('dotenv');
>>>>>>> main
import path = require('path');

<<<<<<< HEAD
        
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET, // 수정!!! 도움!!!
        });
    }
=======
const KEY = process.env.JWT_SECRET || 'secretKey';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: KEY, // 수정!!! 도움!!!
    });
  }
>>>>>>> main

  async validate(payload: any) {
    return { user_wallet: payload.sub, username: payload.user_wallet };
  }
}
