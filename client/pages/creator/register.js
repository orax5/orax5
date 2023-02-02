import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const register = () => {

  const [inputs, setInputs] = useState({
    category: "",
    albumArt: "",
    composer: "",
    lyricist: "",
    singer: "",
    description: "",
    nftAmount: "",
    goalPrice: "",
    opendate: "",
  });

  // 펀딩 시작일은 오늘 이후부터 선택 가능
  const dateRef = useRef();
  const [date, setDate] = useState();

  const today = Date.now();
  const timeOff = new Date().getTimezoneOffset() * 120000;
  const limitDate = new Date(today - timeOff).toISOString().split("T")[0];

  useEffect(() => {
    setDate(dateRef.current.setAttribute("min", limitDate));
  }, [date]);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log({ ...inputs });
  };
  const shinFunding = () => {
    console.log("신청했다");
  };
  return (
    <MainContainer>
      <div></div>
      <RegisterForm>
        <h3>음원</h3>
        <div>
          <div>
            <DetailContent>카테고리</DetailContent>
            <SelectOption onChange={inputsHandler} name="category">
              <option value="1">발라드</option>
              <option value="2">트로트</option>
              <option value="3">힙합</option>
            </SelectOption>
          </div>
          <div>
            <DetailContent>이미지</DetailContent>
            <InputBox type="file" onChange={inputsHandler} name="albumArt" />
          </div>
          <div>
            <DetailContent>작곡가</DetailContent>
            <InputBox onChange={inputsHandler} name="composer" />
          </div>
          <div>
            <DetailContent>작사가</DetailContent>
            <InputBox onChange={inputsHandler} name="lyricist" />
          </div>
          <div>
            <DetailContent>가수</DetailContent>
            <InputBox onChange={inputsHandler} name="singer" />
          </div>
        </div>
        <br />
        <h3>펀딩상세</h3>
        <div>
          <div>
            <DetailContent>설명</DetailContent>
            <InputBox onChange={inputsHandler} name="description" />
          </div>
          <div>
            <DetailContent>발행량</DetailContent>
            <InputBox onChange={inputsHandler} name="nftAmount" />
          </div>
          <div>
            <DetailContent>목표 금액</DetailContent>
            <InputBox onChange={inputsHandler} name="goalPrice" />
          </div>
          <div>
            <DetailContent>펀딩 시작 날짜</DetailContent>
            <InputBox
              type="date"
              onChange={inputsHandler}
              name="opendate"
              ref={dateRef}
              date={date}
            />
          </div>
        </div>
        <br />
        <SubmitBtn onClick={shinFunding}>등록하기</SubmitBtn>
      </RegisterForm>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const RegisterForm = styled.div`
  width: 50rem;
  ${(props) => props.theme.align.flexCenterColumn};
`;
const SelectOption = styled.select`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;
const InputBox = styled.input`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  border: solid 1px white;
`;

const DetailContent = styled.div`
  margin: 0.3rem 0;
`;
const SubmitBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 23.8rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  &:hover {
    background-color: black;
    color: white;
    border: solid 1px white;
    transition: 0.5s;
  }
`;
export default register;