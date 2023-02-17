import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";
import Nav from "./components/Nav";
import PropTypes from "prop-types";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { wrapper } from "../redux/store";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { persistedReducer } from "../redux/modules";

// 메타마스크 연결하려고 사용함 설치한 @web3-react/core에서 제공하는 Web3ReactProvider를
// App root의 provider로 제공하고 web3 객체를 인스턴스화 하는 getLibrary 함수를 정의하여 props로 전달
function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

// props로 받은 Component는 서버에서 요청한 페이지
// pageProps는 getInitialProps를 통해 내려받은 props(사전 렌더링)
const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PersistGate persistor={persistor} loading={<div>loading...</div>}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Nav />
            <Component {...pageProps} />
          </Web3ReactProvider>
        </PersistGate>

      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
