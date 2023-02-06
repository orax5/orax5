// 액션 타입
const REGISTER_FUNDING = "funding/REGISTER_FUNDING";

// 액션 함수
export const registerImage = () => {
  return async (dispatch, getState) => {
    const albumArt = {
      url: "http://loaclhost:3001/",
      method: "post",
      data: { id },
    };
    const data = albumArt.data;
    console.log(data);
    dispatch({
      type: "REGISTER_IMAGE",
      payload: data,
    });
  };
};
export const registerFunding = () => {
  return async (dispatch, getState) => {
    const newfunding = {
      method: "post",
      data: { id },
    };
    const data = newfunding.data;
    console.log(data);
    dispatch({
      type: "REGISTER_IMAGE",
      payload: data,
    });
  };
};

// 초기값 0
const init = {
  addedFunding: [],
};

// 리듀서
export default function funding(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_FUNDING:
      return {
        ...state,
        addedFunding: [...payload],
      };
    default:
      return { ...state };
  }
}
