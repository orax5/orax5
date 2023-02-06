import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UserMypageService {
  constructor(private readonly prisma: PrismaService) {}

  async getOneUser(userId: number) {
    const result = await this.prisma.user.findFirst({
      where: {
        user_no: userId,
      },
    });
    const nickName = result.user_nickname;
    return nickName;
  }
}
