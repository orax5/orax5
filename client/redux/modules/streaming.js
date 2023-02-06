// 액션 타입
const ADD_LIST = "streaming/ADD_LIST";

// 액션 함수
export const addList = ({ id, artists, cover, title }) => {
  return async (dispatch, getState) => {
    const addedList = {
      method: "post",
      data: { id, artists, cover, title },
    };
    const data = addedList.data;
    console.log(data);
    dispatch({
      type: "ADD_LIST",
      payload: data,
    });
  };
};

// 초기값 0
const init = {
  playList: [],
};

// 리듀서
export default function streaming(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_LIST:
      const addedsong = { ...payload };
      return { ...state, playList: [...state.playList, addedsong] };
    default:
      return { ...state };
  }
}
