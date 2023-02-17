import { ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import path from 'path';


export const multerOptionsFactory = (
    config: ConfigService,
): MulterOptions =>{
    //s3 인스턴스 생성
    const s3 = new S3Client({
        region: config.get('AWS_REGION'),
        credentials:{
            accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
        },
    });

    return{
        storage: multerS3({
            s3,
            bucket: config.get('AWS_S3_BUCKET_NAME'),
            key(_req, file, done){
                const ext = path.extname(file.originalname); // 파일의 확장자 추출
                const basename = path.basename(file.originalname, ext) // 파일이름
                // 파일이름이 중복이 되는것을 방지하기 위해 파일이름_날짜.확장자 형식으로 설정
                //done(null, `${basename}_${Date.now()}${ext}`);
                // DB에 저장된 해당 펀딩의 ID받아와서 파일이름_날짜.확장자_shin_no 붙여주기
                done(null, `${basename}`);
            },
        }),
        limits: {fileSize: 10* 1024 * 1024}, // 최대 10MB까지 저장
    
    };
};