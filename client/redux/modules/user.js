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

export const login = ({ walletAddress, password, email }) => {
  return async (dispatch, getState) => {
    const loginInfo = {
      // url : ""
      method: "post",
      data: { walletAddress, password, email },
    };
    const data = loginInfo.data;
    dispatch({
      type: LOGIN,
      payload: data,
    });
  };
};

// 초기값
const init = {
  users: [],
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case JOIN:
      return {
        ...state,
        users: [...payload],
      };
    case LOGIN:
      return {
        users: [...state, ...payload],
      };
    default:
      return { ...state };
  }
}
