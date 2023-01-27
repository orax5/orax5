import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Expr } from "aws-sdk/clients/cloudsearchdomain";
import { UploadsService } from './uploads.service';

@Controller('api')
export class UploadsController {
    constructor(private readonly awsService: UploadsService){}

    @Post('/s3')
    @UseInterceptors(FileInterceptor('file'))
    async s3Upload(@UploadedFile() file:Express.Multer.File){
        await this.awsService.s3Upload(file);
        return 'Succes';
    }


    // @Post('')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file) {
    //     console.log(file);
    // }
}