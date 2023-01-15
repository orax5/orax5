import { createGlobalStyle } from "styled-components";

// reset.css 설정 적용
export const GlobalStyle = createGlobalStyle`
// 폰트
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

// 색상, 여백 설정
*, html, body, div {
	background-color: black; 
  color: white;
  margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular';
  text-decoration: none; 
  max-width: 100vw;
  -ms-overflow-style: none;
}
  // 스크롤바 안보이게 설정
::-webkit-scrollbar {
  display: none;
}

// 영역에 배경색 설정되는거 방지
Image, img, div, span, p, h1, table, thead, tbody, tr, th,td, svg, strong, a, Link {
  background-color: transparent;
}
ul,li {
  background-color: transparent;
	list-style: none;
}
table {
  background-color: transparent;
	border-collapse: collapse;
	border-spacing: 0;
}
button {  
  background-color: transparent;
  cursor: pointer;
}
input, select, textarea{
  background-color: transparent;
  box-shadow: none;
}
`;
