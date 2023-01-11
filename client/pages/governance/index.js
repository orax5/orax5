import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
import RegisterVote from "../components/RegisterVote";

const index = () => {
  return (
    <PageContainer>
      {/* 등록하는 폼은 컴포넌트로 만들어서 불러옴 */}
      <RegisterVote />
      <GovListWrap>
        <div>
          <ContentHeader>
            <div>투표 제목</div>
            <div>기간</div>
          </ContentHeader>
          <ContentBody>
            <div>NFT</div>
          </ContentBody>
        </div>
      </GovListWrap>
    </PageContainer>
  );
};

const RegisterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50rem;
    height: 17rem;
    padding: 2rem;
    border: 1px solid white;
    border-radius: 1rem;
  }
`;

const GovListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60rem;
    height: 15rem;
    padding: 2rem;
    background-color: white;
  }
`;

const ContentHeader = styled.div`
  ${(props) => props.theme.align.flexBetween};
  margin: 0.5rem;
  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  & input {
    width: 10rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

const ContentBody = styled.div`
  margin: 0.5rem;

  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  & select {
    width: 20rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

const ContentBottom = styled.div`
  margin: 0.5rem;
  > textarea {
    width: 45rem;
    height: 4rem;
  }
  > div {
    text-align: end;
  }
`;

const SubmintBtn = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  padding: 0.7rem;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export default index;
