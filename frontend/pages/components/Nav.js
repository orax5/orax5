import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/Img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import SideMenuAll from "./SideMenuAll";
import SideMenuUser from "./SideMenuUser";
import SideMenuAdmin from "./SideMenuAdmin";
import SideMenuCreator from "./SideMenuCreator";

import { useWeb3React } from "@web3-react/core";
import { injected } from "../../lib/connectors";

const Nav = () => {
  /* 여기는 useSelector 로 해당 grade를 받아와서 해당 값이 == 일치하면 true가 되니 그거게 맞는 SideMenu~~를 조건부로 출력하면 됨. */
  const visitor = useSelector((state) => state.user.users.user_grade);
  const user = useSelector((state) => state.user.users.user_grade);
  const creator = useSelector((state) => state.user.users.user_grade);
  const admin = useSelector((state) => state.user.users.user_grade);

  const [ShowMenu, setShowMenu] = useState(false);
  const [clipAccount, setClipAccount] = useState(false);

  const copyClipBoardHandler = async (text) => {
    setClipAccount(true); // 트루 값 먼저주고
    setTimeout(() => {
      setClipAccount(false);
    }, 2000); // 2초뒤에 다시 폴스
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  const showMenuHandler = () => {
    setShowMenu(!ShowMenu);
  };
  // 메타마스크 연결 부분
  const { account, activate } = useWeb3React();
  // 지갑 연결
  const onClickActivateHandler = () => {
    activate(injected, async (error) => {
      console.log(error);
    });
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
          <AddressBox onClick={()=>copyClipBoardHandler(account)}>{account}</AddressBox>
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
        {/* <SideMenu setShowMenu={setShowMenu} ShowMenu={ShowMenu} /> */}
        {visitor == 0 && <SideMenuAll setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
        {user == 1 && <SideMenuUser setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
        {creator == 2 && <SideMenuCreator setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
        {admin == 3 && <SideMenuAdmin setShowMenu={setShowMenu} ShowMenu={ShowMenu} />}
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
// modify
