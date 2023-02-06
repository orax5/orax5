import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';


@Injectable()
export class UploadsService {
    constructor(private config: ConfigService){}

    // 파일 업로드하고 주소 추출
    s3Upload(file: Express.MulterS3.File){
        if(!file){
            throw new BadRequestException('파일이 존재하지 않습니다.');
        }
        return { filePath: file.location }
    }

}
