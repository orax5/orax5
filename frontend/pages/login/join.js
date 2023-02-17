import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { checkEmail, signUpCreator, signUpUser } from "../../redux/modules/user";
import { useWeb3React } from "@web3-react/core";

const join = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // 오류 메세지 상태저장
  const [pwdMessage, setPwdMessage] = useState("");
  const [nickMessage, setNickMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [accountMessage, setAccountMessage] = useState("");
  // 유효성 검사 완료 시
  const [checkedPwd, setCheckedPwd] = useState(false);
  const [checkedNick, setCheckedNick] = useState(false);
  const [checkedMail, setCheckedMail] = useState(false);
  const [checkedAddress, setCheckedAddress] = useState(false);
  // Creator or User
  const [isCheckType, setIsCheckType] = useState(false);
  const [typeOfUser, setTypeOfUser] = useState(null);
  // 크리에이터 이메일 인증여부
  const [isVerifiedEmail, setIsVerifiedEmail] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    walletAddress: "",
    nickname: "",
    password: "",
    rePassword: "",
  });
  const { active, account } = useWeb3React();

  // console.log(accountMessage)

  // radio 눌렀을때 User 가입폼 보여주기
  const viewUserHandler = (e) => {
    const value = parseInt(e.target.value);
    setTypeOfUser(value);
    setIsCheckType(false);
  };
  // radio 눌렀을때 Creator 가입폼 보여주기
  const viewCreatorHandler = (e) => {
    const value = parseInt(e.target.value);
    setTypeOfUser(value);
    setIsCheckType(true);
  };

  useEffect(() => {
    let patternEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let patternPw =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // 최소 8 자, 하나 이상의 문자와 하나의 숫자, 특수문자 포함 정규식
    

    if (inputs.password !== inputs.rePassword) {
      setPwdMessage("비밀번호가 일치하지 않습니다");
      setCheckedPwd(false);
    } else if (patternPw.test(inputs.password) == false) {
      setPwdMessage("최소 8 자, 하나 이상의 문자와 하나의 숫자, 특수문자가 필요합니다.")
      setCheckedPwd(false)
    } else if (inputs.password == "") {
      setPwdMessage("비밀번호를 입력하세요");
      setCheckedPwd(false);
    } else {
      setPwdMessage("비밀번호가 일치합니다");
      setCheckedPwd(true);
    }

    if (inputs.nickname == "") {
      setNickMessage("닉네임 입력은 필수입니다");
      setCheckedNick(false);
    } else if (inputs.nickname.search(/\s/) != -1) {
      setNickMessage("공백은 불가능합니다");
      setCheckedNick(false);
    } else if (inputs.nickname.length < 2 || inputs.nickname.length > 8) {
      setNickMessage("2~8자리 닉네임을 입력해주세요");
      setCheckedNick(false);
    } else {
      setNickMessage("사용가능");
      setCheckedNick(true);
    }

    if (inputs.email == "") {
      setEmailMessage("이메일을 입력해주세요");
      setCheckedMail(false);
    } else if (patternEmail.test(inputs.email) == false) {
      setEmailMessage("이메일형식이 올바르지 않습니다");
      setCheckedMail(false);
    } else {
      setEmailMessage("사용가능한 이메일");
      setCheckedMail(true);
    }

    if (inputs.walletAddress == "") {
      setAccountMessage("지갑주소를 입력해주세요");
      setCheckedAddress(false);
    } else if (account !== inputs.walletAddress) {
      setAccountMessage("연결된 지갑주소와 일치하지 않습니다");
      setCheckedAddress(false);
    } else if (account == inputs.walletAddress) {
      setAccountMessage("사용가능한 지갑주소");
      setCheckedAddress(true);
    }

    // inputs값이 바뀌거나 account 중간에 바꾸면 상태메세지 안바뀌는거에 대한 useEffect
  }, [inputs,account]);

  const SignUp = (event) => {
    event.preventDefault();
    if (typeOfUser == undefined) {
      alert("회원 유형을 선택하세요");
    } else if (typeOfUser == 1) {
      // 1) 일반유저 가입 시
      if (
        checkedPwd == true &&
        checkedMail == true &&
        checkedNick == true &&
        checkedAddress == true &&
        active == true 
      ) {
        dispatch(signUpUser(inputs.email, inputs.walletAddress, inputs.nickname, inputs.password, typeOfUser, router));
      } else if(checkedMail == "" || checkedMail== false){
        alert("올바른 이메일 값을 입력해주세요")
      } else if (active == false) {
        alert("지갑을 연결해주세요");
      } else if (accountMessage == "지갑주소를 입력해주세요" || accountMessage == "연결된 지갑주소와 일치하지 않습니다"){
        alert("지갑주소를 입력해주세요.")
      } else if (checkedNick == ""){
        alert("닉네임을 옳바르게 입력해주세요.")
      } else if (checkedPwd == false){
        alert("비밀번호를 잘못설정했습니다.");
      } else {
        alert("올바른 정보를 입력해주세요");
      }
    } else {
      // 2) 크리에이터 가입 시
      if (
        checkedPwd == true &&
        checkedMail == true &&
        checkedNick == true &&
        checkedAddress == true &&
        active == true &&
        isVerifiedEmail == true
      ) {
        dispatch(signUpCreator(inputs.email, inputs.walletAddress, inputs.nickname, inputs.password, typeOfUser))
          .then((res) => {
            // 회원가입 이메일 발송
            dispatch(checkEmail(inputs.email, router))
              .then((res) => {
                console.log(res);
                if (res == true) {
                  setIsVerifiedEmail(true);
                  alert("가입되었습니다");
                  router.push("/login");
                } else {
                  alert("이메일 인증에 실패하였습니다");
                  setIsVerifiedEmail(false);
                }
              })
              .catch((err) => {
                console.log("크리에이터 가입 이메일 발송 실패", err);
              });
          })
          .catch((err) => {
            console.log(err);
            alert("크리에이터 가입 axios요청 실패");
          });

        //
      } else if (active == false) {
        alert("지갑을 연결해주세요");
      } else if (isVerifiedEmail == false) {
        alert("이메일 인증을 진행해주세요");
      }
    }
  };

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
              <input type="radio" value={1} name="type" onClick={viewUserHandler} />
              &nbsp;
              <label htmlFor="user">유저</label> &nbsp;
              <input type="radio" value={2} name="type" onClick={viewCreatorHandler} /> &nbsp;
              <label htmlFor="creator">크리에이터</label>
            </div>
            {isCheckType == false ? (
              <>
                <InputBox>
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                  />
                  <label htmlFor="email">이메일</label>
                  <span>{emailMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="walletAddress"
                    name="walletAddress"
                    placeholder="지갑주소"
                    onChange={(e) => setInputs({ ...inputs, walletAddress: e.target.value })}
                  />
                  <label htmlFor="walletAddress">지갑주소</label>
                  <span>{accountMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    onChange={(e) => setInputs({ ...inputs, nickname: e.target.value })}
                  />
                  <label htmlFor="nickname">닉네임</label>
                  <span>{nickMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                  />
                  <label htmlFor="password">비밀번호</label>
                </InputBox>
                <InputBox>
                  <input
                    type="password"
                    name="rePassword"
                    placeholder="비밀번호확인"
                    autoComplete="off"
                    onChange={(e) => setInputs({ ...inputs, rePassword: e.target.value })}
                  />
                  <label htmlFor="rePassword">비밀번호확인</label>
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
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                  />
                  <label htmlFor="email">이메일</label>
                  <span>{emailMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="walletAddress"
                    name="walletAddress"
                    placeholder="지갑주소"
                    onChange={(e) => setInputs({ ...inputs, walletAddress: e.target.value })}
                  />
                  <label htmlFor="walletAddress">지갑주소</label>
                  <span>{accountMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    onChange={(e) => setInputs({ ...inputs, nickname: e.target.value })}
                  />
                  <label htmlFor="nickname">닉네임</label>
                  <span>{nickMessage}</span>
                </InputBox>
                <InputBox>
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                  />
                  <label htmlFor="password">비밀번호</label>
                </InputBox>
                <InputBox>
                  <input
                    type="password"
                    name="rePassword"
                    placeholder="비밀번호확인"
                    autoComplete="off"
                    onChange={(e) => setInputs({ ...inputs, rePassword: e.target.value })}
                  />
                  <label htmlFor="rePassword">비밀번호확인</label>
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