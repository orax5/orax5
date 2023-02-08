import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';
import { AddmusicModule } from './addmusic/addmusic.module';
import { RedisCacheModule } from '../cache/cache.module';

@Module({
    imports: [MypageModule, AddmusicModule, RedisCacheModule],
    controllers: [],
    providers: []
})
export class AdminModule {}
