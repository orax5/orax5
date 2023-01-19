// 액션 타입
const JOIN = "user/JOIN";

// 액션 함수
export const signUp = (email, nickname, password, typeOfUser) => {
  return async (dispatch, getState) => {
    const user = await {
      method: "post",
      data: { email, nickname, password, typeOfUser },
    };
    const data = user.data;
    console.log(data); // {email: '123', nickname: '123', password: '123', typeOfUser: '0'}
    dispatch({
      type: "JOIN",
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
    default:
      return { ...state };
  }
}
