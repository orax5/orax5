import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';

<<<<<<< HEAD
=======
// 리전은 엑세스키가 있다면 알아서 해준다고한다!
// 리전 설정부분
// AWS.config.update({
//     region: process.env.AWS_REGION
// })
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2

@Injectable()
export class UploadsService {
    constructor(private config: ConfigService){}

<<<<<<< HEAD
    // 파일 업로드하고 주소 추출
    s3Upload(file: Express.MulterS3.File){
        if(!file){
            throw new BadRequestException('파일이 존재하지 않습니다.');
=======
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
>>>>>>> ab1d76c77237eed433f294d227fdef86b43930f2
        }
        return { filePath: file.location }
    }

}
