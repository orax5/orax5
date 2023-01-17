import React from 'react';
import styled from "styled-components";


const index = () => {
  return (
    <MainContainer>
      <div></div>
      <div>
      여기 로그인 회원가입
      </div>
      <div></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;


export default index