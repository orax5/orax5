import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const SideMenuAll = ({ setShowMenu, ShowMenu }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleHandler = () => {
    setShowMenu(!ShowMenu);
  };

  return (
    <MenuWrap isActivate={ShowMenu}>
      <div>
        <CloseIcon
          onClick={toggleHandler}
          style={{
            width: "50",
            height: "50",
            cursor: "pointer",
            background: "black",
            marginTop: "2rem",
          }}
        />
      </div>
      <MenuList onClick={toggleHandler}>
        {isLogin ? (
          isAdmin ? (
            <Link href="/admin">
              <li>admin</li>
            </Link>
          ) : (
            <Link href="/mypage">
              <li>MYPAGE</li>
            </Link>
          )
        ) : (
          <Link href="/login">
            <li>LOGIN/JOIN</li>
          </Link>
        )}
        {/* MYPAGE, ADMIN는 작업 끝나면 접근 권한 제한할건데 지금 페이지 이동하라고 다 꺼내놓음 */}
        <Link href="/marketplace">
          <li>MARKET PLACE</li>
        </Link>
        <Link href="/streaming">
          <li>STREAMING</li>
        </Link>
        <Link href="/funding">
          <li>FUNDING</li>
        </Link>
      </MenuList>
    </MenuWrap>
  );
};

const MenuWrap = styled.div`
  // 사이드 메뉴 전체 사이즈
  ${(props) => props.theme.gridLayout.sideMenuGrid}
  transition: all 0.25s ease-in-out;
  transform: ${(props) =>
    props.isActivate ? "translateX(0px)" : "translateX(800px)"};
  width: 40rem;
  height: 100vh;
  z-index: 200;
  color: black;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  // 반응형 사이즈 설정
  @media ${(props) => props.theme.device.pc} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    width: 100vw;
  }
`;
const MenuList = styled.ul`
  ${(props) => props.theme.align.flexCenterColumn}
  & li {
    font-size: 3rem;
    padding: 1rem;
    color: black;
  }
`;

export default SideMenuAll;
