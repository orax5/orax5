// 회원가입, 로그인 입력 받는 input의 커스텀 훅
import { useState } from "react";

const useInput = (init) => {
  const [inputs, setInputs] = useState(init);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(setInputs);
  };
  return [inputs, onChange];
};

export default useInput;
