import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../user_dto/create-user.dto';
import { UserSignupService } from './user-signup.service';
import { User } from '@prisma/client';


@Controller('user_signup')
export class UserSignupController {
    constructor(private readonly UserSignupService: UserSignupService){ }

    // 회원가입
    @Post()
    async createUser(@Body() userSignUpData: CreateUserDto):Promise<User>{
        return await this.UserSignupService.signUP(userSignUpData);
    }
}
