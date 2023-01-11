import styled, { createGlobalStyle } from "styled-components";

// 전체 화면에 같은 여백을 주기 위한 설정
export const PageContainer = styled.div`
  padding: 8rem 5rem 5rem 5rem;
`;

// 전역으로 사용 가능한 버튼
export const UseButton = styled.button`
  width: 8rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  padding: 0.7rem;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: black;
  color: white
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
