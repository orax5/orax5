import axios from "axios";
import axiosInstance from "../../api/axiosInstance";
import produce from "immer";
const BASE_URL = "http://localhost:3001";
const LOGIN = "user/LOGIN";
const CREATOR_LOGIN = "user/CREATOR_LOGIN";
const TICKET = "user/TICKET";

// 유저 회원가입
export const signUpUser = (email, walletAddress, nickname, password, typeOfUser, router) => {
  return async (dispatch, getState) => {
    const user = await axios({
      url: `${BASE_URL}/user/signup`,
      method: "post",
      data: {
        user_email: email,
        user_wallet: walletAddress,
        user_nickname: nickname,
        user_pwd: password,
        user_grade: typeOfUser,
      },
    })
      .then((res) => {
        console.log(res); // 입력한 데이터 전체가 들어옴
        alert("가입완료");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 500) {
          alert("이미 존재하는 이메일 혹은 지갑주소 입니다");
        }
      });
  };
};
// 크리에이터 회원가입
export const signUpCreator = (email, walletAddress, nickname, password, typeOfUser) => {
  return async (dispatch, getState) => {
    const creator = await axios({
      url: `${BASE_URL}/creator/signup`,
      method: "post",
      data: {
        user_email: email,
        user_wallet: walletAddress,
        user_nickname: nickname,
        user_pwd: password,
        user_grade: typeOfUser,
      },
    })
      .then((res) => {
        if (res.status == 201) {
          console.log("데이터 잘 받음");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.statuscode == 400) {
          alert("이미 존재하는 정보입니다");
          return err;
        } else {
          alert("알 수 없는 에러!");
        }
        return err;
      });
  };
};
// 크리에이터 이메일 인증
export const checkEmail = (email, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: `${BASE_URL}/creator/email-verify`,
      method: "post",
      data: { user_email: email },
    })
      // .then((res) => {
      //   const data = res.data;
      //   console.log(data); // 메일 전송되었으면 true
      // })
      .then(function result(res) {
        const tt = res.data;
        console.log(tt);
        return tt;
      })
      .catch((err) => {
        console.log(err);
        if ((response.data.statuscode = 500)) {
          alert("이메일 인증 오류");
        }
      });
  };
};

// 유저 로그인 테스트
export const testUserLogin = (account, email, password, tokenData, router) => {
  console.log(tokenData);
  console.log("여긴 액션함수");
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      payload:  { account,tokenData } ,
    });
    // await axiosInstance({
    //   url: `/user/login`,
    //   method: "post",
    //   data: { user_wallet: account, user_pwd: password, user_email: email },
    // })
      // .then((res) => {
      //   console.log(res);
      //   const data = res.data;
      //   if (res.status == 201) {
      //     dispatch({
      //       type: LOGIN,
      //       payload: { data, tokenData },
      //     });
      //     alert(`${data.user_nickname}님 환영합니다`);
      //     router.push("/");
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   if (err.response.status == 400) {
      //     return alert("존재하지 않는 계정입니다");
      //   } else if (err.response.status == 401) {
      //     return alert("이메일 토큰 오류");
      //   } else {
      //     return alert("에러가 발생했습니다");
      //   }
      // });
  };
};

// 유저 로그인
export const userLogin = (account, email, password, tokenData, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: `${BASE_URL}/user/login`,
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    })
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (res.status == 201) {
          dispatch({
            type: LOGIN,
            payload: { data, tokenData },
          });
          alert(`${data.user_nickname}님 환영합니다`);
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          return alert("존재하지 않는 계정입니다");
        } else if (err.response.status == 401) {
          return alert("이메일 토큰 오류");
        } else {
          return alert("에러가 발생했습니다");
        }
      });
  };
};
// 크리에이터 로그인
export const creatorLogin = (account, email, password, tokenData, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: `${BASE_URL}/creator/login`,
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    })
      .then((res) => {
        const data = res.data;
        if (res.status == 201) {
          dispatch({
            type: CREATOR_LOGIN,
            payload: { data, tokenData },
          });
          alert(`크리에이터 ${data.user_nickname}님 환영합니다`);
          router.push("/creator");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          return alert("존재하지 않는 계정입니다");
        } else if (err.response.status == 401) {
          return alert("이메일 토큰 오류");
        } else {
          console.log(err);
          return alert("존재하지 않는 계정입니다");
        }
      });
  };
};

// 스트리밍권
export const ticket = (leftTicket, ttoday) => {
  return async (dispatch, getState) => {
    const data = { leftTicket, ttoday };
    console.log(parseInt(leftTicket));
    console.log(parseInt(ttoday));
    dispatch({
      type: TICKET,
      payload: { data },
    });
  };
};

// export const SaleReg = (offerAccount,offerAmount,offerPrice) => {
//   return async (dispatch, getState) => {
//     const SaleInfgo = {
//       data: {offerAccount,offerAmount,offerPrice},
//     };
//     const data = SaleInfgo.data;
//     console.log(data)
//     dispatch({
//       type: SALEREG,
//       payload: data
//     })
//   }
// }

// 초기값
const init = {
  users : null,
  contracts : {

  },
  tickets : null,
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return produce(state, (draft) => {
        // draft.users = payload.account;
        draft.contracts = payload.tokenData;
      });
 
    default:
      return state;
  }
}

// // 옛날 리듀서
// export default function user(state = init, action) {
//   const { type, payload } = action;
//   console.log(payload);
//   console.log("여긴 리듀서 부분");
//   switch (type) {
//     case LOGIN:
//       return { ...state, users: payload.data, contracts: payload.tokenData };

//     case CREATOR_LOGIN:
//       return { ...state, users: payload.data, contracts: payload.tokenData };

//     case TICKET:
//       return { ...state, tickets: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default function user(state = init, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case LOGIN:
//       return produce(state, (draft) => {
//         draft.users.push(payload.data);
//       });
 
//     default:
//       return state;
//   }
// }