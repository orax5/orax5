import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
import Graph from "../components/Graph";

const Detail = () => {
  const replies = [
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
    { name: "닉네임", content: "댓글 내용" },
  ];
  return (
    <PageContainer>
      <ContentWrap>
        <div>투표 제목</div>
        <div>종료까지 10시간 10분 50초 남았습니다</div>
        <p>여기에 투표 내용이 들어갈거임</p>
        <div>
          <Btn>찬성</Btn>
          <Btn>반대</Btn>
        </div>
      </ContentWrap>
      <InfoWrap>
        <table>
          <tr>
            <th>투표현황</th>
            <th>댓글</th>
          </tr>
          <tr>
            <td>
              <Graph />
            </td>
            <td>
              <ReplyBox>
                <div>
                  <input />
                  <button>등록</button>
                </div>
                <ShowReply>
                  {replies.map((reply, idx) => (
                    <div key={idx}>
                      <div>{reply.name}</div>
                      <div>{reply.content}</div>
                    </div>
                  ))}
                </ShowReply>
              </ReplyBox>
            </td>
          </tr>
        </table>
      </InfoWrap>
    </PageContainer>
  );
};

const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  font-size: ${(props) => props.theme.fontSize.subTitle};
  > :first-child {
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSize.title};
  }
  > :nth-child(3) {
    margin: 1rem;
    width: inherit;
    height: 20rem;
    background-color: white;
  }
`;

const Btn = styled.button`
  margin: 0.5rem;
  ${(props) => props.theme.button.useButton};
`;

const InfoWrap = styled.div`
  width: inherit;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & tr > th {
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }
`;

const ReplyBox = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 50rem;
  height: 30rem;
  border: 1px solid gray;
  border-radius: 1rem;
  margin-left: 5rem;
  > :first-child {
    ${(props) => props.theme.align.flexCenter};
  }
  & input {
    width: 46rem;
    height: 6rem;
    color: black;
    background-color: white;
    border-top-left-radius: 1rem;
  }
  & button {
    cursor: pointer;
    border-top-right-radius: 1rem;
    width: 4rem;
    height: 6rem;
    color: black;
    background-color: white;
  }
`;

const ShowReply = styled.div`
  overflow: scroll;
  width: 48rem;
  padding: 1rem;
  font-size: 1.2rem;
  & div:first-child {
    font-weight: 800;
    margin-bottom: 0.2rem;
  }
`;
export default Detail;
