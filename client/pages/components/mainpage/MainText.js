import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <MainContainer>
      <div>
        {/* 여기에 간지나는 텍스트 이펙트 넣고싶다 종찬이가 해주겠지.. */}
        <h1>DIVE TO SPACE</h1>
        <p>DTS는 도전합니다.</p>
        <p>
          더 크고 더 넓은 우주 더 큰 <b>생태계</b>로
        </p>
        <p>빠져들 준비 되셨나요? Space?</p>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.align.flexCenter};

  > div {
    text-align: center;
    z-index: 100;
    color: white;
    margin-top: 10rem;
  }
  & h1 {
    font-size: 7rem;
    font-weight: 900;
    text-shadow: 1px 1px 2px pink;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 5rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
  & p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px pink;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 1.2rem;
    }
  }
`;
export default MainText;
