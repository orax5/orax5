import React, { useCallback, useState } from "react";
import useInput from "../../hooks/useInput";

const signup = () => {
  // radio의 value 값을 유저 0, 크리에이터 1로 받는다
  const [userType, setUserType] = useState(null);
  const userTypeHandler = (e) => {
    setUserType(e.target.value);
  };

  // 유저로부터 받을 값, useInput 훅 사용
  const [{ email, nickname, password }, onChange] = useInput({
    email: "",
    nickname: "",
    password: "",
  });

  const [rePassword, setRePassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const passwordChecker = useCallback(
    (e) => {
      setPasswordCheck(e.target.value !== password);
      setRePassword(e.target.value);
    },
    [password]
  );

  const submitSignUp = () => {
    console.log({ email, nickname, password });
  };
  return (
    <>
      <div>
        <div>
          <input
            type="radio"
            name="userType"
            value="0"
            onChange={userTypeHandler}
          />
          <label>유저</label>
          <input
            type="radio"
            name="userType"
            value="1"
            onChange={userTypeHandler}
          />
          <label>크리에이터</label>
          {/* 여기다 조건을 한 번 더 달아서 유저화면/크리에이터 화면 구분 */}
          {userType == null && <div>유저타입을 선택하세요</div>}
        </div>
        <div>
          <label>이메일</label>
          <br />
          <input email={email} onChange={onChange} />
        </div>
        <div>
          <label>닉네임</label>
          <br />
          <input nickname={nickname} onChange={onChange} />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input type="password" password={password} onChange={onChange} />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <br />
          <input
            type="password"
            onChange={passwordChecker}
            value={rePassword}
          />
       
        </div>

        <div>
          <button type="submit" onClick={submitSignUp}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};
export default signup;
