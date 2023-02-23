import React from "react";
import styled from "styled-components";

const RoadMap = () => {
  return (
    <MainContainer>
      <div></div>
      <PageTitle>ROAD MAP</PageTitle>
      <div></div>
      <div></div>
      <MapContainer>
        <div>
          <h2>2023/1분기</h2>
          <p>
            'Dive To Space' <br />
            서비스 오픈
          </p>
          <p>굿즈샵 오픈</p>
        </div>
        <div></div>
        <div>
          <h2>2023/2분기</h2>
          <p>자체 토큰 발행</p>
          <p>
            nft홀더에게
            <br /> 화이트리스트 혜택 확대
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <h2>2023/3분기</h2>
          <p>글로벌 아티스트와 협업</p>
          <p></p>
        </div>
        <div></div>
        <div>
          <h2>2023/4분기</h2>
          <p>스트리밍 사이트 점유율 20% 달성</p>
          <p>펀딩곡으로 연말 콘서트 개최</p>
        </div>
      </MapContainer>
      <div></div>
    </MainContainer>
  );
};
// 전체 영역
const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 8fr;
`;
// 페이지 타이틀
const PageTitle = styled.div`
  margin-top: 1rem;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    font-size: 3rem;
  }
`;
// 로드맵 내용 부분
const MapContainer = styled.div`
  background: no-repeat center/47% url("/main/path.png");
  width: 80vw;
  height: 90vh;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-size: 1.3rem;
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 2fr 1fr 2fr;
    background: no-repeat center/70% url("/main/path.png");
    font-size: 1rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    background: no-repeat center/100% url("/main/path.png");
    font-size: 1rem;
  }
  > div {
    width: auto;
  }
`;

export default RoadMap;
