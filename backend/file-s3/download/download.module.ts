import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';
import { DownloadController } from './download.controller';
import { CacheService } from '../../cache/cache.service';

@Module({
  controllers: [DownloadController],
  providers: [DownloadService, CacheService],
})
export class DownloadModule {}
