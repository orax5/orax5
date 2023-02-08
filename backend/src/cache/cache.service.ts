import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import {Cache } from 'cache-manager'

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache){}

    // 캐시에서 항목을 검색할때 사용
    async get(key: string): Promise<any>{
       return await this.cache.get(key);
    }

    // 캐시에 항목을 추가 option: TTL(만료시간을 수동으로 지정할 수 있다.)
    async set(key: string, value: any, option?: any){
        await this.cache.set(key, value, option);
    }

    // 전체 캐시를 지우려면
    async reset(){
        await this.cache.reset();
    }

    // 캐시에서 항목제거
    async delete(key: string){
        await this.cache.del(key);
    }
}
