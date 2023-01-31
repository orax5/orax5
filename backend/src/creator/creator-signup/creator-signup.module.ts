import { Module } from '@nestjs/common';
import { CreatorSignupController } from './creator-signup.controller';
import { CreatorSignupService } from './creator-signup.service';
import { PrismaService } from '../../prisma.service';
import { EmailService } from '../../email/email.service';
import { UserLoginService } from '../../user/login/login.service';

@Module({
    imports:[],
    controllers:[CreatorSignupController],
    providers:[CreatorSignupService, PrismaService, EmailService, UserLoginService]
    
})
export class CreatorSignupModule {}
