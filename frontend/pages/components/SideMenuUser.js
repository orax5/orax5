import Link from "next/Link";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/modules/user";
import Cookies from "js-cookie";

const SideMenuUser = ({ setShowMenu, ShowMenu }) => {
  const toggleHandler = () => {
    setShowMenu(!ShowMenu);
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const logOut = () => {
    Cookies.remove("jwtToken");
    dispatch(logout());
    router.reload();
    alert("로그아웃 되었습니다");
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
        <a href="/">
          <li onClick={logOut}>LOGOUT</li>
        </a>
        <Link href="/mypage">
          <li>MYPAGE</li>
        </Link>
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
      </MenuList>
    </MenuWrap>
  );
};

const MenuWrap = styled.div`
  // 사이드 메뉴 전체 사이즈
  ${(props) => props.theme.gridLayout.sideMenuGrid}
  transition: all 0.25s ease-in-out;
  transform: ${(props) => (props.isActivate ? "translateX(0px)" : "translateX(800px)")};
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
  @media ${(props) => props.theme.device.tablet}, ${(props) => props.theme.device.mobile} {
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

export default SideMenuUser;
