import axios from "axios";

const LOGIN = "user/LOGIN";
const TICKET = "user/TICKET";

// 유저 회원가입
export const signUpUser = (email, walletAddress, nickname, password, typeOfUser, router) => {
  return async (dispatch, getState) => {
    const user = await axios({
      url: "http://localhost:3001/user/signup",
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
        const data = res.data;
        router.push("/login");
        alert(`${data.user_nickname}님 가입을 환영합니다!`);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status == 500) {
          alert("이미 존재하는 이메일 혹은 지갑주소 입니다");
        }
      });
  };
};
// 크리에이터 이메일 인증
export const checkEmail = (email) => {
  return async (dispatch, getState) => {
    await axios({
      url: "http://localhost:3001/creator/email-verify",
      method: "post",
      data: { user_email: email },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        alert("이메일 인증 완료!");
      })
      .catch((err) => console.log(err));
  };
};
// 크리에이터 회원가입
export const signUpCreator = (email, walletAddress, nickname, password, typeOfUser) => {
  return async (dispatch, getState) => {
    const creator = await axios({
      url: "http://localhost:3001/creator/signup",
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
        const data = res.data;
        router.push("/login");
        alert(`크리에이터 ${data.user_nickname}님 가입을 환영합니다!`);
      })
      .catch((res) => {
        console.log(res.response.data.statuscode);
        // router.push("/login/join");
      });
  };
};

// 유저 로그인
export const userLogin = (account, email, password, tokenData, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: "http://localhost:3001/user/login",
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: { data, tokenData },
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 400) {
          return alert("존재하지 않는 계정입니다");
        } else if (err.response.status == 401) {
          return alert("이메일 토큰 오류");
        } else {
          return alert("뭔가 잘못됨;;");
        }
      });
  };
};
// 크리에이터 로그인
export const creatorLogin = (account, email, password, tokenData, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: "http://localhost:3001/cretor/login",
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: { data, tokenData },
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 400) {
          return alert("존재하지 않는 계정입니다");
        } else if (err.response.status == 401) {
          return alert("이메일 토큰 오류");
        } else {
          return alert("뭔가 잘못됨;;");
        }
      });
  };
};

// 스트리밍권
export const ticket = (leftTicket, ttoday) => {
  return async (dispatch, getState) => {
    const data = { leftTicket, ttoday };
    console.log(leftTicket);
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
  users: {},
  contracts: {},
  tickets: {},
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, users: payload.data, contracts: payload.tokenData };
    case TICKET:
      return { ...state, tickets: payload.data };
    default:
      return { ...state };
  }
}
