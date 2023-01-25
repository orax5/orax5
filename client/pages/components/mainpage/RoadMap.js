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
          <h1>2023/1분기</h1>
          <p>'Dive To Space' 사이트 오픈</p>
          <p>굿즈샵 오픈</p>
        </div>
        <div></div>
        <div>
          <h1>2023/2분기</h1>
          <p>nft홀더 화이트리스트 혜택 확대</p>
        </div>
        <div>
          <h1>2023/3분기</h1>
          <p>글로벌 아티스트와 협업</p>
          <p>스트리밍 사이트 점유율 확대</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <h1>2023/4분기</h1>
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
  border-bottom: 1px solid white;
`;
// 페이지 타이틀
const PageTitle = styled.div`
  margin-top: 1rem;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
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
    background: no-repeat center/70% url("/main/path.png");
    font-size: 1rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    background: no-repeat center/100% url("/main/path.png");
    font-size: 0.7rem;
  }
  > div:nth-child(4) {
    padding-top: 15rem;
  }
`;

export default RoadMap;
