import React from "react";
import styled from "styled-components";

const RegisterVote = () => {
  return (
    <RegisterWrap>
      <div>
        <ContentHeader>
          <div>
            <label>투표 제목</label>
            <input />
          </div>
          <div>
            <label>투표 기간</label>
            <input type="date" />
          </div>
        </ContentHeader>
        <ContentBody>
          <label>소유한 NFT</label>
          <select>
            <option>유저가 가지고 있는 NFT</option>
            <option>여기에 불러와서 보여줌</option>
          </select>
        </ContentBody>
        <ContentBottom>
          <textarea />
          <div>
            <SubmintBtn>등록</SubmintBtn>
          </div>
        </ContentBottom>
      </div>
    </RegisterWrap>
  );
};

const RegisterWrap = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: absolute;
  top: 25%;
  left: 25%;
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50rem;
    height: 20rem;
    padding: 2rem;
    border: 1px solid white;
    border-radius: 1rem;
  }
`;

const ContentHeader = styled.div`
  ${(props) => props.theme.align.flexBetween};
  margin: 0.5rem;
  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  & input {
    border: 1px solid white;
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
    border: 1px solid white;
    width: 20rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

const ContentBottom = styled.div`
  margin: 0.5rem;
  > textarea {
    border: 1px solid white;
    width: 45rem;
    height: 6rem;
    resize: none;
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
  padding: 0.7rem;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export default RegisterVote;