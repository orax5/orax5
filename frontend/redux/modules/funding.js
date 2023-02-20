import axios from "axios";
import produce from "immer";

const NFT_COVER = "funding/NFT_COVER";
const BASE_URL = "http://localhost:3001";
const METADATAS = "funding/METADATAS";

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
export const adminPermit = (id) => {
  return async (dispatch, getState) => {
    // 승인하면 1) state 변경하고
    await axios({
      url: `${BASE_URL}/admin/mypage/permit/${id}`,
      method: "post",
      data: { fundingID: id },
    }).then((res) => {
      console.log(res);
      // 2) 메타데이터 생성해서 funding 테이블에 담는다
      axios({
        url: `http://localhost:3001/openfunding/${id}`,
        method: "post",
        data: { shinId: id },
      })
        .then((res) => {
          // 얘네를 들고있다가 유저가 펀딩 시작하기 즉, 민팅할 때 인자로 넘겨줘야 한다 여기의 tokenId가 바로 그 tokenId
          const data = res.data;
          dispatch({ type: METADATAS, payload: data });
        })
        .catch((err) => {
          console.log(err);
        });
    });
    console.log(id);
  };
};

const init = {
  imgURL: {},
  metadata: { tokenId: 0, metaData: null },
};

export default function funding(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case NFT_COVER:
      return { ...state, imgURL: payload.data };
    case METADATAS:
      return produce(state, (draft) => {
        draft.metadata.metaData = payload.metaData;
        draft.metadata.tokenId = payload.tokenId;
      });
    default:
      return state;
  }
}
