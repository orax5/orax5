import { Module } from '@nestjs/common';
import { CreatorShinchungController } from './shinchung.controller';
import { CreatorShinchungService } from './shinchung.service';
import { PrismaService } from '../../prisma.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
    imports:[AuthModule],
    controllers: [CreatorShinchungController],
    providers: [CreatorShinchungService, PrismaService],
})
export class ShinchungModule {}
