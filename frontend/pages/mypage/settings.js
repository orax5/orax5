import React from 'react';
import styled from "styled-components";

const settings = () => {
  return (
    <MainContainer>
        <div></div>
            <div>
                <h1>Profile Settings</h1>
                <div style={{marginTop:"1rem"}}>
                    <div>Username</div>
                    <input type="text" />
                    <div>Short bio</div>
                    <textarea />
                    <div>Email</div>
                    <input type="email" />
                </div>
                <h1>Social links</h1>
                <div style={{marginTop:"1rem"}}>
                    <div>Twitter</div>
                    <input type="text" />
                    <div>Telegram</div>
                    <input type="text" />
                </div> 
                <br />
                <SubmintBtn>Sumbit</SubmintBtn>
            </div>
        <div></div>
    </MainContainer>
  )
}

// 스타일컴포
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
  // place-items:flex-start;
  
  & textarea {
    border: 1px solid white;
    width: 35rem;
    height: 6rem;
    resize: none; // 이거하면 
  }
  & input {
    border: 1px solid white;
    width: 35rem;
    height: 2rem;
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
    transition: 0.5s;
  }
  `



export default settings