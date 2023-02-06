// 액션 타입
const JOIN = "user/JOIN";
const LOGIN = "user/LOGIN";

// 액션 함수
export const signUp = (
  email,
  walletAddress,
  nickname,
  password,
  typeOfUser
) => {
  return async (dispatch, getState) => {
    const user = {
      // url : ""
      method: "post",
      data: { email, walletAddress, nickname, password, typeOfUser },
    };
    const data = user.data;
    console.log(data);
    dispatch({
      type: JOIN,
      payload: data,
    });
  };
};

export const login = (account,email,password,tokenData) => {
  return async (dispatch, getState) => {
    const loginInfo = {
      // url : ""
      method: "post",
      data: { account, email, password },
    };
    const data = loginInfo.data;
    console.log(data);
    dispatch({
      type: LOGIN,
      payload: {data,tokenData}
    })//.then((console.log(tokenData)))
  };
};

// 초기값
const init = {
  users: {},
  contracts : {}
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        users : {...payload.data},
        contracts : {...payload.tokenData}
      };
    default:
      return { ...state };
  }
}
