/*
  서버에서 요청이 들어왔을 때 가장 먼저 실행된다. 
  페이지에 공통으로 적용되는 속성을 관리하고, HTML의 body를 구성한다
*/
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";
import Nav from "./components/Nav";
// 메타마스크 연결하려고 사용함 설치한 @web3-react/core에서 제공하는 Web3ReactProvider를 App root의 provider로 제공하고 web3 객체를 인스턴스화 하는 getLibrary 함수를 정의하여 props로 전달.
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}




// props로 받은 Component는 서버에서 요청한 페이지
// pageProps는 getInitialProps를 통해 내려받은 props(사전 렌더링)
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  );
}
