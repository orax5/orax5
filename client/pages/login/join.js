import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/modules/user";

const join = () => {
  const dispatch = useDispatch();
  // 오류 메세지 상태저장
  const [pwdMessage, setPwdMessage] = useState("");
  const [nickMessage, setNickMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isCheckType, setIsCheckType] = useState(false);
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  // Creator or User
  const [typeOfUser, setTypeOfUser] = useState(null);
  const [inputs, setInputs] = useState({
    email: "",
    walletAddress: "",
    nickname: "",
    password: "",
    rePassword: "",
  });

  // radio 눌렀을때 User 가입폼 보여주기
  const viewUserHandler = (e) => {
    setTypeOfUser(e.target.value);
    setIsCheckType(false);
    console.log(typeOfUser)
  };
  // radio 눌렀을때 Creator 가입폼 보여주기
  const viewCreatorHandler = (e) => {
    setTypeOfUser(e.target.value);
    setIsCheckType(true);
    console.log(typeOfUser)
  };

  const SignUp = (event) => {
    event.preventDefault();
    console.log(
      inputs.email,
      inputs.walletAddress,
      inputs.nickname,
      inputs.password,
      typeOfUser
    );
    if (typeOfUser == null) {
      alert("회원 유형을 선택하세요");
    } else if (typeOfUser == 2) {
        if (isCheckEmail == false) {
        alert("이메일 인증을 진행해주세요");
      }
    }
    // dispatch로 전달
    dispatch(signUp());
  };

  useEffect(()=>{
    let pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if(inputs.password !== inputs.rePassword){
      setPwdMessage("떼잉~비밀번호가 똑같지 않아요!");
    } else if(inputs.password == ""){
      setPwdMessage("비밀번호를 입력하세요");
    } else {
      setPwdMessage("비밀번호가 일치합니다.");
    }

    if(inputs.nickname == ""){
      setNickMessage("닉네임 입력은 필수입니당");
    } else if(inputs.nickname.search(/\s/) != -1){
      setNickMessage("닉네임 공백은 앙대용");
    } else if(inputs.nickname.length < 2 || inputs.nickname.length >8){
      setNickMessage("2~8자리 닉네임입력");
    } else{
      setNickMessage("사용가능");
    }

    if(inputs.email==""){
      setEmailMessage("이메일입력해주세요");
    } else if(pattern.test(inputs.email) == false){
      setEmailMessage("이메일형식이 올바르지 않아여");
    } else{
      setEmailMessage("사용가능한 이메일");
    }



  },[inputs])

  // console.log(inputs.email);
  // console.log(inputs.nickname);
  // console.log(inputs.password);
  // console.log(inputs.rePassword);

  return (
    <MainContainer>
      <div></div>
      <form action="">
      <LoginWrap>
        <div style={{ marginTop: "10rem" }}>
          <header>
            <h2>회원가입</h2>
          </header>
          <br />
          <div>
            <input
              type="radio"
              value="1"
              name="type"
              onClick={viewUserHandler}
            />
            &nbsp;
            <label htmlFor="user">유저</label> &nbsp;
            <input
              type="radio"
              value="2"
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
                  onChange={e=> setInputs({...inputs, email:e.target.value})}
                />
                <label htmlFor="username">이메일</label>
                <span>{emailMessage}</span>
              </InputBox>
              <InputBox>
                <input
                  type="walletAddress"
                  name="walletAddress"
                  placeholder="지갑주소"
                  onChange={e=> setInputs({...inputs, walletAddress:e.target.value})}
                />
                <label htmlFor="username">지갑주소</label>
              </InputBox>
              <InputBox>
                <input
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  onChange={e=> setInputs({...inputs, nickname:e.target.value})}
                />
                <label htmlFor="username">닉네임</label>
                <span>{nickMessage}</span>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                  onChange={e=> setInputs({...inputs, password:e.target.value})}
                />
                <label htmlFor="password">비밀번호</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="rePassword"
                  placeholder="비밀번호확인"
                  autoComplete="off"
                  onChange={e=> setInputs({...inputs, rePassword:e.target.value})}
                />
                <label htmlFor="password">비밀번호확인</label>
                <span>{pwdMessage}</span>
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
                  onChange={e=> setInputs({...inputs, email:e.target.value})}
                />
                <label htmlFor="username">이메일</label>
                <span>{emailMessage}</span>
              </InputBox>
              <InputBox>
                <button
                  onClick={(e) => {
                    setIsCheckEmail(true);
                    alert("이메일 인증이 완료되었습니다");
                    e.preventDefault()
                  }}
                >
                  이메일 확인
                </button>
              </InputBox>
              <InputBox>
                <input
                  type="walletAddress"
                  name="walletAddress"
                  placeholder="지갑주소"
                  onChange={e=> setInputs({...inputs, walletAddress:e.target.value})}
                />
                <label htmlFor="username">지갑주소</label>
              </InputBox>
              <InputBox>
                <input
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  onChange={e=> setInputs({...inputs, nickname:e.target.value})}
                />
                <label htmlFor="username">닉네임</label>
                <span>{nickMessage}</span>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                  onChange={e=> setInputs({...inputs, password:e.target.value})}
                />
                <label htmlFor="password">비밀번호</label>
              </InputBox>
              <InputBox>
                <input
                  type="password"
                  name="rePassword"
                  placeholder="비밀번호확인"
                  autoComplete="off"
                  onChange={e=> setInputs({...inputs, rePassword:e.target.value})}
                />
                <label htmlFor="password">비밀번호확인</label>
                <span>{pwdMessage}</span>
              </InputBox>
              <Submit type="submit" onClick={SignUp} />
            </>
          )}
        </div>
      </LoginWrap>
    </form>

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
export default join;
