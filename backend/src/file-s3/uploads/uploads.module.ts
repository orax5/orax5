import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { UploadsController } from "./uploads.controller";
import { UploadsService } from "./uploads.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { multerOptionsFactory } from "./multerOptionsFactory";
import { PrismaService } from "../../prisma.service";

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: multerOptionsFactory,
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsService, PrismaService],
})
export class UploadsModule {}
