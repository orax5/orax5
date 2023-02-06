import { Module } from '@nestjs/common';
import { UserLoginService } from './login.service';
import { UserLoginController } from './login.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [UserLoginService, PrismaService, AuthService],
  controllers: [UserLoginController],
})
export class LoginModule {}
