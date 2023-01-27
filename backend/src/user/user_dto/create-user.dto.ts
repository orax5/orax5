import { IsEmail, IsString } from "class-validator"
// userSignUpDto 였음
export class CreateUserDto{
    @IsEmail()
    user_email: string;

    @IsString()
    user_pwd: string

    user_wallet: string

    @IsString()
    user_nickname: string

    user_grade?: number
    
    user_streaming?: number

    user_email_token?: string
}

// user_grade :  1- 일반유저 2- crator 3-admin
// 왜? 보통 0으로 처리하는 경우가 많아서 꼬일 수 있기 때문에 0은 잘 안쓴다고 한다.