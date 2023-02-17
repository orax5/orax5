import axios from "axios";
const NFT_COVER = "funding/NFT_COVER";
const SHINCHUNG = "funding/SHINCHUNG";
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
        if (res.status == 201) {
          const data = res.data;
          console.log(data);
          dispatch({
            type: NFT_COVER,
            payload: { data },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// 펀딩 신청
export const shinFunding = (data, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: "http://localhost:3001/creator/shinchung",
      method: "post",
      data: {
        shin_title: data.shinTitle,
        shin_amount: data.shinAmount,
        shin_nft_totalbalance: data.shinTotalBalance,
        shin_cover: data.shinCover,
        shin_period: data.shinPeriod,
        shin_description: data.ShinDescription,
        shin_category: data.shinCategory,
        shin_creator_address: data.shinCreatorCA,
        shin_ispermit: 1,
        com_name: data.composer,
        lyric_name: data.lyricist,
        sing_name: data.singer,
      },
    })
      .then((res) => {
        if (res.status == 201) {
          const data = res.data;
          dispatch({
            type: SHINCHUNG,
            payload: { data },
          });
          router.push("/creator");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const init = {
  imgURL: {},
  shinchung: {},
};

function funding(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case NFT_COVER:
      return { ...state, imgURL: payload.data };

    // case SHINCHUNG:
    //   const shin = { ...payload };
    //   console.log(shin);
    //   return { ...state, shinchung: [...state.shinchung, shin] };
    case SHINCHUNG:
      // return { ...state, shinchung: [...state.shinchung, shin] };
      return { ...state, shinchung: payload.data };

    default:
      return state;
  }
}
export default funding;
