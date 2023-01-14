import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";
import Nav from "./components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
