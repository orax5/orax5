import { Global, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';
// import { AdminModule } from './admin/admin.module';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UploadsModule } from './file-s3/uploads/uploads.module';
import { LoggerMiddleware } from './middlewears/logger.middleware';
import { EmailModule } from './email/email.module';
import { PrismaService } from './prisma.service';
import { AdminModule } from './admin/admin.module';
import { DownloadModule } from './file-s3/download/download.module';
import { FileS3Module } from './file-s3/file-s3.module';

//import { AppController } from './app.controller';
import * as redisStore from 'cache-manager-ioredis';

// AdminModule,
// @Global()
@Module({
  //DownloadModule,
  imports: [
    UserModule,
    CreatorModule,
    AdminModule,
    EmailModule,
    UploadsModule,
    FileS3Module,
    ConfigModule.forRoot({
      isGlobal: true, // 전체적으로 사용하기 위해
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
  ],
  controllers: [],
  providers: [
    {
      // validationPipe 전역 설정
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    PrismaService,
  ],
})
//AppController

// 미들웨어 설정
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('/user_*');
  }
}

/*
      CacheModule.register({
      store:redisStore,
      host: 'localhost',
      port: 6379,
    })
*/
