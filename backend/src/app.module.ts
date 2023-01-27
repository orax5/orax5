import { Global, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { ConfigModule } from '@nestjs/config';
import { UploadsModule } from './uploads/uploads.module';

@Global()
@Module({
  imports: [UserModule, CreatorModule, AdminModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true, // 전체적으로 사용하기 위해
    envFilePath: `${process.env.NODE_ENV}.env`
  }), UploadsModule],
  controllers: [],
  providers: [
    {
      // validationPipe 전역 설정
      provide : APP_PIPE,
      useClass: ValidationPipe,
    },
    EmailService
  ],
})
export class AppModule {}
