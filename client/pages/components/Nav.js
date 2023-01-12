import React,{useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/Img/logoDTP.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/Link";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };


  return (
    <NavContainer>
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="로고이미지"
            width={100}
            height={100}
            priority={true}
          />
        </Link>
      </div>
      <div>
        <MenuContainer isToggleOpen={isToggleOpen}>
          <div>
            <Link href="/marketplace">NFT</Link>
          </div>
          <div>
            <Link href="/governance">GOVERNANACE</Link>
          </div>
          <div>
            <Link href="/streaming">STREAMING</Link>
          </div>
          <div>
            <Link href="/funding">FUNDING</Link>
          </div>
        </MenuContainer>
      </div>
      <div>
        <Link href="/mypage">
          <AccountCircleIcon
            style={{ color: "white", width: "60", height: "60" }}
          ></AccountCircleIcon>
        </Link>
      </div>
      <HamMenu>
        <MenuIcon onClick={handleToggleOpen} />
      </HamMenu> 
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
  padding: 0rem 1rem 0rem 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuContainer = styled.div`
  ${(props) => props.theme.align.flexCenter}
  > div {
    margin: 2rem;
    font-size: xx-large;
    color: white;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
  }
`;

const HamMenu = styled.a`
  display: none;
  position: absolute;
  right: 1rem;
  font-size: xxx-large;
  @media screen and (max-width: 768px) {
    display: block;
  }
`




export default Nav;
