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
  // 스크롤바 안보이게 설정
::-webkit-scrollbar {
  display: none;
}

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
// input 태그 안의 달력 아이콘 커스텀
input[type="date"]::-webkit-calendar-picker-indicator {
	color: rgba(0, 0, 0, 0);
	opacity: 1;
	display: block;
	background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png)
		center/80% no-repeat white; // 여기서 중앙정렬과 배경색을 준다.
	width: 20px;
	height: 20px;
	border-width: thin;
	cursor: pointer;
  margin-right: 1rem;
}
// react-h5-audio-player 설정
// 현재 재생곡 제목 - 가수
.rhap_header{
  width: 450px;
  height: auto;
  overflow-x: hidden;
  animation: infiniteText 8s linear infinite;
  text-align: center;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
@keyframes infiniteText {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
// 두 섹션 세로 가운데 정렬
.rhap_progress-section, .rhap_controls-section{
  ${(props) => props.theme.align.flexCenter};
}
// bar 크기를 정하는 컨테이너
.rhap_progress-container{
  width: 70%;
}
// 재생시간 나타내는 글씨 크기
.rhap_time ,.rhap_current-time, .rhap_total-time{
  font-size: 0.8rem;
}
// bar를 감싸고 있는 테두리
.rhap_progress-bar {
  border: 1px solid white;
  border-radius: 1rem;
  height: 0.5rem;
  margin: 0.3rem;
}
// 채워지는 바
.rhap_progress-filled{
  background-color: white;
  height:0.5rem;
}
.rhap_controls-section{
  margin: 0.5rem 0;
}
// 버튼 사이즈
svg {
  width: 1.5rem;
  height: 1.5rem;
}
`;
