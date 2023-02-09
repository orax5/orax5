import { Module } from '@nestjs/common';
import { UploadsModule } from './uploads/uploads.module';
import { DownloadModule } from './download/download.module';
import { DeleteModule } from './delete/delete.module';

@Module({
    imports: [UploadsModule, DownloadModule, DeleteModule],
})
export class FileS3Module {}
