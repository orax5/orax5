import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/Link";

const index = () => {
  const [acount, setAccount] = useState(false);

  return (
    <MainContainer>
      <div></div>
      <LoginWrap>
        <div style={{ marginTop: "10rem" }}>
          <header>
            <h1>LOGIN</h1>
          </header>

          <form action="" method="POST">
            {acount ? (
              <AddressBox>
                <h2>0x00000000</h2>
              </AddressBox>
            ) : (
              <AddressBox>
                <h2>지갑을 연결해주세요</h2>
                <button
                  onClick={() => {
                    setAccount(true);
                  }}
                >
                  지갑 연결
                </button>
              </AddressBox>
            )}

            <InputBox>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
              />
              <label htmlFor="password">비밀번호</label>
            </InputBox>
            <Forgot>비밀번호 찾기</Forgot>
            <Submit type="submit" value="로그인" />
            <Link href="/login/join">
              <Submit type="submit" value="회원가입" />
            </Link>
          </form>
        </div>
      </LoginWrap>

      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 로그인 영역 감싼 div
const LoginWrap = styled.div`
  width: 30rem;
  @media ${(props) => props.theme.device.mobile} {
    width: 20rem;
  }
`;
// 지갑 주소 감싼 div
const AddressBox = styled.div`
  ${(props) => props.theme.align.flexBetween};
  margin-top: 1rem;
  > button {
    font-size: 1rem;
    font-weight: 800;
  }
  > button:hover {
    color: plum;
  }
`;
const InputBox = styled.div`
  position: relative;
  margin: 10px 0;
  > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
  > input::placeholder {
    color: transparent;
  }
  /* 이것도 있어야함 아래랑 세트 */
  > input:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    top: 15px;
  }
  /* 이거해야 왔다갔다함 */
  > input:focus + label,
  label {
    color: plum;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`;
const Submit = styled.input`
  cursor: pointer;
  background-color: plum;
  border: none;
  color: white;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  font-size: 14pt;
  margin-top: 1rem;
`;
// 속성 사라지게 만듬 비밀번호 찾기임
const Forgot = styled.div`
  cursor: pointer;
  text-align: right;
  font-size: 12pt;
  color: rgb(164, 164, 164);
  margin: 10px 0px;
`;

export default index;
