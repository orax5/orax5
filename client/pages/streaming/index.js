import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/Link";
import Player from "../components/player/Player";

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
          <TodayContentBox>
            <ItemBoxWrap>
              {isSelectContent ? (
                <>
                  <SelectContent>
                    <TitleNav>
                      <div style={{ display: "flex" }}>
                        <SelectTapBtn
                          onClick={todayHandler}
                          style={{
                            color: "plum",
                          }}
                        >
                          투데이
                        </SelectTapBtn>
                        <SelectTapBtn onClick={lockerHandler}>
                          보관함
                        </SelectTapBtn>
                      </div>
                      <HoverRed>
                        <Link href="/streaming/buyticket">이용권구매</Link>
                      </HoverRed>
                    </TitleNav>
                  </SelectContent>
                  <ItemBox>
                    {/* '투데이'탭에서 보이는 화면 */}
                    <TitleContainer>
                      {/* 펀딩에 성공한 음악들 보여줌 */}
                      <div>펀딩된 음악</div>
                      <div>전체보기</div>
                    </TitleContainer>
                    <TitleContainer>
                      {/* 재생 횟수 카운트 할 수 있으니까 카운트 순위대로 나열해서 보여주면 될 듯 */}
                      <div>자주 들은 음악</div>
                      <div>전체보기</div>
                    </TitleContainer>
                    <TitleContainer>
                      {/* 랜덤으로 몇 개 보여줌 */}
                      <div>DTS's 추천곡 </div>
                      <div>전체보기</div>
                    </TitleContainer>
                  </ItemBox>
                </>
              ) : (
                <>
                  <SelectContent>
                    <TitleNav>
                      <div style={{ display: "flex" }}>
                        <SelectTapBtn onClick={todayHandler}>
                          투데이
                        </SelectTapBtn>
                        <SelectTapBtn
                          onClick={lockerHandler}
                          style={{ color: "plum" }}
                        >
                          보관함
                        </SelectTapBtn>
                      </div>
                      <HoverRed>
                        <Link href="/streaming/buyticket">이용권구매</Link>
                      </HoverRed>
                    </TitleNav>
                  </SelectContent>
                  <ItemBox>
                    <TitleContainer>
                      <div>펀딩에 참여한 음악</div>
                      <div>전체보기</div>
                    </TitleContainer>
                  </ItemBox>
                </>
              )}
            </ItemBoxWrap>
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
const SelectTapBtn = styled.button`
  font-size: 1.5rem;
  margin-right: 2rem;
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
