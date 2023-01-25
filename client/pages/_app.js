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
import Footer from "./components/Footer";

// props로 받은 Component는 서버에서 요청한 페이지
// pageProps는 getInitialProps를 통해 내려받은 props(사전 렌더링)
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer />
      </ThemeProvider>
    </>
  );
}
