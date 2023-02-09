import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserLoginService } from '../login/login.service';
import { SignupController } from '../signup/signup.controller';
import { SignupService } from '../signup/signup.service';
import { AuthService } from '../../auth/auth.service';

@Module({
  imports: [],
  controllers: [SignupController],
  providers: [SignupService, PrismaService, UserLoginService, AuthService],
  exports: [],
})
export class SignUpModule {}
