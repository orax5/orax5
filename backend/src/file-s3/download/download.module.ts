import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';
import { DownloadController } from './download.controller';

@Module({
  controllers: [DownloadController],
  providers: [DownloadService],
<<<<<<< HEAD:backend/src/file-s3/download/download.module.ts
=======
  controllers: [DownloadController],
>>>>>>> main:backend/src/download/download.module.ts
})
export class DownloadModule {}
