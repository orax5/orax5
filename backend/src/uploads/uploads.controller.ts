import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Expr } from 'aws-sdk/clients/cloudsearchdomain';
import { UploadsService } from './uploads.service';

@Controller('uploadS3')
export class UploadsController {
  constructor(private readonly uploadService: UploadsService) {}

  // 앞단에서 이미지는 따로 등록하도록한다음 url리턴하는거 받아오자
  // 업로드 완성
  @Post('/image')
  @UseInterceptors(FileInterceptor('file'))
  postS3Image(@UploadedFile() file: Express.MulterS3.File) {
    // 주의 : Express.Multer.File 랑 다른객체
    const url = this.uploadService.s3Uploadimage(file);
    console.log('@@@@ 컨트롤러', url);
  }

  @Post('/id')
  @UseInterceptors(FileInterceptor('file'))
  async postS3Music(@UploadedFile() file: Express.MulterS3.File) {
    const url = await this.uploadService.s3UploadMusic(file);
  }
}

// 파일 전송 이런식으로 전송
/*
      {
        fieldname: 'file',
        originalname: 'sample.png',
        encoding: '7bit',
        mimetype: 'image/png',
        buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 04 b0 00 00 04 b0 08 06 00 00 00 eb 21 b3 cf 00 00 00 09 70 48 59 73 00 00 0b 13 00 00 0b 13 01 ... 47404 more bytes>,
        size: 47454
      }

    */
