// import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";
import Nav from "./components/Nav";
import wrapper from "../redux/store";
import PropTypes from "prop-types";
// 메타마스크 연결하려고 사용함 설치한 @web3-react/core에서 제공하는 Web3ReactProvider를
// App root의 provider로 제공하고 web3 객체를 인스턴스화 하는 getLibrary 함수를 정의하여 props로 전달
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");

  return library;
}

// props로 받은 Component는 서버에서 요청한 페이지
// pageProps는 getInitialProps를 통해 내려받은 props(사전 렌더링)
const App = ({ Component, pageProps : { session, ...pageProps } }) =>{
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Web3ReactProvider getLibrary={getLibrary}>
          <Nav />
          {/* <Provider store={store}> */}
            <Component {...pageProps} />
          {/* </Provider> */}
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);