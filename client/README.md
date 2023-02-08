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

npm run start:dev
<br> > 이걸로 실행해야 .env에서 변수 호출할수있음
