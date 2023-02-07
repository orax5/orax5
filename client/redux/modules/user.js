import axios from "axios";

const LOGIN = "user/LOGIN";

// 유저 회원가입
export const signUpUser = (
  email,
  walletAddress,
  nickname,
  password,
  typeOfUser
) => {
  return async (dispatch, getState) => {
    const user = await axios({
      url: "http://localhost:3001/user/signup",
      method: "post",
      data: {
        user_email: email,
        user_wallet: walletAddress,
        user_nickname: nickname,
        user_pwd: password,
        user_grade: typeOfUser,
      },
    });
    // const data = user.data;
    // console.log(data);
  };
};
// 크리에이터 회원가입
export const signUpCreator = (
  email,
  walletAddress,
  nickname,
  password,
  typeOfUser
) => {
  return async (dispatch, getState) => {
    const creator = await axios({
      url: "http://localhost:3001/creator/signup",
      method: "post",
      data: {
        user_email: email,
        user_wallet: walletAddress,
        user_nickname: nickname,
        user_pwd: password,
        user_grade: typeOfUser,
      },
    });
    // const data = creator.data;
    // console.log(data);
  };
};
// 크리에이터 이메일 인증
export const checkEmail = () => {
  return async (dispatch, getState) => {
    const isChecked = await axios({
      url: "http://localhost:3001/creator/email-verify",
      method: "post",
    });
    const data = isChecked;
    console.log(data);
  };
};
// 로그인
export const login = (account, email, password, tokenData) => {
  return async (dispatch, getState) => {
    const loginInfo = {
      url: "http://localhost:3001/user/login",
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    };
    const data = loginInfo.data;
    console.log(data);
    dispatch({
      type: LOGIN,
      payload: { data, tokenData },
    });
  };
};

// 초기값
const init = {
  users: {},
  contracts: {},
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        users: { ...payload.data },
        contracts: { ...payload.tokenData },
      };

    default:
      return { ...state };
  }
}
