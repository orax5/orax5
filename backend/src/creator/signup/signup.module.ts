import { Module } from '@nestjs/common';
import { CreatorSignupController } from './signup.controller';
import { CreatorSignupService } from './signup.service';
import { PrismaService } from '../../prisma.service';
import { EmailService } from '../../email/email.service';
import { UserLoginService } from '../../user/login/login.service';
import { CacheService } from '../../cache/cache.service';

@Module({
<<<<<<< HEAD
    imports:[],
    controllers:[CreatorSignupController],
    providers:[CreatorSignupService, PrismaService, EmailService, UserLoginService, CacheService]
    
=======
  imports: [],
  controllers: [CreatorSignupController],
  providers: [
    CreatorSignupService,
    PrismaService,
    EmailService,
    UserLoginService,
  ],
>>>>>>> main
})
export class CreatorSignupModule {}
