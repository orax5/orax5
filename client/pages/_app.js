// 리덕스 관련 모듈
import { Provider } from "react-redux"; // {} 감싸는거 무슨 차이?
import store from "../redux/store";
// 스타일 컴포넌트 관련 모듈
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";
import Nav from "../pages/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

/* 
next.js
React, Express.js, React-Router-Dom, SSR 모아놨다고 할 수 있음  
Express.js, React-Router-Dom 도구들이 가지고 있는 기능성 개념을 내재화하고 있음. 따라서 이것저것 다운로드할 거 없이 쉽게 이용할 수 있음 
 */
/*
  npx create-next-app@latest . 현재 디렉토리에 세팅
  npm run dev 개발환경실행
  npm run build 배포 파일 생성
  npm run start 서비스 시작 
*/
/*
  시작점은 pages 폴더의 index.js파일이 홈페이지에 대한 내용이다.
  개발환경을 세팅(코드편집)을 했으면 배포를 진행하는데 
  npm run build 배포 파일을 생성하고 사용하려면
  npm run start 를 실행하는데 이것은 개발환경실행하는 것이 아닌 실 서버를 실행하는 것이다. next.js는 서버까지 내장되어 있는 올인원 솔루션이기 때문 
*/
/*
  우리는 애플리케이션을 만들때 꼭 따져봐야하는 것은 Route인데 url에 따라서 ui를 어떻게 응답할 것인가를 결정하는 행위이다.
*/
