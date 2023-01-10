import styled, { createGlobalStyle } from "styled-components";

export const PageContainer = styled.div`
  padding: 8rem 5rem 5rem 5rem;
`;

export const ListButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  padding: 0.7rem;
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
