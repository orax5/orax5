import { Controller, Get } from '@nestjs/common';
import { Header } from '@nestjs/common/decorators';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
  constructor(private readonly downService: DownloadService) {}

  @Header('Content-Diposition', 'attachment; filename=s3_download_test.txt')
  @Get()
  downloadFileS3() {
    return this.downService.downloadFileS3();
  }
}
