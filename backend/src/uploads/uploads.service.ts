import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import 'dotenv/config';
import * as uuid from 'uuid';
import { PrismaService } from '../prisma.service';

// 리전은 엑세스키가 있다면 알아서 해준다고한다!
// 리전 설정부분
// AWS.config.update({
//     region: process.env.AWS_REGION
// })

@Injectable()
export class UploadsService {
    s3 = new AWS.S3();

    constructor(private config: ConfigService,){}
//  private readonly prisma: PrismaService
    async s3Upload(file: Express.Multer.File){
        try {
            const response = await this.s3.upload({
                Bucket: this.config.get('AWS_S3_BUCKET_NAME'),
                Key: uuid.v1()+ '_' + file.originalname,
                Body: file.buffer,
            }).promise();
            return response;
        } catch (error) {
            throw new Error('AWS S3 파일업로드 실패')
        }
    }


    // 업로드한 파일 url db저장함수
    // private loadMusicPath(){
    //     return this.prisma.musicFile.create({
    //         data: 
    //     })
    // }
    // // 임시로 uuid 토큰 발급
    // const signupVerifyToken = uuid.v1();
}
