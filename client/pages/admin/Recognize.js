import React,{useState, useRef} from "react";
import styled from "styled-components";

const Recognize = () => {
    // 등록버튼 핸들러
    const recognizeHandler = () => {
      alert("승인함");
    }
 
  return (
  <RegisterWrap>
    <ContentWrap>
      <label>Name</label>
      <input readOnly/>
      <label>Category</label>
      <input readOnly />
      <label>Funding scale</label>
      <input readOnly/>
      <label>Start Date</label>
      <input readOnly/>
      <label>End Date</label>
      <input readOnly/>
      <label>분위기</label>
      <input readOnly/>
      <label>Content</label>
      <input readOnly/>
      <div style={{width: "115%", display: "flex", 
        justifyContent: "space-around"}}>
      <button onClick={recognizeHandler}>승인</button>
      <button onClick={recognizeHandler}>반려</button>
      <button onClick={recognizeHandler}>보류</button>
      </div>
    </ContentWrap>
  </RegisterWrap>
  )
}
// 전체 div
const RegisterWrap = styled.div`
  width: 35rem;
  height: 43rem;
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
    font-size: 1rem;
    font-weight: 400;
  }
  > input,
  select {
    width: inherit;
    height: 2rem;
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
    width: inherit/3;
    text-align: center;
    margin-top: 1.2rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
`;


export default Recognize
