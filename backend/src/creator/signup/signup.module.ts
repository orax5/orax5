import { Module } from '@nestjs/common';
import { CreatorSignupController } from './signup.controller';
import { CreatorSignupService } from './signup.service';
import { PrismaService } from '../../prisma.service';
import { EmailService } from '../../email/email.service';
import { UserLoginService } from '../../user/login/login.service';

@Module({
    imports:[],
    controllers:[CreatorSignupController],
    providers:[CreatorSignupService, PrismaService, EmailService, UserLoginService]
    
})
export class CreatorSignupModule {}
