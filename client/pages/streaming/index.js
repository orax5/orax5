import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/Link";
import Player from "../components/Player";
import Slide from "../components/Slide";

const index = () => {
  // 투데이, 보관함 이동하려고 사용
  const [isSelectContent, setSelectContent] = useState(true);
  // 보관함 안에 좋아요한 노래, 아티스트, 펀딩 상태값 문자열로 저장하고 일치하면 일치하는 값 뛰울거 처음 좋아요 효시 띄울려고 초기값 Like만 넣어둠
  const [like, setLike] = useState("Like");
  const [artist, setArtist] = useState("");
  const [funding, setFunding] = useState("");
  // 좋아요 누르면 하트 색 차게 만들려고 하는 state
  const [fillLike, setFillLike] = useState(false);

  // 투데이 or 보관함 content 볼려는 useState값 함수에 하나의 내용만 담으려고 하나씩 만듬
  const todayHandler = () => {
    setSelectContent(true);
  };
  const lockerHandler = () => {
    setSelectContent(false);
  };
  // 보관함 안 카테고리 이동 핸들러
  const likeMusicHandler = () => {
    setLike("Like");
    setArtist("");
    setFunding("");
  };
  const artistHandler = () => {
    setArtist("Artist");
    setLike("");
    setFunding("");
  };
  const fundingHandler = () => {
    setFunding("Funding");
    setLike("");
    setArtist("");
  };

  return (
    <MainContainer>
      <div></div>
      <div>
        <Allrange>
          <TodayContentBox>
            {isSelectContent == true ? (
              <ItemBoxWrap>
                <SelectContent>
                  {isSelectContent == true ? (
                    <>
                      <TitleNav>
                        <div style={{ display: "flex" }}>
                          <div
                            onClick={todayHandler}
                            style={{ color: "plum", marginRight: "1rem" }}
                          >
                            투데이
                          </div>
                          <div onClick={lockerHandler}>보관함</div>
                        </div>
                        <HoverRed>
                          <Link href="/streaming/buyticket">이용권구매</Link>
                        </HoverRed>
                      </TitleNav>
                    </>
                  ) : (
                    <>
                      <div onClick={todayHandler}>투데이</div>
                      <div onClick={lockerHandler} style={{ color: "plum" }}>
                        보관함
                      </div>
                    </>
                  )}
                </SelectContent>
                <ItemBox>
                  <TitleContainer>
                    <div>최근 들은 노래</div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <Slide />
                  <TitleContainer>
                    <div>내 취향 플레이리스트 </div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <Slide />
                  <TitleContainer>
                    <div>DTS's 추천곡 </div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <Slide />
                </ItemBox>
              </ItemBoxWrap>
            ) : (
              <>
                <SelectContent>
                  {isSelectContent == true ? (
                    <>
                      <div onClick={todayHandler} style={{ color: "plum" }}>
                        투데이
                      </div>
                      <div onClick={lockerHandler}>보관함</div>
                    </>
                  ) : (
                    <>
                      <TitleNav>
                        <div style={{ display: "flex" }}>
                          <div
                            onClick={todayHandler}
                            style={{ marginRight: "1rem" }}
                          >
                            투데이
                          </div>
                          <div
                            onClick={lockerHandler}
                            style={{ color: "plum" }}
                          >
                            보관함
                          </div>
                        </div>
                        <HoverRed>
                          <Link href="/streaming/buyticket">이용권구매</Link>
                        </HoverRed>
                      </TitleNav>
                    </>
                  )}
                </SelectContent>
                <LockerTitleContainer>
                  {like === "Like" ? (
                    <>
                      <div onClick={likeMusicHandler} style={{ color: "plum" }}>
                        노래
                      </div>
                      <div onClick={artistHandler}>아티스트</div>
                      <div onClick={fundingHandler}>펀딩곡</div>

                      {/* 여기 또 컴포넌트 만들어서 해야함 flex먹고 있어서 블락으로 벗어나서하던가해야하지않나  */}
                      <NoneLikeMusic>
                        <div>좋아하는 노래</div>
                        <div>내가 좋아하는 노래를 모아서 감상해보세요.</div>
                      </NoneLikeMusic>
                    </>
                  ) : artist === "Artist" ? (
                    <>
                      <div onClick={likeMusicHandler}>노래</div>
                      <div onClick={artistHandler} style={{ color: "plum" }}>
                        아티스트
                      </div>
                      <div onClick={fundingHandler}>펀딩곡</div>
                    </>
                  ) : (
                    <>
                      <div onClick={likeMusicHandler}>노래</div>
                      <div onClick={artistHandler}>아티스트</div>
                      <div onClick={fundingHandler} style={{ color: "plum" }}>
                        펀딩곡
                      </div>
                    </>
                  )}
                </LockerTitleContainer>
              </>
            )}
          </TodayContentBox>
          <PlayerBox>
            <Player />
          </PlayerBox>
        </Allrange>
      </div>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 투데이, 내 보관함
const SelectContent = styled.div`
  display: flex;
  font-size: x-large;
  > :nth-child(1) {
    margin-right: 1rem;
  }
`;
const Allrange = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  @media ${(props) => props.theme.device.pc} {
    grid-template-columns: 4fr 2fr;
  }
`;
const ItemBoxWrap = styled.div``;
// 가로 행 전체
const ItemBox = styled.div`
  width: 100%;
  padding-top: 3rem;
  @media ${(props) => props.theme.device.pc} {
    padding-top: 1rem;
  }
`;
// 타이틀, 전체보기 띄어놓는 컨테이너
const TitleContainer = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
  > :first-child {
    font-size: larger;
  }
  > :last-child {
    color: gray;
  }
`;
// 투데이 내용 박스 컨테이너
const TodayContentBox = styled.div`
  width: 60rem;
  @media ${(props) => props.theme.device.pc} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;
// 플레이어 감싼 div
const PlayerBox = styled.div`
  width: 20rem;
  background: rgba(36, 36, 36, 1);
  @media ${(props) => props.theme.device.pc} {
    width: 20rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 100vw;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100vw;
  }
`;
// 보관함 내용
const LockerTitleContainer = styled.div`
  display: flex;
  > div {
    margin-top: 2rem;
    margin-right: 1rem;
  }
`;
// 좋아요한 음악이 없었을때 띄울 컴포넌트박스
const NoneLikeMusic = styled.p`
  display: block;
  margin-top: 30rem;
  margin-left: 15rem;
  text-align: center;
  > :nth-child(1) {
  }
  > :nth-child(2) {
    color: gray;
  }
`;

// title
const TitleNav = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

//
const HoverRed = styled.div`
  & a {
    margin-right: 1rem;
    :hover {
      color: plum;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

export default index;
