import React from "react";
import styled from "styled-components";

const register = () => {
  return (
    <MainContainer>
      <div></div>

      <div>
        <h1>음원 제작 펀딩 신청</h1>
        <ApplicationBox>
          <div>카테고리</div>
          <select
            style={{ width: "15rem", height: "2rem", borderRadius: "0.5rem" }}
          >
            <option value="">카테고리선택</option>
            <option value="트로트">트로트</option>
            <option value="힙합">힙합</option>
            <option value="발라드">발라드</option>
          </select>

          <div style={{ marginTop: "1rem" }}>크리에이터 프로필</div>
          <br />
          <div>
            <div>
              <DetailContent>작곡가</DetailContent>
              <InputContainer />
            </div>
            <div>
              <DetailContent>작사가</DetailContent>
              <InputContainer />
            </div>
            <div>
              <DetailContent>가수</DetailContent>
              <InputContainer />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>펀딩상세</div>
          <div>
            <div>
              <DetailContent>목표펀딩금액</DetailContent>
              <InputContainer />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <div>음원상세</div>
            <div>분위기</div>
            <InputContainer type="text" />
            <div>내용</div>
            <InputContainer type="text" />
          </div>
        </ApplicationBox>
        <SubmitBtn>등록하기</SubmitBtn>
      </div>

      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 신청박스
const ApplicationBox = styled.div`
  margin-top: 1rem;
  border: solid 1px white;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 2rem;
`;

const InputContainer = styled.input`
  border-radius: 0.5rem;
  font-size: 1.5rem;
  border: solid 1px white;
`;

const DetailContent = styled.div`
  width: 7rem;
  height: 1.5rem;
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
