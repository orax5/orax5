import styled, { createGlobalStyle } from "styled-components";

// 전체 화면에 같은 여백을 주기 위한 설정
export const PageContainer = styled.div`
  padding: 8rem 5rem 5rem 5rem;
`;

// reset.css 설정 적용
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video{
  // 배경 및 글자색 설정
	background-color: black;
  color: white;
  // 화면 기본 설정(여백/사이즈)
  margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none; 
  max-width: 100vw;
  -ms-overflow-style: none;
}
  // 스크롤바 안보이게 설정
::-webkit-scrollbar {
  display: none;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul,li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
  color: inherit;  
  cursor: pointer;
  background-color: inherit;

}
input, select, textarea{
  color: inherit;  
  background-color: black;
  box-shadow: none;
}
`;
