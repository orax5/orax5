import { IsEmail, IsString, Matches } from 'class-validator';
import { Transform } from 'class-transformer';


export class CreatorLoginDto{

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/) // 정규식적용
    user_pwd: string

    @IsString()
    user_wallet: string

    @IsString()
    @IsEmail()
    user_email: string
}