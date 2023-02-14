import { Module } from '@nestjs/common';
import { CreatorLoginController } from './login.controller';

import { PrismaService } from '../../prisma.service';
import { CreatorLoginService } from './login.service';

@Module({
  imports: [],
  controllers: [CreatorLoginController],
  providers: [CreatorLoginService, PrismaService],
})
export class CreatorLoginModule {}
