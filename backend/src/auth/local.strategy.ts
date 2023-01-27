// src/auth/local.strategy.ts
// 공식 doc에 있는 문서
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

// 로컬 Passport 로컬 인증 전략

// 여기가 토큰이 썩었는지 확인해주는 부분

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super(); // { usernameField: 'user_wallet'}
	}

	// 유저 유효성은 지갑주소(=통상 id와 같은취급), 비밀번호로 검증할 예정임
	// validate() 는 다음 인자를 받기를 기대한다 (username:string, password: string): any ...
	async validate(userWallet: string, password: string): Promise<User> {
		const user = await this.authService.validateUser(userWallet, password);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}