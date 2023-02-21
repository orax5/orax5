import axios from "axios";
import produce from "immer";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3001";

const NFT_COVER = "funding/NFT_COVER";
const FUND_DATA = "funding/FUND_DATA";
const token = Cookies.get("jwtToken");

// 이미지 전송해서 S3변환 주소 돌려받기
export const uploadImage = (formData) => {
  return async (dispatch, getState) => {
    await axios({
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
// 크리에이터가 펀딩 오픈하기
export const openFunding = (id) => {
  return async (dispatch, getState) => {
    await axios({
      url: `http://localhost:3001/openfunding/${id}`,
      method: "post",
      headers: {
      Authorization: `Bearer ${token}`,
      },
      data: { shinId: id },
    })
      .then((res) => {
        const data = { balance : res.data.balance, tokenId: res.data.tokenId, metaData: res.data.metaData };
        console.log(res.data);
        dispatch({
          type: FUND_DATA,
          payload: { data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const init = {
  imgURL: {},
  funding: {},
};

export default function funding(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case NFT_COVER:
      return { ...state, imgURL: payload.data };
    case FUND_DATA:
      console.log(payload);
      return { ...state, funding: payload.data };

    default:
      return state;
  }
}
