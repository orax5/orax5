import React from "react";
import styled from "styled-components";
import Slide from "../Slide";
import { Swiper, SwiperSlide } from 'swiper/react';


const NftMarket = () => {

  return (
    <MainContainer>
      <TitleContainer>DTS <strong style={{color:"plum"}}>NFT</strong></TitleContainer>
      <StyledSwiper 
        slidesPerView={1}
        spaceBetween={50}
        slidesPerGroup={3}
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </StyledSwiper>
      <div>
        <div>
          <TitleContainer2>
            <strong style={{ color: "plum" }}>Buy</strong> on Market Place
          </TitleContainer2>
        </div>
        <Slide />
        <BtnContainer>
          <StartBtn>Go Market</StartBtn>
          <StartBtn>Connect Wallet</StartBtn>
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
`;
const TitleContainer2 = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 3rem;
`;
const BtnContainer = styled.div`
  margin-top: 5rem;
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

const StyledSwiper = styled(Swiper)`
  position:relative;
  width: 100%;
  height: 452px;
`

export default NftMarket
