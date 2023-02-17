import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AWS from 'aws-sdk';
import { PrismaService } from '../../prisma.service';
import path from 'path';


@Injectable()
export class UploadsService {
    constructor(private config: ConfigService, private readonly prisma: PrismaService){}

    // 파일 업로드하고 주소 추출
    async s3Uploadimage(file: Express.MulterS3.File){
        //file.fieldname
        if(!file){
            throw new BadRequestException('파일이 존재하지 않습니다.');
        }
        // 저장주소만 리턴
        return file.location;
    }

    // 음악파일 저장
    // AWS_S3_BUCKET_NAME_MUSIC
    async s3UploadMusic(file: Express.MulterS3.File, filename: string){
        // s3 인스턴스 생성
        const s3 = new AWS.S3({
            accessKeyId: this.config.get('AKIA3ZMYKABK4BX4VBWI'),
            secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY'),
            region: this.config.get('AWS_REGION')            
        })

        const basename = await path.basename(file.originalname);
        //key : 저장할 파일이름, Body: 파일데이터
        s3.putObject({
            Key: basename,
            Body: file,
            Bucket: this.config.get('AWS_S3_BUCKET_NAME_MUSIC'),
            ContentType: 'audio/mp3'
        })
   
    }

}
