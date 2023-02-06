import { Global, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';
// import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UploadsModule } from './uploads/uploads.module';
import { LoggerMiddleware } from './middlewears/logger.middleware';
import { EmailModule } from './email/email.module';
import { PrismaService } from './prisma.service';
<<<<<<< HEAD
import { AdminModule } from './admin/admin.module';
import { DownloadModule } from './download/download.module';


// AdminModule,
// @Global()
@Module({
  //DownloadModule,
  imports: [UserModule, CreatorModule, AdminModule, EmailModule, UploadsModule,
    ConfigModule.forRoot({
      isGlobal: true, // 전체적으로 사용하기 위해
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
       
=======


//  AdminModule,
// @Global()
@Module({
  // imports: [UserModule, CreatorModule,  UploadsModule, ConfigModule.forRoot({
  //   isGlobal: true, // 전체적으로 사용하기 위해
  //   envFilePath: `${process.env.NODE_ENV}.env`
  // }), ],
  imports: [UserModule, CreatorModule,
    ConfigModule.forRoot({
      isGlobal: true, // 전체적으로 사용하기 위해
      envFilePath: `${process.env.NODE_ENV}.env`
    })
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
  ],
  controllers: [],
  providers: [
    {
      // validationPipe 전역 설정
      provide : APP_PIPE,
      useClass: ValidationPipe,
    },
<<<<<<< HEAD
    PrismaService,
    
=======
    PrismaService
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
  ],
})

// 미들웨어 설정
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer):any{
      consumer.apply(LoggerMiddleware).forRoutes('/user_*');
    }
}
