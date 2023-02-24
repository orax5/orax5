import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import Player from "../components/player/Player";
import Slide from "../components/player/Slide";
const index = () => {
  // 투데이, 보관함 이동하려고 사용
  const [isSelectContent, setSelectContent] = useState(true);

  // 투데이 or 보관함 content 볼려는 useState값 함수에 하나의 내용만 담으려고 하나씩 만듬
  const todayHandler = () => {
    setSelectContent(true);
  };
  const lockerHandler = () => {
    setSelectContent(false);
  };
  return (
    <MainContainer>
      <div></div>
      <div>
        <Allrange>
          <PlayerBox>
            <Player />
          </PlayerBox>
          <TodayContentBox>
            {isSelectContent ? (
              <>
                <SelectContent>
                  <div>
                    <div
                      onClick={todayHandler}
                      style={{
                        color: "plum",
                      }}
                    >
                      투데이
                    </div>
                    <div onClick={lockerHandler}>마이 펀딩 뮤직</div>
                  </div>
                  <div>
                    <Link href="/streaming/buyticket">이용권구매</Link>
                  </div>
                </SelectContent>
                <ItemBox>
                  {/* '투데이'탭에서 보이는 화면 */}
                  <TitleContainer>
                    {/* 펀딩에 성공한 음악들 보여줌 */}
                    <div>펀딩된 음악</div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <SlideContainer>
                    <Slide />
                  </SlideContainer>
                  <TitleContainer>
                    {/* 재생 횟수 카운트 할 수 있으니까 카운트 순위대로 나열해서 보여주면 될 듯 */}
                    <div>자주 들은 음악</div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <SlideContainer>
                    <Slide />
                  </SlideContainer>
                  <TitleContainer>
                    {/* 랜덤으로 몇 개 보여줌 */}
                    <div>DTS's 추천곡 </div>
                    <div>전체보기</div>
                  </TitleContainer>
                  <SlideContainer>
                    <Slide />
                  </SlideContainer>
                </ItemBox>
              </>
            ) : (
              <>
                <SelectContent>
                  <div>
                    <div onClick={todayHandler}>투데이</div>
                    <div onClick={lockerHandler} style={{ color: "plum" }}>
                      마이 펀딩 뮤직
                    </div>
                  </div>
                  <div>
                    <Link href="/streaming/buyticket">이용권구매</Link>
                  </div>
                </SelectContent>
                <ItemBox>
                  <TitleContainer>
                    <div>펀딩에 참여한 음악</div>
                    <div>전체보기</div>
                  </TitleContainer>
                </ItemBox>
              </>
            )}
          </TodayContentBox>
        </Allrange>
      </div>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const Allrange = styled.div`
  display: flex;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: column;
  }
`;
// 투데이 내용 박스 컨테이너
const TodayContentBox = styled.div`
  width: 60rem;
  margin-left: 2rem;
  @media ${(props) => props.theme.device.pc} {
    width: 100vw;
    margin-right: 2rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 60rem;
    margin-left: 0rem;
    padding: 0 2rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100vw;
  }
`;
// 투데이, 마이 펀딩 뮤직 / 이용권 구매 있는 div
const SelectContent = styled.div`
  width: 100%;
  font-size: 1.5rem;
  @media ${(props) => props.theme.device.pc}, ${(props) => props.theme.device.tablet} {
    margin-top: 1rem;
    font-size: 1.3rem;
  }
  > div {
    display: flex;
  }
  ${(props) => props.theme.align.flexBetween}
  & div {
    cursor: pointer;
  }
  & div:last-child {
    margin-left: 1rem;
  }
  & a:hover {
    color: plum;
    transition: 0.5s;
    cursor: pointer;
  }
`;
// 가로 행 전체 div
const ItemBox = styled.div`
  width: 100%;
  padding-top: 3rem;
  @media ${(props) => props.theme.device.pc} {
    padding-top: 1rem;
  }
  @media ${(props) => props.theme.device.tablet}, ${(props) => props.theme.device.mobile} {
    width: 100%;
  }
`;
// 타이틀, 전체보기 있는 div
const TitleContainer = styled.div`
  width: 100%;
  font-size: 1.3rem;
  ${(props) => props.theme.align.flexBetween}

  > :last-child {
    cursor: pointer;
    color: gray;
  }
`;
const SlideContainer = styled.div`
  width: 100%;
`;
// 플레이어 감싼 div
const PlayerBox = styled.div`
  width: 20rem;
  background: rgba(36, 36, 36, 0.7);
  @media ${(props) => props.theme.device.pc} {
    width: 20rem;
    margin-left: 2rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 100vw;
    margin: 0;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100vw;
  }
`;

export default index;
