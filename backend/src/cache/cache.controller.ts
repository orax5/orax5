import { CACHE_MANAGER, Controller, Inject, Get } from '@nestjs/common';
import { Cache } from 'cache-manager'

@Controller('/cache')
export class CacheController {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}

    // 캐시 테스트 코드
    @Get()
    async getCache(): Promise<any>{
        const savedTime = await this.cacheManager.get('time')
        if(savedTime){
            return " saved Time : " + savedTime
        }
        const now = new Date().getTime()
        await this.cacheManager.set('time', now);
        return "save ne time : " + now
    }
}
