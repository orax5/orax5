// _document.js 파일은 _app.js 실행 후 실행된다
// 페이지에 공통적으로 활용할 태그 내용들(HTML을 마크업함)을 커스텀 할 수 있다
// ***오직 서버에서만 실행된다(cf. _app.js는 로직, 전역 스타일 등 컴포넌트에 공통적으로 사용할 데이터를 다룬다)
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // ServerStyleSheet을 이용해 sheet 인스턴스 생성
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    {
      /* 지정한 컴포넌트의 스타일 요소를 검색하고 <style />태그로 추출 */
    }
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* 추출한 결과물 document에 전달 */}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      // 서버에서 렌더링되고 소스 페이지에서도 스타일이 표시된다
      sheet.seal();
    }
  }
}
