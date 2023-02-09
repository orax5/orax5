import axios from "axios";
const NFT_COVER = "funding/NFT_COVER";

// // 이미지 전송해서 S3변환 주소 돌려받기
// export const uploadImage = (formData) => {
//   return async (dispatch, getState) => {
//     // console.log(sendImg);
//     const imageURL = await axios({
//       url: "http://localhost:3001/uploadS3/image",
//       // url: "http://192.168.0.129:3001/uploadS3/image",
//       method: "post",
//       data: formData,
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     const { data } = imageURL;
//     console.log(data);
//     dispatch({
//       type: NFT_COVER,
//       payload: data,
//     });
//   };
// };
// 이미지 전송해서 S3변환 주소 돌려받기
export const uploadImage = (formData) => {
  return async (dispatch, getState) => {
    const imageURL = await {
      // url: "http://localhost:3001/uploadS3/image",
      method: "post",
      data: formData,
    };
    const data = imageURL.data;
    console.log(data);
    dispatch({
      type: NFT_COVER,
      payload: data,
    });
  };
};

const init = {
  imgURL: {},
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
