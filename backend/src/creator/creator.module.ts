import { Module } from '@nestjs/common';
import { CreatorShinchungController } from './creator-shinchung/creator-shinchung.controller';
import { CreatorShinchungService } from './creator-shinchung/creator-shinchung.service';
import { CreatorSignupController } from './creator-signup/creator-signup.controller';
import { CreatorSignupService } from './creator-signup/creator-signup.service';
import { CreatorLoginController } from './creator-login/creator-login.controller';
import { CreatorLoginService } from './creator-login/creator-login.service';
import { EmailService } from '../email/email.service';
import { EmailModule } from '../email/email.module';
import { PrismaService } from '../prisma.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport/dist';


@Module({
  imports: [EmailModule, UserModule, PassportModule],
  controllers: [CreatorShinchungController, CreatorSignupController, CreatorLoginController,],
  providers: [CreatorShinchungService, CreatorSignupService, CreatorLoginService, EmailService, PrismaService]
})
export class CreatorModule {}
