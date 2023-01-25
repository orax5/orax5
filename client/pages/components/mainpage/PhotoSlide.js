import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainPhoto1 from "../../../public/main/1.jpg";
import MainPhoto2 from "../../../public/main/2.jpg";

const PhotoSlide = () => {
  const [ShowImage, setShowImage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 300) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <MainContainer>
      <div></div>
      <div>
        <Firstbox isActivate={ShowImage}>
          <Image
            src={MainPhoto1}
            alt={"first_image"}
            width={550}
            height={350}
          />
          <div>
            <h1>
              음원 제작 펀딩에 <br />
              참여하세요
            </h1>
            <p>
              DTS에서 펀딩에 참여해보세요
              <br />
              펀딩된 금액은 음원 제작에 사용되며
              <br />
              참여자는 해당 음원의 NFT를 소유할 수 있습니다
            </p>
          </div>
        </Firstbox>
        <Secondbox isActivate={ShowImage}>
          <Image
            src={MainPhoto2}
            alt={"second_image"}
            width={550}
            height={350}
          />
          <div>
            <h1>
              스트리밍으로 <br />
              수익을 얻으세요
            </h1>
            <p>
              기존 음원부터 펀딩한 음원까지
              <br />
              DTS에서는 다양한 음악을 스트리밍 할 수 있고
              <br />
              NFT를 소유하고 있다면 수익을 얻을 수도 있어요
            </p>
          </div>
        </Secondbox>
      </div>

      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100vw;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 첫번재 슬라이드 박스
const Firstbox = styled.div`
  ${(props) => props.theme.align.flexBetween};
  flex-direction: row-reverse;
  width: 80rem;
  height: auto;
  margin: 5rem 0;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.isActivate ? "translateX(0px)" : "translateX(-2000px)"};
  // 반응형에서는 세로 정렬함
  @media ${(props) => props.theme.device.pc},
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
  > img {
    @media ${(props) => props.theme.device.mobile} {
      width: 350px;
      height: 280px;
    }
  }
  > div {
    padding: 1rem;
  }
  & h1 {
    margin: 2rem 0;
  }
`;
// 첫번재 슬라이드 박스
const Secondbox = styled.div`
  ${(props) => props.theme.align.flexBetween};
  width: 80rem;
  height: auto;
  margin: 5rem 0;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.isActivate ? "translateX(0px)" : "translateX(2000px)"};

  @media ${(props) => props.theme.device.pc},
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
  > div {
    text-align: end;
    padding: 1rem;
  }
  > img {
    @media ${(props) => props.theme.device.mobile} {
      width: 350px;
      height: 280px;
    }
  }
  & h1 {
    margin: 2rem 0;
  }
`;
// const div = styled.div`
//   ${(props) => props.theme.align.flexStart};

//   > :nth-child(2) {
//     font-size: 1.5rem;
//   }
// `;
export default PhotoSlide;
