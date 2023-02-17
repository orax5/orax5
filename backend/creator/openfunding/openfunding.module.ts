import { Module } from '@nestjs/common';
import { OpenfundingController } from './openfunding.controller';
import { OpenfundingService } from './openfunding.service';
import { PrismaService } from '../../prisma.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthModule } from '../../auth/auth.module';


@Module({
    imports: [HttpModule, AuthModule
    ],
    controllers: [OpenfundingController],
    providers: [OpenfundingService, PrismaService]

})
export class OpenfundingModule {}
