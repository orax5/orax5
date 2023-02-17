import { Injectable, Param, Post } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DeleteService {
    private s3: AWS.S3
    constructor(private configService: ConfigService){
        AWS.config.update({
            accessKeyId : this.configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY')
        });
    }

    async deleteFile(s3filename: string){
      const params ={
        Bucket : this.configService.get('AWS_S3_BUCKET_NAME'),
        Key : s3filename
      };

      try{
        await this.s3.deleteObject(params).promise();
        return true
      }catch(error){
        return false;
      }
    }
}
