import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./SideMenu";

const Nav = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!ShowMenu);
  };
  
  return (
    <NavContainer>
      <NavElement>
        <Link href="/">
          <Image src={logo} alt="로고이미지" width={120} height={65} />
        </Link>
      </NavElement>
      <NavElement></NavElement>
      <NavElement>
        <MenuIcon
          style={{
            background: "transparent",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            zIndex: "222",
          }}
          onClick={showMenuHandler}
        />
        <SideMenu setShowMenu={setShowMenu} ShowMenu={ShowMenu} />
      </NavElement>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  ${(props) => props.theme.gridLayout.navGrid};
  background-color: transparent;
  @media ${(props) => props.theme.device.pc} {
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: 1fr 0.5fr 0.5fr;
  }
`;
const NavElement = styled.div``;

export default Nav;
