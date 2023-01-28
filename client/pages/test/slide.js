import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Slider() {
  // 더미데이터
  const images = [
    { id: 1, src: "/Img/NewJeans1stEP.jpg" },
    { id: 2, src: "/Img/SQUAREUP.jpg" },
    { id: 3, src: "/Img/NewJeansOMG.jpg" },
    { id: 4, src: "/Img/SummerMagic.jpg" },
    { id: 5, src: "/Img/Butter.jpg" },
  ];
  const SLIDE_NUM = 5;

  // 현재 슬라이드 번호
  // 복사된 배열에서 첫번째 슬라이드를 보려면 1을 초기값으로 줘야한다
  const [currentSlide, setCurrentSlide] = useState(1);

  // transform이 발생하는 DOM 요소
  const slideRef = useRef(null);

  const lastSlide = images[images.length - 1];
  const firstSlide = images[0];
  const copied = [lastSlide, ...images, firstSlide];

  useEffect(() => {
    const slideidx = setTimeout(
      () =>
        setCurrentSlide(() => {
          if (currentSlide < copied.length) {
            // 마지막 슬라이드 전까지는 index 1씩 증가
            slideRef.current.style.transition = "all 1s ease-in-out";
            return setCurrentSlide(currentSlide + 1);
          } else {
            // 마지막 이미지 도달 시 맨 처음으로 돌아감
            return setCurrentSlide(0);
          }
        }),
      1000
    );
    moveBack(currentSlide);
    return () => clearTimeout(slideidx);
  }, [currentSlide]);

  const moveBack = (currentSlide) => {
    // 복제된 첫번째 이미지가 보여질 때 transition 효과를 없앤다
    if (currentSlide == copied.length) {
      slideRef.current.style.transition = "";
      setCurrentSlide(1);
      setTimeout(() => {
        slideRef.current.style.transition = "all 1s ease-in-out";
      }, 0);
    }
  };

  // } else {
  //   slideRef.current.style.transition = "all 1s ease-in-out";
  //   slideRef.current.style.transform = `translateX(-${150 * currentSlide}px)`;
  // }
  return (
    <MainContainer>
      <SlideContainer>
        <SlideRow
          ref={slideRef}
          style={{
            // 슬라이드 이미지 개수만큼의 넒이
            width: `${100 * SLIDE_NUM}vw`,
            transform: `translateX(-${(150 / copied.length) * currentSlide}%)`,
            transition: "all 1s ease-in-out",
          }}
        >
          {copied.map((image, idx) => (
            <SlideBox key={idx}>
              <Image src={image.src} alt="slide_img" width={150} height={150} />
            </SlideBox>
          ))}
        </SlideRow>
      </SlideContainer>
    </MainContainer>
  );
}
// 전체 컨테이너 flex 정렬 해줌
const MainContainer = styled.div`
  ${(props) => props.theme.align.flexCenter}
`;
// 슬라이드 전체를 감싸는 div 넘어가면 안보이도록 처리
const SlideContainer = styled.div`
  width: 100vw;
  overflow: hidden;
`;
// setTimeOut에 맞춰서 움직이는 div
const SlideRow = styled.div`
  float: left;
  overflow: hidden;
  transition: all 1s ease-in-out;
`;
const SlideBox = styled.div`
  position: relative;
  float: left;
  height: auto;
`;
