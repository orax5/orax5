/*
    슬라이드 만들기, 슬라이드 나중에 할래... 토할것같아
    화면에 최대 슬라이드 몇개 보여줄지    => 5개 
    3초에 한번씩 자동으로 슬라이드 되도록 
    왼쪽으로 정해진 너비만큼 움직여야됨
*/
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Slide = () => {
  const images = [
    { id: 1, src: "/Img/dummy/1.jpg" },
    { id: 2, src: "/Img/dummy/5.jpg" },
    { id: 3, src: "/Img/dummy/8.jpg" },
    // { id: 4, src: "/Img/dummy/9.jpg" },
  ];
  const [imgIdx, setImgIdx] = useState(0);
  const slideRef = useRef();

  const lastSlide = images[images.length - 1];
  const firstSlide = images[0];
  const copied = [lastSlide, ...images, firstSlide];

  useEffect(() => {
    const slideidx = setTimeout(
      () =>
        setImgIdx(() => {
          if (imgIdx < copied.length - 1) {
            return setImgIdx(imgIdx + 1);
          } else {
            return setImgIdx(1);
          }
        }),
      2000
    );
    return () => clearTimeout(slideidx);
  }, [imgIdx]);

  const moveNext = () => {};
  const movePrev = () => {};

  return (
    <MainContainer>
      <Btn onClick={movePrev}>◀</Btn>
      <SlideContainer>
        <SlideRow
          slideRef={slideRef}
          style={{
            transform: `translateX(-${300 * imgIdx}px)`,
          }}
        >
          {copied.map((image, idx) => (
            <SlideBox key={idx}>
              <Image src={image.src} alt="slide_img" width={300} height={300} />
            </SlideBox>
          ))}
        </SlideRow>
      </SlideContainer>

      <Btn onClick={moveNext}>▶</Btn>
    </MainContainer>
  );
};

// 버튼 스타일
const Btn = styled.button`
  font-size: 5rem;
`;
// 전체 컨테이너 flex 정렬 해줌
const MainContainer = styled.div`
  ${(props) => props.theme.align.flexCenter}
`;
// 슬라이드 전체를 감싸는 div 넘어가면 안보이도록 처리
const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
// setTimeOut에 맞춰서 움직이는 div
const SlideRow = styled.div`
  float: left;
  overflow: hidden;
  transition: all 1s ease-in-out;
`;
const SlideBox = styled.div`
  float: left;
  height: auto;
`;

export default Slide;
