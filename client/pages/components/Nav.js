import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./SideMenu";

const Nav = () => {
  const ref = useRef();
  const [ShowMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!ShowMenu);
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
          ref={ref}
          style={{
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            marginTop: "2rem",
            position: "fixed",
            right: "2rem",
            color: "red",
            zIndex: "222",
          }}
          onClick={handleShowMenu}
        />
        {ShowMenu && <SideMenu setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
      </NavContainer>
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

export default Nav;
