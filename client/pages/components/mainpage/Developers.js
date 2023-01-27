import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Developers = () => {
  return (
    <MainContainer>
      <div></div>
      <FirstBox>
        <div>DEVELOPERS</div>
        <div>
          <ProfileItems>
            <Image
              src="/Img/sample.jpg"
              alt="profile_1"
              width={230}
              height={230}
            />
            <ProfileContent>
              <h1>YOUNMI SON</h1>
              <h2>#FRONTEND</h2>
            </ProfileContent>
          </ProfileItems>
          <ProfileItems>
            <Image
              src="/Img/sample.jpg"
              alt="profile_2"
              width={230}
              height={230}
            />
            <ProfileContent>
              <h1>JONGCHAN KIM</h1>
              <h2>#FRONTEND</h2>
            </ProfileContent>
          </ProfileItems>
        </div>
        <div>
          <ProfileItems>
            <Image
              src="/Img/sample.jpg"
              alt="profile_3"
              width={230}
              height={230}
            />
            <ProfileContent>
              <h1>JUYOUNG AN</h1>
              <h2>#CONTRACT</h2>
            </ProfileContent>
          </ProfileItems>
          <ProfileItems>
            <Image
              src="/Img/sample.jpg"
              alt="profile_4"
              width={230}
              height={230}
            />
            <ProfileContent>
              <h1>HAJIN CHOI</h1>
              <h2>#BACKEND</h2>
            </ProfileContent>
          </ProfileItems>
        </div>
      </FirstBox>
      <div></div>
    </MainContainer>
  );
};
// 전체 영역
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
// 제목 - 내용 그리드로 영역 나눔
const FirstBox = styled.div`
  width: inherit;
  height: inherit;
  place-items: center;
  display: grid;
  grid-template-rows: 0.8fr 2fr 2fr 0.2fr;
  // 제목
  > div:first-child {
    font-size: 4rem;
    font-weight: 900;
    @media ${(props) => props.theme.device.mobile} {
      font-size: 3.2rem;
      margin-top: 2rem;
    }
  }
  // 내용
  > div:nth-child(2),
  div:nth-child(3) {
    ${(props) => props.theme.align.flexCenter};
    @media ${(props) => props.theme.device.tablet} {
      flex-direction: row;
    }
  }
`;
// 사진-설명 묶은 영역
const ProfileItems = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 22rem;
  margin: 0 1rem;
  @media ${(props) => props.theme.device.pc} {
    width: 20rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 18rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 12rem;
    margin: 0;
  }
  // 사진
  > img {
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    transform-origin: center;
    @media ${(props) => props.theme.device.tablet} {
      width: 13rem;
      height: 13rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      width: 10rem;
      height: 10rem;
    }
  }
  > img:hover {
    transform: rotateY(180deg);
  }
`;
// 이름, 설명 있는 부분
const ProfileContent = styled.div`
  text-align: center;
  font-size: 0.9rem;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 0.9rem;
    margin: 0.5rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 0.7rem;
    margin: 0.5rem;
  }
`;
const SecondRow = styled.div``;
export default Developers;
