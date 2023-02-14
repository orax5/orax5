/*
    토큰 사용하기
    -----------------------------------------------------------------
        npm install --save-dev @types/passport-local
        
        npm install --save @nestjs/passport passport passport-local
    -----------------------------------------------------------------

    JWT 조작에 도움이 되는 유틸리티 패키지
    -----------------------------------------------------------------
         npm install --save @nestjs/jwt passport-jwt
         npm install --save-dev @types/passport-jwt
    -----------------------------------------------------------------


    ///////////////////////////////////
    nest PAssport 이용해서 로그인인증 강화

    1. passport-custom 설치
    ----------------------------------------------------
        # npm을 사용하는 경우
        npm install passport-custom
        
        # yarn을 사용하는 경우
        yarn add passport-custom
    ----------------------------------------------------


    2. jsonwebtoken 설치
    ----------------------------------------------------
            # npm을 사용하는 경우
        npm install jsonwebtoken
        npm install --save @types/jsonwebtoken

        # yarn을 사용하는 경우
        yarn add jsonwebtoken
        yarn add --dev @types/jsonwebtoken
    ----------------------------------------------------



    비크립트 설치

    ----------------------------------------------------
        npm install @types/bcrypt bcrypt

        yarn add bcrypt
        yarn add @types/bcrypt -D
    ----------------------------------------------------


    ----------------------------------------------------
        npm i --save @nestjs/jwt
    ----------------------------------------------------

 
*/


/*
    PASSPORT 사용하는 이유
    
    원래 토큰을 쏴준다음 받아서 어디에 저장할지 일일히 저장해줘야했는데
    passport는 어느정도 자동화 해줌, 토큰을 어디에 저장할지(쿠키에 저장할지 세션에 저장할지 db에 저장할지 등등)
    passport로 넘겨받을 데이터 형태도 컨트롤할 수 있음 
    유저가 로그인 가능한 상태인지 확인
    데이터가 정상적으로 넘어왔는지 확인도하고, 토큰도 쏴줌
    물론 로직은 내가 써야함

*/