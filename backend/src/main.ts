import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import dotenv = require('dotenv');
import path = require('path');
dotenv.config();
// 여기서 .env 설정 전해주기

if(process.env.NODE_ENV === 'local'){
  Logger.log('서버가 로컬 환경에서 동작합니다');
  dotenv.config({path: path.join(__dirname, '../.env-local')});
}else if(process.env.NODE_ENV === 'dev'){
  Logger.log('서버가 개발 환경에서 동작합니다.');
  dotenv.config({path: path.join(__dirname, '../.env-dev')});
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // validation 전역설정
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`PORT NUM : ${PORT}`);
}
bootstrap();
