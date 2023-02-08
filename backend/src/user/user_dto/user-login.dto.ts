import { IsEmail, IsString, Matches } from "class-validator"

export class userLoginDto{

    @IsString()
    user_wallet: string

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/) // 정규식적용
    user_pwd: string

    @IsString()
    @IsEmail()
    user_email: string
}