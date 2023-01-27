import { Controller, Post, Body, Query } from '@nestjs/common';
import { VerifyEamilDto } from '../../email/verifyEamil.dto';
import { CreatorSignupService } from './creator-signup.service';
import { CreateUserDto } from '../../user/user_dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('creator_signup')
export class CreatorSignupController {

    constructor(private readonly creatorService : CreatorSignupService){}

    // 크리에이터 회원가입
    @Post()
    async createCreator(@Body() creatorLoginForm: CreateUserDto): Promise<void>{
        const isgradeSet = creatorLoginForm.user_grade; // grade 제대로 입력했는지 한번더 확인
        if (isgradeSet === 2){
            await this.creatorService.creatorSignUP(creatorLoginForm);
        }
        throw new Error('user_grade 2로 설정안됐음')
    }

    // 유효한 이메일인지 확인
    @Post('email_verify')
    async verifyEamil(@Query() emailDto: VerifyEamilDto): Promise<string>{
        const { signupVerifyToken } = emailDto; // 토큰 추출
        return await this.creatorService.verifyEmail(signupVerifyToken);
    }

}
