// 액션 타입
const ADD_LIST = "streaming/ADD_LIST";
const BASE_URL = "http://localhost:3001";
// 액션 함수
export const addList = ({ id, artists, cover, title }) => {
  return async (dispatch, getState) => {
    const addedList = {
      method: "post",
      data: { id, artists, cover, title },
    };
    const data = addedList.data;
    // console.log(data);
    dispatch({
      type: "ADD_LIST",
      payload: data,
    });
  };
};

// 재생버튼 누를 때마다 백에 요청해서 노래정보 가져와서 재생함
export const playSong = (id) => {
  return async (dispatch, getState) => {
    await axios({
      url: `${BASE_URL}/downloadS3/${id}`,
      method: "get",
      data: { id },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => console.log(err));
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
