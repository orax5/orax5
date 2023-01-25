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
          더 크고 더 넓은 우주 더 큰 <b style={{color:"plum"}}>생태계</b>로
        </p>
        <p>빠져들 준비 되셨나요? Space?</p>
        <ScrollY />
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
const ScrollY = styled.div`
    content:"";
    background: url("http://www.rsnrs.com/img/main/scrollArrow.png") no-repeat center;
    width: 9rem;
    height: 9rem;
    position: relative;
    top: 0;
    left: 50%;
    margin-top: 15rem;
    margin-left: -60px;
    bottom: 4rem;
    &::before{
    content:"";
    background: url("http://www.rsnrs.com/img/main/scrollBtn.png") no-repeat center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* 애니메이션 */
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: rotate_image;
    @keyframes rotate_image{
    100% {
        transform: rotate(360deg);
        }
      }
    }   
`
export default MainText;
