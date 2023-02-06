// 액션 타입
const ADD_LIKED = "nft/ADD_LIKED";

// 액션 함수
export const addLiked = (id) => {
  return async (dispatch, getState) => {
    const likedNft = {
      method: "post",
      // 우선 id 받게 해놨는데 찜한 상품 어떻게 처리하는지에 따라서 받을 data 변경할 예정
      data: { id },
    };
    const data = likedNft.data;
    console.log(data);
    dispatch({
      type: "ADD_LIKED",
      payload: data,
    });
  };
};

// 초기값 0
const init = {
  likedNft: [],
};

// 리듀서
export default function nft(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_LIKED:
      return {
        ...state,
        likedNft: [...payload],
      };
    default:
      return { ...state };
  }
}
