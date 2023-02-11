import { IsEmail, IsString, Matches } from "class-validator";
import { Transform } from "class-transformer";

export class CreateCreator {
  @Transform((params) => params.value.trim()) // 입력값중 공백 제거
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

  user_grade?: number;

  user_streaming?: number;

  user_email_token?: string;
}
