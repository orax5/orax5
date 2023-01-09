// 리덕스 관련 모듈
import { Provider } from "react-redux"; // {} 감싸는거 무슨 차이?
import store from "../redux/store";
// 스타일 컴포넌트 관련 모듈
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
