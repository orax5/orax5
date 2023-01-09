import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../public/Img/logoDTP.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <a href="/">
          <Image src={logo} alt="로고이미지" width={100} height={100} />
        </a>
      </div>
      <div>
        <MenuContainer>
          <div>
            <a href="/marketplace">NFT</a>
          </div>
          <div>
            <a href="/governance">GOVERNANACE</a>
          </div>
          <div>
            <a href="/streaming">STREAMING</a>
          </div>
          <div>
            <a href="/funding">FUNDING</a>
          </div>
        </MenuContainer>
      </div>
      <div>
        <a href="/mypage">
          <AccountCircleIcon
            style={{ color: "white", width: "80", height: "80" }}
          ></AccountCircleIcon>
        </a>
      </div>
    </NavContainer>
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
  z-index: 999;
  padding : 2rem 1rem 0rem 2rem;
`;

const MenuContainer = styled.div`
  ${(props) => props.theme.align.flexCenter}
  > div {
    margin: 2rem;
    font-size: xx-large;
    color: white;
  }
`;

export default Nav;
