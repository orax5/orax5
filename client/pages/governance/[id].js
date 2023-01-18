import React from "react";
import styled from "styled-components";
import CountDown from "../components/CountDown";
const Detail = () => {
  // 등록하는 곳에서 선택한 날짜로 불러와야함, 지금은 임의로 두고 작업
  const endDate = new Date("2023-01-31 11:00:00");
  const [date, hours, minutes, seconds] = CountDown(endDate);

  // 댓글 더미데이터
  const replies = [
    { name: "김치만두", content: "앨범아트 바꾸지 말자" },
    { name: "만두만두", content: "222" },
    { name: "고기만두", content: "333" },
  ];
  return (
    <MainContainer>
      <div></div>
      <div>
        <ContentWrap>
          <h1>투표 제목</h1>
          <div>
            <Timer>
              {date}일 {hours}시간 {minutes}분 {seconds}초
            </Timer>
          </div>
          <div>앨범아트 변경하고 싶어요 </div>
          <div>
            <Btn>찬성</Btn>
            <Btn>반대</Btn>
          </div>
        </ContentWrap>
        {/* 댓글 할지 안할지 몰라요 */}
        <ReplyWrap>
          <h1>댓글(3)</h1>
          <WriteReply>
            <input />
            <button>등록</button>
          </WriteReply>
          {replies.map((reply, idx) => (
            <ShowReply key={idx}>
              <li>{reply.name}</li>
              <li>↳ {reply.content}</li>
            </ShowReply>
          ))}
        </ReplyWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 투표 안건 정보 보여주는 부분
const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  // 종료까지~ 알려주는 문구
  > :nth-child(2) {
    margin: 1rem 0;
  }
  // 어떤 내용에 대한 투표인지 설명 있는 창
  > :nth-child(3) {
    width: 80rem;
    height: 10rem;
    padding: 1rem;
    border: 1px solid white;
  }
  > :last-child {
    width: 80rem;
    display: flex;
    justify-content: space-evenly;
  }
`;
// 버튼
const Btn = styled.button`
  margin: 1rem 0;
  ${(props) => props.theme.button.basicBtn};
  width: 30rem;
  height: 4rem;
`;
// 댓글 전체박스
const ReplyWrap = styled.div`
  font-size: 1.5rem;
  margin: 4rem 0;
`;
const WriteReply = styled.div`
  ${(props) => props.theme.align.flexCenter};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem 0;
  width: 80rem;
  > input {
    width: 70rem;
    height: 4rem;
    font-size: 1.5rem;
    border: 1px solid white;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  > button {
    width: 5rem;
    height: 4rem;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px solid white;
    border-left: none;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;
const ShowReply = styled.ul`
  width: 80rem;
  > :first-child {
    font-size: 1.8rem;
    font-weight: 900;
    margin: 0.5rem 0;
  }
  > :last-child {
    height: auto;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Timer = styled.span`
  color: red;
  font-size: 2rem;
  font-weight: 800;
`;
export default Detail;
