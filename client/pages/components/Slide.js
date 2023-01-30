import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styled from "styled-components";
import Image from "next/image";
// CSS 파일
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// 이미지
import NewJeans1stEP from "../../public/Img/NewJeans1stEP.jpg";
import NewJeansOMG from "../../public/Img/NewJeansOMG.jpg";
import rain from "../../public/Img/rain.jpg";
import SummerMagic from "../../public/Img/SummerMagic.jpg";
import Butter from "../../public/Img/Butter.jpg";
import SQUAREUP from "../../public/Img/SQUAREUP.jpg";


const Slide = () => {
  return (
    <SlideContainer>
      <Swiper
        observer ={true}
        observeParents= {true}
        direction="horizontal"
        slidesPerView={3} 
        spaceBetween={50} // 간격
        slidesPerGroup={3}
        loop={true}
        scrollbar={{ draggable: true }}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <MusicAlbumBox>
            <Image
              src={SummerMagic}
              alt="레드벨벳써머"
              width={200}
              height={200}
              style={{ paddingTop: "1rem" }}
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
