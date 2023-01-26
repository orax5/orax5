import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const youmTest = () => {
  const slideRef = useRef();
  // 더미데이터
  const images = [
    { id: 1, src: "/Img/dummy/1.jpg" },
    { id: 2, src: "/Img/dummy/5.jpg" },
    { id: 3, src: "/Img/dummy/8.jpg" },
    { id: 4, src: "/Img/dummy/9.jpg" },
    { id: 5, src: "/Img/dummy/10.jpg" },
  ];
  // 원래 배열의 마지막 이미지
  const lastSlide = images[images.length - 1];
  const firstSlide = images[0];
  // 배열을 복사하는데 맨 마지막 이미지에서 자연스럽게 첫번째 이미지를 볼 수 있도록 아래처럼 만들어준다
  const copied = [lastSlide, ...images, firstSlide];

  // 이미지 인덱스
  const [imgIdx, setImgIdx] = useState(1);
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
  });

  // setInterval(() => {
  //   setImgIdx((imgIdx) => imgIdx + 1);
  //   setTimeout(() => {
  //     console.log(imgIdx);
  //   }, 1000);
  // }, 1000);
  //   }, [setImgIdx]);

  return (
    <>
      <MainContainer>
        <Btn>◀</Btn>
        <SlideContainer>
          <SlideRow
            style={{
              transform: `translateX(-${200 * imgIdx}px)`,
            }}
          >
            {copied.map((image, idx) => (
              <SlideBox key={idx}>
                <Image
                  src={image.src}
                  alt="slide_img"
                  width={200}
                  height={200}
                />
              </SlideBox>
            ))}
          </SlideRow>
        </SlideContainer>

        <Btn>▶</Btn>
      </MainContainer>
    </>
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
  z-index: 1;
`;
// setTimeOut에 맞춰서 움직이는 div
const SlideRow = styled.div`
  float: left;
  overflow: hidden;
  transition: all 2s ease-in-out;
`;

const SlideBox = styled.div`
  float: left;
  height: auto;
`;
export default youmTest;
