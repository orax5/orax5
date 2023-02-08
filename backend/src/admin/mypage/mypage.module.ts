import { Module } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { MypageController } from './mypage.controller';
import { PrismaService } from '../../prisma.service';
import { UploadsService } from '../../file-s3/uploads/uploads.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '../../cache/cache.service';
import { EmailService } from '../../email/email.service';

@Module({
  imports: [ 
    HttpModule.registerAsync({ // 비동기쓰려면 이렇게 모듈설정
      useFactory:() => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
      inject: [ConfigService],
    }) 
  ],
  controllers: [MypageController],
  providers: [MypageService, PrismaService, UploadsService, CacheService, EmailService],
})
export class MypageModule {}

/*
      HttpModule.registerAsync({ // 비동기쓰려면 이렇게 모듈설정
      imports: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        timeout: config.get('HTTP_TIMEOUT'),
        maxRedirects: config.get('HTTP_MAX_REDIRECTS'),
      }),
      inject: [ConfigService],
    }) 
*/