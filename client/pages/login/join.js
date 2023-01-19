import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/modules/user";

const creator = () => {
  const dispatch = useDispatch();

  const [isCheckType, setIsCheckType] = useState(false);
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [typeOfUser, setTypeOfUser] = useState(null);
  const [inputs, setInputs] = useState({
    email: "",
    nickname: "",
    password: "",
    rePassword: "",
  });

  const viewUserHandler = (e) => {
    setTypeOfUser(e.target.value);
    setIsCheckType(false);
  };

  const viewCreatorHandler = (e) => {
    setTypeOfUser(e.target.value);
    setIsCheckType(true);
  };

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const SignUp = () => {
    console.log(inputs.email, inputs.nickname, inputs.password, typeOfUser);
    if (typeOfUser == null) {
      alert("회원 유형을 선택하세요");
    } else if (typeOfUser == 1) {
      if (isCheckEmail == false) {
        alert("이메일 인증을 진행해주세요");
      }
    }
    dispatch(
      signUp(inputs.email, inputs.nickname, inputs.password, typeOfUser)
    );
  };
  return (
    <MainContainer>
      <div></div>
      <LoginWrap>
        <div style={{ marginTop: "10rem" }}>
          <header>
            <h2>회원가입</h2>
          </header>
          <br />
          <div>
            <input
              type="radio"
              value="0"
              name="type"
              onClick={viewUserHandler}
            />
            &nbsp;
            <label htmlFor="user">유저</label> &nbsp;
            <input
              type="radio"
              value="1"
              name="type"
              onClick={viewCreatorHandler}
            />{" "}
            &nbsp;
            <label htmlFor="creator">크리에이터</label>
          </div>
          {isCheckType == false ? (
            <>
              <InputBox>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  onChange={inputsHandler}
                />
                <label htmlFor="username">이메일</label>
              </InputBox>
              <InputBox>
                <input
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  onChange={inputsHandler}
                />
                <label htmlFor="username">닉네임</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={inputsHandler}
                />
                <label htmlFor="password">비밀번호</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="rePassword"
                  placeholder="비밀번호"
                  onChange={inputsHandler}
                />
                <label htmlFor="password">비밀번호확인</label>
              </InputBox>
              <Submit type="submit" onClick={SignUp} />
            </>
          ) : (
            <>
              <InputBox>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  onChange={inputsHandler}
                />
                <label htmlFor="username">이메일</label>
              </InputBox>
              <InputBox>
                <button
                  onClick={() => {
                    setIsCheckEmail(true);
                    alert("이메일 인증이 완료되었습니다");
                  }}
                >
                  이메일 확인
                </button>
              </InputBox>
              <InputBox>
                <input
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  onChange={inputsHandler}
                />
                <label htmlFor="username">닉네임</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={inputsHandler}
                />
                <label htmlFor="password">비밀번호</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="rePassword"
                  placeholder="비밀번호확인"
                  onChange={inputsHandler}
                />
                <label htmlFor="password">비밀번호확인</label>
              </InputBox>
              <Submit type="submit" onClick={SignUp} />
            </>
          )}
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
    color: #8aa1a1;
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
export default creator;
