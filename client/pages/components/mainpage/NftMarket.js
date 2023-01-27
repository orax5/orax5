import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NftMarket = () => {


  return (
    <MainContainer>
      <TitleContainer>
        DTS <strong style={{ color: "plum" }}>NFT</strong>
      </TitleContainer>
      <div>
        <div>
          <TitleContainer2>
            <strong style={{ color: "plum" }}>Buy</strong> on Market Place
          </TitleContainer2>
        </div>
        <div style={{ textAlign: "center" }}>
          <StartBtn>Go Market</StartBtn>
          <StartBtn>Connect Wallet</StartBtn>
        </div>
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
`;
const TitleContainer2 = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 3rem;
`;
const StartBtn = styled.button`
  width: 20%;
  height: 3rem;
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

export default NftMarket;
