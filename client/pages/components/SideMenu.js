import Link from "next/Link";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const SideMenu = ({ setShowMenu, ShowMenu }) => {
  const ref = useRef();

  const closeAction = () => {
    console.log(333);
    setShowMenu(ShowMenu);
  };

  return (
    <MenuWrap ref={ref} onClick={closeAction}>
      <div>
        <MenuList>
          <Link href="/marketplace">
            <li>MARKET PLACE</li>
          </Link>
          <Link href="/governance">
            <li>GOVERNANACE</li>
          </Link>
          <Link href="/streaming">
            <li>STREAMING</li>
          </Link>
          <Link href="/funding">
            <li>FUNDING</li>
          </Link>
          <Link href="/mypage">
            <li>MYPAGE</li>
          </Link>
        </MenuList>
      </div>
    </MenuWrap>
  );
};
const MenuWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn}
  /* transform :${(props) => (props.ShowMenu ? tansla : "500px")}; */
  /* transform :${(props) => (props.ShowMenu ? "0" : "500px")};
  transition: ${(props) =>
    props.ShowMenu
      ? "transform 2s ease-in-out"
      : "transform 2s ease-in-out"}; */

  > div {
    display: flex;
    justify-content: center;
    width: 40rem;
    height: 100vh;
    z-index: 200;
    background-color: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    @media ${(props) => props.theme.device.pc} {
      width: 30rem;
    }
    @media ${(props) => props.theme.device.tablet} {
      width: 100vw;
    }
    @media ${(props) => props.theme.device.mobile} {
      width: 100vw;
    }
  }
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;

  & li {
    font-size: 3rem;
    padding: 1rem;
    color: black;
    background-color: white;
  }
`;

export default SideMenu;
