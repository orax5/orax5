import { Module, CacheModule, Global } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { CacheService } from './cache.service';

@Global()
@Module({
    imports: [ 
        CacheModule.register({
            store: redisStore,
            host: '127.0.0.1',
            port: 6379,
            isGlobal: true,
            password: process.env.REDIS_MODULE_PASSWORD
      })
    ],
    providers: [CacheService],
    exports:[CacheService],
})
export class RedisCacheModule{}