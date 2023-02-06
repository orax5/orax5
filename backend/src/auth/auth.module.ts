import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailModule } from '../email/email.module';
import { UserLoginService } from 'src/user/login/login.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  // JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '60s'} })
  imports: [
    EmailModule,
    PassportModule.register({
      session: false, // jwt 사용해서 token기반으로 관리할 예정이기 때문에 false
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_lSECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
    }),
  ], // service에서 직접 토큰 유지시간 지정해줘서 지움
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserLoginService,
    PrismaService,
    JwtService,
  ],
  exports: [JwtStrategy],
})
export class AuthModule {}

/*  1
  registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_lSECRET'),
        signOptions:{
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`
        },
      }),
    }),
*/

/*
        // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     secret: config.get('JWT_SECRET'),
    //     signOptions:
    //   }
    // })
    // .registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     secret: 
    //   }
    // })
*/
