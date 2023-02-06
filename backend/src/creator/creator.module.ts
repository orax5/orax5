import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { CreatorSignupModule } from './signup/signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './login/login.module';
import { UserModule } from '../user/user.module';
import { ShinchungModule } from './shinchung/shinchung.module';
//import { OpenfundingModule } from './openfunding/openfunding.module';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from '@nestjs/axios';
import { UploadsModule } from '../uploads/uploads.module';
import { OpenfundingModule } from './openfunding/openfunding.module';

// OpenfundingModule
@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule, ShinchungModule, HttpModule, OpenfundingModule,UploadsModule
    
  ],
=======
import { CreatorSignupModule } from './creator-signup/creator-signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './creator-login/creator-login.module';
import { UserModule } from '../user/user.module';


@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule],
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
  controllers: [],
  providers: []
})
export class CreatorModule {}

//  EmailService,