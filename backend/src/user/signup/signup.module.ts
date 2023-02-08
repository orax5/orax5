import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { LoginModule } from '../login/login.module';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { UserLoginService } from '../login/login.service';

@Module({
  imports:[],
  controllers: [SignupController],
  providers: [SignupService, PrismaService, UserLoginService],
  exports: []
})
export class SignUpModule {}
