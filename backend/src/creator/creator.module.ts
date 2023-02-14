import { Module } from '@nestjs/common';
import { CreatorSignupModule } from './signup/signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './login/login.module';
import { UserModule } from '../user/user.module';
import { ShinchungModule } from './shinchung/shinchung.module';
//import { OpenfundingModule } from './openfunding/openfunding.module';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from '@nestjs/axios';
import { UploadsModule } from '../file-s3/uploads/uploads.module';
import { OpenfundingModule } from './openfunding/openfunding.module';
import { RedisCacheModule } from 'src/cache/cache.module';
import { MypageModule } from './mypage/mypage.module';

// OpenfundingModule
@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule, ShinchungModule, HttpModule, OpenfundingModule, UploadsModule,RedisCacheModule, MypageModule
        
  ],
  controllers: [],
  providers: []
})
export class CreatorModule {}

//  EmailService,