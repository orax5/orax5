import { createGlobalStyle } from "styled-components";

// reset.css 설정 적용
export const GlobalStyle = createGlobalStyle`
// 폰트
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
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
  font-family: 'S-CoreDream-3Light';
  text-decoration: none; 
  max-width: 100vw;
  -ms-overflow-style: none;
  overflow-x: hidden;
}
  /* // 스크롤바 안보이게 설정
::-webkit-scrollbar {
  display: none;
} */

// 영역에 배경색 설정되는거 방지
Image, img, div, span, p, h1, h2, h3, table, thead, tbody, tr, th,td, svg, strong, a, Link {
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
  border: 1px solid white;
  box-shadow: none;
  font-size: 1.2rem;
}
// swiper 설정
:root {
  --swiper-theme-color: plum;
}
.swiper, 
.swiper-wrapper {
  width: 55rem;
}
`;
