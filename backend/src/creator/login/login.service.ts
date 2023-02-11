import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class CreatorLoginService {
  constructor(private readonly prisma: PrismaService) {}

  // controller에서 토큰 받아옴
  // 유효한 이메일인지 확인
  // async verifyEmail(signupVerifyToken: string): Promise<string>{
  //     const creator = await this.prisma.user.findUniqueOrThrow({
  //         // 여기 수정해야함
  //         where: { signupVerifyToken }
  //     })
  //     return " "
  //     // DB에서 signupVerifyToken으로 회원가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
  //     // 바로 로그인 상태가 되도록 JWT 발급
  //     //throw new Error('일단 오류 뱉기')
  // }
}
