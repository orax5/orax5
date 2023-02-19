import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Link from "next/Link";
import { useRouter } from "next/router";
import { userLogin, creatorLogin } from "../../redux/modules/user";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./../../lib/connectors";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [typeOfUser, setTypeOfUser] = useState(null);
  const [inputs, setInputs] = useState({
    password: "",
  });

  const {
    account, // dapp에 연결된 account address
    active, // active: dapp 유저가 로그인 된 상태인지 체크
    activate, // activate: dapp 월렛 연결 기능 수행함수
  } = useWeb3React();

  // 지갑 연결
  const onClickActivateHandler = () => {
    activate(injected, (error) => {
      if (isNoEthereumObject(error)) window.open("https://metamask.io/download.html");
    });
  };

  const signin = async (e) => {
    e.preventDefault();
    if (typeOfUser == null) {
      alert("회원 유형을 선택하세요");
    } else if (typeOfUser == 1) {
      // 1) 일반유저 로그인
      if (active == true) {
        // 공백 제외
        console.log("일반유저 로그인으로 들어왔어요");
        if (inputs.password == "") {
          alert("비밀번호는 필수 입력사항입니다");
        } else {
          dispatch(userLogin(account, inputs.password, router));
          console.log("userLogin 디스패치 보냈음");
        }
      } else {
        alert("지갑을 연결해주세요");
      }
    } else {
      // 2) 크리에이터 로그인
      if (active == true) {
        if (inputs.password == "") {
          alert(" 비밀번호는 필수 입력사항입니다");
        } else {
          dispatch(creatorLogin(account, inputs.password, router));
        }
      } else {
        alert("지갑을 연결해주세요");
      }
    }
  };

  return (
    <MainContainer>
      <div></div>
      <LoginWrap>
        <div style={{ marginTop: "10rem" }}>
          <header>
            <h1>LOGIN</h1>
          </header>
          <RadioBtnBox>
            <input type="radio" name="type" onClick={() => setTypeOfUser(1)} />
            &nbsp;
            <label htmlFor="user">유저</label> &nbsp;
            <input type="radio" name="type" onClick={() => setTypeOfUser(2)} /> &nbsp;
            <label htmlFor="creator">크리에이터</label>
          </RadioBtnBox>
          {account != null ? (
            <AddressBox>{account}</AddressBox>
          ) : (
            <AddressBox>
              <h2>지갑을 연결해주세요</h2>
              <button onClick={onClickActivateHandler}>지갑 연결</button>
            </AddressBox>
          )}
          <InputBox>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <label htmlFor="password">비밀번호</label>
          </InputBox>
          {/* <Forgot>비밀번호 찾기</Forgot> */}
          <Submit onClick={signin} type="submit" value="로그인" />
          <Link href="/login/join">
            <Submit type="submit" value="회원가입" />
          </Link>
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
const RadioBtnBox = styled.div`
  margin: 0.5rem 0;
`;
// 지갑 주소 감싼 div
const AddressBox = styled.div`
  ${(props) => props.theme.align.flexBetween};
  font-size: 1.1rem;

  margin-top: 1rem;
  > button {
    width: 6rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: plum;
    font-size: 1.2rem;
    font-weight: 900;
  }
  > button:hover {
    background-color: white;
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
