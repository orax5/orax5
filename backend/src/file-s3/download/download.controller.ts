import { Controller, Get, Header, Param } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('downloadS3')
export class DownloadController {
    constructor(private readonly downService: DownloadService){}

    @Header(
        'Content-Diposition',
        'attachment; filename=s3_download_test.txt',
    )
    @Get('/:id')
    downloadFileS3(@Param('id') musictitle: string){
        return this.downService.downloadFileS3(musictitle);
    }
}
