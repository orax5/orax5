import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./SideMenu";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { injected } from "../../lib/connectors";

const Nav = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!ShowMenu);
  };
  // 메타마스크 연결 부분
  const { account, activate, deactivate } = useWeb3React();

  // 지갑 연결
  const onClickActivateHandler = () => {
    activate(injected, async (error) => {
      // 에러 처리 코드 생략
    });
  };
  // 연결 해제
  const onClickDeactivateHandler = () => {
    deactivate();
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
        {account != null ? (
          <AddressBox>{account}</AddressBox>
        ) : (
          <AddressBox onClick={onClickActivateHandler}>지갑 연결</AddressBox>
        )}
      </NavElement>
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
    grid-template-columns: 1fr 3fr 1fr 1fr;
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 2fr 1fr 1fr;
  }
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
  }
`;
const NavElement = styled.div``;
// 지갑 주소 감싼 div
const AddressBox = styled.span`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 12rem;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${(props) => props.theme.device.mobile} {
    width: 8rem;
  }
  > :hover {
    color: plum;
  }
`;
export default Nav;
