import React from "react";
import styled from "styled-components";

const RegisterVote = () => {
  return (
    <RegisterWrap>
      <ContentWrap>
        <label>소유한 NFT</label>
        <select>
          <option>유저가 가지고 있는 NFT</option>
          <option>여기에 불러와서 보여줌</option>
        </select>
        <label>투표 기간</label>
        <input type="date" />
        <label>투표 제목</label>
        <input />
        <textarea placeholder="제안할 내용을 입력해주세요" />
        <button>등록</button>
      </ContentWrap>
    </RegisterWrap>
  );
};
// 전체 div
const RegisterWrap = styled.div`
  width: 35rem;
  height: 35rem;
  font-size: 1.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: black;
  position: absolute;
  @media ${(props) => props.theme.device.mobile} {
    width: 25rem;
  }
`;
// 내용 div
const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  width: 31rem;
  padding: 2rem;

  > label {
    font-size: 2rem;
    font-weight: 800;
  }
  > input,
  select {
    width: inherit;
    height: 3rem;
    font-size: 1.3rem;
    border: 1px solid white;
    margin: 0.5rem 0 1.2rem 0;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  > textarea {
    width: inherit;
    height: 6rem;
    resize: none;
    border: 1px solid white;
    font-size: 1.3rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  & button {
    ${(props) => props.theme.button.basicBtn};
    width: inherit;
    text-align: center;
    margin-top: 1.2rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
`;
export default RegisterVote;
