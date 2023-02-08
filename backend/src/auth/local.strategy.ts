// src/auth/local.strategy.ts
// 공식 doc에 있는 문서
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

// 로컬 Passport 로컬 인증 전략
// 여기가 토큰이 썩었는지 확인해주는 부분, 
// 로그인 api 호출시 유저가 정상적으로 로그인 할 수 있는 상태인지 확인해준다
// 가입할때 가드

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({
			usernameField: 'user_wallet',
			passwordField: 'password'
		}); // { usernameField: 'user_wallet'}
	}

	// 유저 유효성은 지갑주소(=통상 id와 같은취급), 비밀번호로 검증할 예정임
	// validate() 는 다음 인자를 받기를 기대한다 (username:string, password: string): any ...
	// 로그인 api이전에 먼저 실행되어 해당 유저의상태 검사
	async validate(userWallet: string, userEmail: string ,password: string): Promise<User> {
		const payload = {user_wallet : userWallet, user_pwd: password, user_email: userEmail}
		const user = await this.authService.validateUser(payload);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}