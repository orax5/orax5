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
        // console.log(data);
        console.log(res);
        router.push("/creator");
      })
      .catch((res) => {
        console.log(res.repsponse.status);
        // if (res.response.data.message) {
        //   alert(res.response.data.message[0]);
        // }
      });
    try {
    } catch (error) {
      alert("회원가입 에러");
    }
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
    });
    const data = creator.data;
    console.log(data);
  };
};
// 크리에이터 이메일 인증
export const checkEmail = () => {
  return async (dispatch, getState) => {
    const isChecked = await axios({
      url: "http://localhost:3001/creator/email-verify",
      method: "post",
    });
    const data = isChecked;
    console.log(data);
  };
};
// 로그인
export const login = (account, email, password, tokenData) => {
  return async (dispatch, getState) => {
    const loginInfo = await ({
      // url: "",
      method: "post",
      data: { user_wallet: account, user_pwd: password, user_email: email },
    })
      // .then(() => {
        const data = loginInfo?.data;
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: { data, tokenData },
        });
      // })
    //   .catch((error) => console.log(error));
    // alert("로그인 에러!");
  };
};

// 스트리밍권
export const ticket = (leftTicket, ttoday) => {
  return async (dispatch, getState) => {
    const data = {leftTicket,ttoday}
    console.log(parseInt(leftTicket))
    console.log(parseInt(ttoday))
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
