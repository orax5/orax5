import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';
import { RedisCacheModule } from '../cache/cache.module';

@Module({
    imports: [MypageModule, RedisCacheModule],
    controllers: [],
    providers: []
})
export class AdminModule {}
