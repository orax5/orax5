import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { config } from 'dotenv';

@Injectable()
export class DownloadService {
  constructor(private readonly config: ConfigService) {}

  downloadFileS3() {
    const s3 = new AWS.S3({
      region: this.config.get('AWS_REGION'),
      credentials: {
        accessKeyId: this.config.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }
}
