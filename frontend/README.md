## 설치한 모듈

redux
react-redux
redux-thunk
styled-components
babel-plugin-styled-components
axios
@mui/icons-material

## 출처

메인 우주 애니메이션: https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010

## 이슈

- 오류 : Prop `className` did not match
  <br>
- 해결 : babel-plugin-styled-components : 식별자 생성 과정을 정규화해준다
  <hr>
- 오류 : (콘솔창) Please add the "priority" property if this image is above the fold.
  <br>
- 해결 : 이미지 속성에 priority={true} 추가
  <hr>
- 오류 : (콘솔창) Prop `className` did not match.
- 해결 : npm i babel-plugin-styled-component, .babelrc 파일에 "plugins": [
[
"babel-plugin-styled-components",
{
"ssr": true, // SSR을 위한 설정
"displayName": true, // 클래스명에 컴포넌트 이름을 붙임
"pure": true // dead code elimination (사용되지 않는 속성 제거)
}
]
<hr>
- 오류 : Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead.
  <br>
- 해결 :
<hr>
- 오류 : Hydration failed because the initial UI does not match what was rendered on the server.
  <br>
- 해결 : https://stackoverflow.com/questions/72838090/next-js-error-hydration-failed-because-the-initial-ui-does-not-match-what-was-r
  <br>
  가장 상위에 import dynamic from "next/dynamic"; 불러온 뒤 필요한 컴포넌트는

```
const LineGraph = dynamic(() => import("../components/LineGraph"), {
    ssr: false,
  });
```

이런식으로 함수 안에서 불러온다

- dhfb : Can't resolve 'fs'
- 원인 : fs 모듈은 nodejs의 기본 파일 시스템 모듈, 클라이언트 측에서 nodejs 라이브러리를 사용하려고 할 때 발생
- 해결 : 
## next.js

React, Express.js, React-Router-Dom, SSR 모아놨다고 할 수 있음  
Express.js, React-Router-Dom 도구들이 가지고 있는 기능성 개념을 내재화하고 있음. 따라서 이것저것 다운로드할 거 없이 쉽게 이용할 수 있음
<br>
npx create-next-app@latest . 현재 디렉토리에 세팅
npm run dev 개발환경실행
npm run build 배포 파일 생성
npm run start 서비스 시작
<br>
시작점은 pages 폴더의 index.js파일이 홈페이지에 대한 내용이다.
개발환경을 세팅(코드편집)을 했으면 배포를 진행하는데
npm run build 배포 파일을 생성하고 사용하려면
npm run start 를 실행하는데 이것은 개발환경실행하는 것이 아닌 실 서버를 실행하는 것이다. next.js는 서버까지 내장되어 있는 올인원 솔루션이기 때문
<br>
우리는 애플리케이션을 만들때 꼭 따져봐야하는 것은 Route인데 url에 따라서 ui를 어떻게 응답할 것인가를 결정하는 행위이다.

## 컨트랙트 연결

리믹스-로컬호스트 연결 : remixd -s . --remix-ide https://remix.ethereum.org12
<br>
가나쉬 npx ganache-cli --chainId 7722 --networkId 7722
<br>

## FE/BE실행 명령어

### 프론트

npm run dev

### 백

redis 설치 및 실행
https://gerger.tistory.com/143 -> 이거만 해서 성공하는게 베스트

안되면 우분투에서 돌리자

1. 우분투 키고 제일 루트 cd ~/로 이동해서 내가 설치한 곳으로 감 C:\Redis-x64-3.2.100
2. sudo su 명령어로 관리자모드(아마 계정없으면 만들으라하고 있으면 password치면됨)
3. sudo apt install redis-server -> redis설치
4. redis-server -> 잘됐다면 그림이 나옴, 그러면 한번 ctrl+c 나와서 아래 명령어 입력
5. sudo service redis-server status
   5-1. 잘되면 redis-server is running
   5-2. 안되면 redis-server is not running 이런 오류가 뜬다, 그럼 redis-server 한 번 더 입력해보기
   5-3. 나머지는 구글링
   5-4. 우분투 안되면 우분투 설치? 업데이트? apt-get update이런거 해주면 됨
   https://stackoverflow.com/questions/8754304/redis-connection-to-127-0-0-16379-failed-connect-econnrefused
   <br />
   SQL 테이블 생성
   npx prisma migrate dev
   <br />
   SQL 테이블 리셋
   npx prisma migrate reset
   <br />
   실행 명령어
   npm run start:dev
   <br />
   프리티어 설정 맞추기
   npx prettier -w src/**/**.service.ts

## ethers

```
const {
connector, // 현재 dapp에 연결된 월렛의 connector 값
library, // web3 provider 제공
chainId, // dapp에 연결된 account의 chainId
account, // dapp에 연결된 account address
active, // active: dapp 유저가 로그인 된 상태인지 체크
error,
activate, // activate: dapp 월렛 연결 기능 수행함수
deactivate, // deactivate: dapp 월렛 해제 수행함수 help
} = useWeb3React();
```
