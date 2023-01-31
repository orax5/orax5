import { Module } from '@nestjs/common';
import { CreatorLoginController } from './login.controller';
import { AuthService } from '../../auth/auth.service';
import { UserLoginService } from '../../user/login/login.service';
import { PrismaService } from '../../prisma.service';

@Module({
    imports:[],
    controllers:[ CreatorLoginController],
    providers: [AuthService, UserLoginService, PrismaService]
})
export class CreatorLoginModule {}
