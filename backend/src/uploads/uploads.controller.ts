import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Expr } from "aws-sdk/clients/cloudsearchdomain";
import { UploadsService } from './uploads.service';

@Controller('upload')
export class UploadsController {
    constructor(){}
//private readonly awsService: UploadsService
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        console.log(file);
    }

    // @Post('/s3')
    // @UseInterceptors(FileInterceptor('file'))
    // async s3Upload(@UploadedFile() file:Express.Multer.File){
    //     await this.awsService.s3Upload(file);
    //     return 'Succes';
    // }



}