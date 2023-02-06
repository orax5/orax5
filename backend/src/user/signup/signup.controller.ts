import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../user_dto/create-user.dto';
import { SignupService } from './signup.service';
import { User } from '@prisma/client';
import { AuthService } from '../../auth/auth.service';
<<<<<<< HEAD
import { LocalStrategy } from '../../auth/local.strategy';
=======

/*
    import { LocalAuthGuard } from '../../auth/local-auth.guard';
    , private authService: AuthService
     @UseGuards(LocalAuthGuard)
*/
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2

@Controller('user')
export class SignupController {
    constructor(private readonly signupService: SignupService){ }

    // 회원가입
    @Post('/signup')
    async createUser(@Body() userSignUpData: CreateUserDto):Promise<User>{
        return await this.signupService.signUP(userSignUpData);
    }
}
