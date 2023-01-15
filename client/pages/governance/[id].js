import React from "react";
import styled from "styled-components";
const Detail = () => {
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
          <h2>종료까지 10시간 10분 50초 남았습니다</h2>
          <p>여기에 투표 내용이 들어갈거임</p>
          <div>
            <Btn>찬성</Btn>
            <Btn>반대</Btn>
          </div>
        </ContentWrap>
        <ReplyWrap>
          <h1>댓글(3)</h1>
          <WriteReply>
            <input />
            <Btn>등록</Btn>
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
  ${(props) => props.theme.align.flexCenterColumn};
  align-items: flex-start;
  font-size: 1.5rem;
  // 종료까지~ 알려주는 문구
  > :nth-child(2) {
    margin: 1rem 0;
  }
  // 어떤 내용에 대한 투표인지 설명 있는 창
  > :nth-child(3) {
    width: 80rem;
    height: 10rem;
    border: 1px solid white;
  }
`;
// 버튼
const Btn = styled.button`
  margin: 1rem 0;
  ${(props) => props.theme.button.basicBtn};
`;
// 댓글 전체박스
const ReplyWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  align-items: flex-start;
  font-size: 1.5rem;
  margin: 4rem 0;
`;

const WriteReply = styled.td`
  ${(props) => props.theme.align.flexCenter};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem 0;
  width: 80rem;
  > input {
    width: 50rem;
    height: 4rem;
    font-size: 1.5rem;
    border: 1px solid white;
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
export default Detail;
