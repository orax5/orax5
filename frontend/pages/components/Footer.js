import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <MainContainer>
      <div></div>
      <FooterBox>
        <div>
          <Link href="/">이용약관</Link>
          <Link href="/">고객센터</Link>
          <Link href="/">
            개인정보
            <br />
            처리방침
          </Link>
        </div>
        <div>
          <Link href="/">NOTION</Link>
          <Link href="/">TWITTER</Link>
          <Link href="/">INSTAGRAM</Link>
        </div>
      </FooterBox>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 30vh;
  border-top: 1px solid white;
  ${(props) => props.theme.gridLayout.mainGrid};
`;

const FooterBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  font-size: 1.3rem;
  gap: 3rem;
  > div {
    display: inherit;
    place-items: center;
  }
  & a {
    cursor: pointer;
    margin: 0.5rem;
  }
  & a:hover {
    text-decoration: underline;
  }
`;
export default Footer;
