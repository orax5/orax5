import { Controller, Post, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { VerifyEamilDto } from '../../email/verifyEamil.dto';
import { CreatorSignupService } from './creator-signup.service';
import { CreateUserDto } from '../../user/user_dto/create-user.dto';

@Controller('creator-signup')
export class CreatorSignupController {

    constructor(private readonly creatorService : CreatorSignupService){}

    // 크리에이터 회원가입
    @Post()
    async createCreator(@Body() creatorLoginForm: CreateUserDto): Promise<void>{
        const isgradeSet = creatorLoginForm.user_grade; // grade 제대로 받아오는지 한번더 확인
        if (isgradeSet === 2){
            await this.creatorService.creatorSignUP(creatorLoginForm);
        }
        throw new HttpException('user_grade 2로 설정안됐음', HttpStatus.BAD_REQUEST)
    }

    // 유효한 이메일인지 확인
    // 다시 /creator_signup/email_verify로 요청보냄 url에 담긴 값 추출
    @Post('email-verify')
    async verifyEamil(@Query() emailDto: VerifyEamilDto): Promise<string>{
        const { signupVerifyToken } = emailDto; // 무작위 uuid로 발급한 토큰 추출
        return await this.creatorService.verifyEmail(signupVerifyToken);
    }
}
