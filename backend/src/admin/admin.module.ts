import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';
import { AddmusicModule } from './addmusic/addmusic.module';

@Module({
  imports: [MypageModule, AddmusicModule],
  controllers: [],
  providers: [],
})
export class AdminModule {}
