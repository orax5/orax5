//import { Transform } from "class-transformer";
<<<<<<< HEAD
import { IsEmail, IsString, Matches,IsNumber, IsOptional } from "class-validator"
=======
import { IsEmail, IsString, Matches } from 'class-validator';
>>>>>>> main
// userSignUpDto 였음
export class CreateUserDto {
  // @Transform(params => params.value.trim()) // 입력값중 공백 제거
  @IsString()
  @IsEmail()
  user_email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/) // 정규식적용
  user_pwd: string;

  @IsString()
  user_wallet: string;

  @IsString()
  user_nickname: string;

<<<<<<< HEAD
    @IsNumber()
    @IsOptional()
    user_grade?: number
    
    @IsNumber()
    @IsOptional()
    user_streaming?: number

    @IsString()
    @IsOptional()
    user_email_token?: string
=======
  user_grade?: number;

  user_streaming?: number;

  user_email_token?: string;
>>>>>>> main
}
// user_email_token 크리에이터 이메일 인증할때 담아보내줄 무작위 문자열
// user_grade :  1- 일반유저 2- crator 3-admin
// 왜? 보통 0으로 처리하는 경우가 많아서 꼬일 수 있기 때문에 0은 잘 안쓴다고 한다.
<<<<<<< HEAD



=======
>>>>>>> main
