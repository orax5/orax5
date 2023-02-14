/*
    캐시 사용하는법
   ( 따로 모듈을 만들고 app.module에 import 해주기)

    1. 필요한 모듈깔기 - in-memory 
    ----------------------------------------------------
        npm install cache-manager
        npm install -D @types/cache-manager
        npm i cache-manager-redis-store
    ----------------------------------------------------

    2. Redis 연결하기

    ----------------------------------------------------------
        npm install cache-manager-ioredis --save
        npm install -D @types/cache-manager-ioredis --save
    ----------------------------------------------------------
    참고
    https://gerger.tistory.com/143

    명령어 레디스 클라우드에서 엔드포인트 복사해오기

    rdcli -h <엔드포인트, 에서맨 뒤에 포트번호 빼고> -p 내 포트번호 -a 비밀번호
*/