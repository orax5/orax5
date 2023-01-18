import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Image from "next/image";
// CSS 파일
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// 이미지
import NewJeans1stEP from "../../public/Img/NewJeans1stEP.jpg";
import NewJeansOMG from "../../public/Img/NewJeansOMG.jpg";
import rain from "../../public/Img/rain.jpg";
import SummerMagic from "../../public/Img/SummerMagic.jpg";
import Butter from "../../public/Img/Butter.jpg";
import SQUAREUP from "../../public/Img/SQUAREUP.jpg";
// import required modules

const Slide = () => {
  return (
    <SlideContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={SummerMagic}
              alt="레드벨벳써머"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>Power Up</div>
            <div>Red Velvet (레드벨벳)</div>
          </MusicAlbumBox>
        </SwiperSlide>
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={NewJeans1stEP}
              alt="뉴진스어텐션"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>Attention</div>
            <div>NewJeans</div>
          </MusicAlbumBox>
        </SwiperSlide>
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={NewJeansOMG}
              alt="뉴진스디토"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>Ditto</div>
            <div>NewJeans</div>
          </MusicAlbumBox>
        </SwiperSlide>
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={rain}
              alt="폴킴"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>비</div>
            <div>폴킴</div>
          </MusicAlbumBox>
        </SwiperSlide>
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={Butter}
              alt="BTS버터"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>Butter</div>
            <div>BTS (방탄소년단)</div>
          </MusicAlbumBox>
        </SwiperSlide>
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={SQUAREUP}
              alt="블랙핑크"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
            />
            <div>Forever Young</div>
            <div>BLACKPINK</div>
          </MusicAlbumBox>
        </SwiperSlide>
      </Swiper>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  ${(props) => props.theme.align.flexCenter};
  width: inherit;
  height: 20rem;
`;

const MusicAlbumBox = styled.div`
  width: 20rem;
  height: 250px;
  @media ${(props) => props.theme.device.pc} {
    margin-right: 0.5rem;
  }
  > :first-child {
    @media ${(props) => props.theme.device.pc} {
      width: 10rem;
      height: 10rem;
    }
  }
  > :last-child {
    color: gray;
  }
`;
export default Slide;
