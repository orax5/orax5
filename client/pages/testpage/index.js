import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { PageContainer } from "../../styles/global-style";
import Search from "../components/Search";
import SideMenu from "../components/SideMenu";

const Nav = () => {
  const ref = useRef();
  const [ShowMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!ShowMenu);
  };
  return (
    <PageContainer>
      <NavContainer>
        <Link href="/">
          <Image src={logo} alt="로고이미지" width={120} height={65} />
        </Link>
      </NavContainer>
      <NavContainer>
        <Search />
      </NavContainer>
      <NavContainer>
        <MenuIcon
          ref={ref}
          style={{
            background: "transparent",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            position: "fixed",
            zIndex: "200",
          }}
          onClick={handleShowMenu}
        />
        {ShowMenu && <SideMenu setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
      </NavContainer>
    </PageContainer>
  );
};

const NavContainer = styled.div`
  background-color: red;
`;

export default Nav;
