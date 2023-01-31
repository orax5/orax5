import { Module } from '@nestjs/common';
import { CreatorSignupModule } from './creator-signup/creator-signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './creator-login/creator-login.module';
import { UserModule } from '../user/user.module';


@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule],
  controllers: [],
  providers: []
})
export class CreatorModule {}

//  EmailService,