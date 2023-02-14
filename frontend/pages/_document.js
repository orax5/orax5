/* 
  _app.js 실행 후 실행된다
  페이지에 공통적으로 활용할 태그 내용들을 커스텀 할 수 있고 
  HTML body에 들어갈 내용을 구조화한다(마크업)
  _app.js와 _document.js 두 파일 모두 서버에서만 사용되는 파일이기 때문에 
  window, document같은 클라이언트에서 사용하는 로직을 사용하면 안된다
*/
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

// Document 클래스를 상속받는 클래스 컴포넌트로 작성해야만 한다
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // ServerStyleSheet을 이용해 sheet 인스턴스 생성
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    {
      /* 지정한 컴포넌트의 스타일 요소를 검색하고 <style />태그로 추출 */
    }
    try {
      // 리액트 랜더링 로직을 동기적으로 실행한다
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      // 부모 initialProps를 실행한다, 
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
