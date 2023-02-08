import { Module } from '@nestjs/common';
import { CreatorSignupModule } from './signup/signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './login/login.module';
import { UserModule } from '../user/user.module';
import { ShinchungModule } from './shinchung/shinchung.module';
//import { OpenfundingModule } from './openfunding/openfunding.module';
import { RedisCacheModule } from '../cache/cache.module';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from '@nestjs/axios';
import { UploadsModule } from '../file-s3/uploads/uploads.module';
import { OpenfundingModule } from './openfunding/openfunding.module';

// OpenfundingModule
<<<<<<< HEAD
@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule, ShinchungModule, HttpModule, OpenfundingModule, UploadsModule,
    RedisCacheModule    
=======
@Module({
  imports: [
    CreatorSignupModule,
    AuthModule,
    CreatorLoginModule,
    UserModule,
    ShinchungModule,
    HttpModule,
    OpenfundingModule,
    UploadsModule,
>>>>>>> main
  ],
  controllers: [],
  providers: [],
})
export class CreatorModule {}

//  EmailService,
