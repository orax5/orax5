import React from "react";
import styled from "styled-components";

const register = () => {
  return (
    <MainContainer>
      <div></div>
      <div>
        <h1>음원 제작 펀딩 신청</h1>
        {/* 음원 제작 펀딩 신청 박스 */}
        <ApplicationBox>
          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>카테고리</div>
            <select
              style={{
                width: "15rem",
                height: "1.5rem",
                borderRadius: "0.5rem",
              }}
            >
              <option value="">카테고리선택</option>
              <option value="트로트">트로트</option>
              <option value="힙합">힙합</option>
              <option value="발라드">발라드</option>
            </select>
          </_ApplicationBox>

          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>
              크리에이터
              <br />
              프로필
            </div>
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
          </_ApplicationBox>
          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>펀딩상세</div>
            <div>
              <div>
                <DetailContent>목표펀딩금액</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>펀딩시작일</DetailContent>
                <InputContainer type="date" />
              </div>
              <div>
                <DetailContent>펀딩종료일</DetailContent>
                <InputContainer type="date" />
              </div>
            </div>
          </_ApplicationBox>
        </ApplicationBox>

        <ApplicationBox>
          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>음원상세</div>
            <div>
              <div>
                <DetailContent>분위기</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>내용</DetailContent>
                <InputContainer />
              </div>
            </div>
          </_ApplicationBox>
          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>00000</div>
            <div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
            </div>
          </_ApplicationBox>
          <_ApplicationBox>
            <div style={{ marginRight: "1rem" }}>00000</div>
            <div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
              <div>
                <DetailContent>00000</DetailContent>
                <InputContainer />
              </div>
            </div>
          </_ApplicationBox>
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
  display: flex;
  justify-content: space-around;
`;

// 신청박스 안에 있는 항목 박스
const _ApplicationBox = styled.div`
  width: 30%;
  padding: 1rem;
  display: flex;
`;

const InputContainer = styled.input`
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;

const DetailContent = styled.div`
  width: 100px;
  height: 23px;
`;
const SubmitBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 20rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  transform: translate(450%, 0%);

  &:hover {
    background-color: black;
    color: white;
    border: solid 1px white;
    transition: 0.5s;
  }
`;

export default register;
