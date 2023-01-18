import React from 'react';
import styled from "styled-components";
import Link from 'next/Link';


const index = () => {
  return (
    <MainContainer>
      <div></div>
      <div style={{marginTop:"10rem"}}>
       <header>
          <h2>Login</h2>
       </header>
        <form action="" method="POST">
          <InputBox>
            <input id="username" type="text" name="username" placeholder="아이디" />
            <label htmlFor="username">아이디</label>
          </InputBox>

          <InputBox>
            <input id="password" type="password" name="password" placeholder="비밀번호" />
            <label htmlFor="password">비밀번호</label>
          </InputBox>
          <Forgot>비밀번호 찾기</Forgot>
          <Submit type="submit" value="로그인" />
          <Link href = "/login/creator">
            <Submit type="submit" value="회원가입" />
          </Link>
        </form>

      </div>
      <div></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;

const InputBox = styled.div`
  position:relative;
  margin:10px 0;
  > input {
    background:transparent;
    border:none;
    border-bottom: solid 1px #ccc;
    padding:20px 0px 5px 0px;
    font-size:14pt;
    width:100%;
  }
  > input::placeholder {
    color:transparent;
  }
  /* 이것도 있어야함 아래랑 세트 */
  > input:placeholder-shown + label{
    color: #aaa;
    font-size:14pt;
    top:15px;
  }
  /* 이거해야 왔다갔다함 */
  > input:focus + label, label{
    color:#8aa1a1;
    font-size:10pt;
    pointer-events: none;
    position: absolute;
    left:0px;
    top:0px;
    transition: all 0.2s ease ;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`
  const Submit = styled.input`
    background-color: #8aa1a1;
    border:none;
    color:white;
    border-radius: 5px;
    width:100%;
    height:35px;
    font-size: 14pt;
    margin-top:1rem;
  `
// 속성 사라지게 만듬 비밀번호 찾기임
  const Forgot = styled.div`
    text-align: right;
    font-size:12pt;
    color:rgb(164, 164, 164);
    margin:10px 0px;
  `


export default index