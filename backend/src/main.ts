import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

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
  console.log('ENV 에서 값 가져옴? : ' + process.env.DB_HOST);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe()); // validation 전역설정
}
bootstrap();
