import React from 'react'
import styled from 'styled-components'

const bellTest = () => {
  return (
    <MainContainer>
        <div></div>

        <div>
            <ScrollY/>
        </div>

        <div></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;

const ScrollY = styled.div`
    content:"";
    background: url("http://www.rsnrs.com/img/main/scrollArrow.png") no-repeat center;
    width: 9rem;
    height: 9rem;
    position: relative;
    top: 0;
    left: 0;
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



export default bellTest