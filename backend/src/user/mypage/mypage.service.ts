import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UserMypageService {
    constructor(private readonly prisma: PrismaService){}

    async getOneUser(userId: number){
        const result = await this.prisma.user.findFirst({
            where: {
                user_no : userId
            }
        })
       const nickName = result.user_nickname
        return nickName
    }
}
=======

@Injectable()
export class UserMypageService {}
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
