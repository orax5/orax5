import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <>
      <NavContainer>
        <Link href="/">
          <Image
            src={logo}
            alt="로고이미지"
            width={120}
            height={65}
            priority={true}
            style={{ marginTop: "2rem" }}
          />
        </Link>
        <MenuIcon
          style={{
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            marginTop: "2rem",
            color: "white",
          }}
          onClick={handleToggleOpen}
        />
      </NavContainer>
      {!isToggleOpen ? (
        ""
      ) : (
        <MenuWrap>
          <div>
            <MenuList>
              <li>
                <CloseIcon
                  style={{
                    width: "4rem",
                    height: "4rem",
                    cursor: "pointer",
                  }}
                  onClick={handleToggleOpen}
                />
              </li>
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
      )}
    </>
  );
};

const NavContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  padding: 0 4rem;
  @media ${(props) => props.theme.device.mobile} {
    padding: 0 1rem;
  }
`;
const MenuWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn}

  > div {
    // 슬라이드 애니메이션
    animation: slideOut 300ms both;
    @keyframes slideOut {
      from {
        right: -50%;
      }
      to {
        right: 0;
      }
    }
    display: flex;
    justify-content: center;
    width: 40rem;
    height: 100vh;
    z-index: 200;
    background-color: white;
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
export default Nav;
