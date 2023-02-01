import React from "react";
import styled from "styled-components";
import Slider from "./slider";
import Link from "next/Link";

const NftMarket = () => {

  return (
    <MainContainer>
      <TitleContainer>DTS <strong style={{color:"plum"}}>NFT</strong></TitleContainer>
      <Slider/>
      <div>
        <div>
          <TitleContainer2>
            <strong style={{ color: "plum" }}>Buy</strong> on Market Place
          </TitleContainer2>
        </div>
        <BtnContainer>
          <StartBtn><Link href= "/marketplace">Go Market</Link></StartBtn>
          <StartBtn><Link href= "/login">Connect Wallet</Link></StartBtn>
        </BtnContainer>
      </div>
    </MainContainer>
  );
};
// 전체 영역
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border-bottom: 1px solid white;
`;
const TitleContainer = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 80px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const TitleContainer2 = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
const StartBtn = styled.button`
  width: 20%;
  height: 5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  padding: 0.7rem;
  margin-right: 1rem;
  &:hover {
    color: black;
    background-color: white;
    transition: 0.5s;
  }
`;



export default NftMarket
