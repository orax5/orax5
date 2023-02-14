import { Controller, Get, Header, Param, Res } from '@nestjs/common';
import { DownloadService } from './download.service';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

//s3에서 음악파일 받아오는 곳
@Controller('downloadS3')
export class DownloadController {
  constructor(private config: ConfigService) {}

  @Get('/:id')
  async downloadFileS3(@Res() res, @Param('id') musictitle: string) {
    const s3 = new S3();
    const params = {
      Bucket: this.config.get('AWS_S3_BUCKET_NAME_MUSIC'),
      Key: musictitle,
    };

    try {
      const fullUrl = await s3.getSignedUrlPromise('getObject', params);
      console.log('@@ 음악 주소 뽑아내느거 맞나? : ', fullUrl);
      // 물음표까지만 떼고 .mp3 붙여주기
      const url = fullUrl.split('?', 1) + '.mp3';
      console.log('@@@ 진짜 url : ', url);
      return url;
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

// s3 객체 주소
// https://divetospace-2.s3.ap-northeast-2.amazonaws.com/Bubble.mp3
