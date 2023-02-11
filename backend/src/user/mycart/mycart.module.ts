import { Module } from "@nestjs/common";
import { UserCartController } from "./mycart.controller";
import { UserCartService } from "./mycart.service";

@Module({
  controllers: [UserCartController],
  providers: [UserCartService],
})
export class MycartModule {}
