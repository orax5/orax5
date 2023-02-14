import axios from "axios";
const NFT_COVER = "funding/NFT_COVER";
const BASE_URL = "http://localhost:3001";

// 이미지 전송해서 S3변환 주소 돌려받기
export const uploadImage = (formData) => {
  return async (dispatch, getState) => {
    const imageURL = await axios({
      url: `${BASE_URL}/uploadS3/image`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        const data = res.data.location;
        console.log(data);
        dispatch({
          type: NFT_COVER,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const init = {
  imgURL: {},
  grade: [{ user: 1 }, { creator: 2 }, { admin: 3 }],
};

function funding(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case NFT_COVER:
      return { ...state, imgURL: payload };

    default:
      return { ...state };
  }
}
export default funding;
