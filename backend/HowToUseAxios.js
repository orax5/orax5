/*
    axios 사용하는법 

    1. 설치하기
    ====================================================
        npm i --save @nestjs/axios
    ====================================================

    2. 의존성 주입

    2-1. Modeul.ts
    -----------------------------------------------------------
    import { HttpModule } from '@nestjs/axios';
    import { Module } from '@nestjs/common';
    import { ApiController } from './api.controller';
    import { ApiService } from './api.service';

    @Module({
        imports: [HttpModule],
        controllers: [ApiController],
        providers: [ApiService]
    })
    export class ApiModule {}

    -----------------------------------------------------------

    2-2. Service.ts
    -----------------------------------------------------------
    import { HttpService } from '@nestjs/axios/dist';
    import { Injectable } from '@nestjs/common';

    @Injectable()
    export class ApiService {
        constructor(private http: HttpService){}// 모든 HttpService 메서드 는 Observable 개체 에 래핑된 AxiosResponse 를 반환합니다.  
    }
    -----------------------------------------------------------

    위의 모듈들을 의존성 추가해야한다


    3. service.ts 예시
    -----------------------------------------------------------
        async getCatFacts() {
            const request = this.http
                .get('https://catfact.ninja/fact')
                .pipe(map((res) => res.data?.fact))
                .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
                );

            const fact = await lastValueFrom(request);

            return {
                data: {
                fact,
                },
            };
        }   
    -----------------------------------------------------------




    어쨌든
    최상단 루트 module에서 httpmodule import한 다음에
    사용할 모듈에서
    providers: httpService를 주입해주면 될 것같다

    import { HttpService } from '@nestjs/axios';
*/
