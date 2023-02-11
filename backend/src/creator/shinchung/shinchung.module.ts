import { Module } from "@nestjs/common";
import { CreatorShinchungController } from "./shinchung.controller";
import { CreatorShinchungService } from "./shinchung.service";
import { PrismaService } from "../../prisma.service";

@Module({
  controllers: [CreatorShinchungController],
  providers: [CreatorShinchungService, PrismaService],
})
export class ShinchungModule {}
