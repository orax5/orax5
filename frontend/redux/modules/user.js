import Cookies from "js-cookie";
import axios from "axios";
import produce from "immer";
import { PURGE } from "redux-persist";
const BASE_URL = "http://ec2-3-38-20-36.ap-northeast-2.compute.amazonaws.com:3001";
const USER_LOGIN = "user/USER_LOGIN";
const CREATOR_LOGIN = "user/CREATOR_LOGIN";
const ADMIN_LOGIN = "user/ADMIN_LOGIN";
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
        } else {
          alert("에러가 발생했습니다!");
        }
      });
  };
};

// 크리에이터 회원가입
export const signUpCreator = (email, walletAddress, nickname, password, typeOfUser, router) => {
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
          alert("로그인은 이메일 확인 후 가능합니다.");
          console.log("데이터 잘 받음");
          router.push("/login");
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
      .then(function result(res) {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        if ((response.data.statuscode = 500)) {
          console.log(err);
        } else {
          console.log(err);
        }
      });
  };
};

// 유저(+관리자) 로그인
export const userLogin = (account, password, router) => {
  return async (dispatch, getState) => {
    await axios({
      url: `${BASE_URL}/user/login`, // 토큰발급 로그인주소
      method: "post",
      data: { user_wallet: account, user_pwd: password },
    })
      .then((res) => {
        console.log(res);
        const data = res.data;
        const token = data;
        // 쿠키저장
        Cookies.set("jwtToken", token.token);
        // jwtToken 불러오기
        const me = Cookies.get("jwtToken");
        if (res.status == 201) {
          if (res.data.data.user_grade == 1) {
            dispatch({
              type: USER_LOGIN,
              payload: { data },
            });
            alert(`${data.data.user_nickname}님 환영합니다`);
            router.push("/");
            // 관리자 로그인 감지
          } else if (res.data.data.user_grade == 3) {
            dispatch({
              type: ADMIN_LOGIN,
              payload: { data },
            });
            alert("관리자 계정으로 접속되었습니다");
            router.push("/admin");
          }
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
export const creatorLogin = (account, password, router) => {
  return async (dispatch, getState) => {
    await axios({
      // url: `${BASE_URL}/creator/login`,
      url: `${BASE_URL}/creator/login`,
      method: "post",
      data: { user_wallet: account, user_pwd: password },
    })
      .then((res) => {
        console.log(res);
        const data = res.data;
        const token = data;
        Cookies.set("jwtToken", token.token);
        // jwtToken 불러오기
        const me = Cookies.get("jwtToken");
        if (res.status == 201) {
          dispatch({
            type: CREATOR_LOGIN,
            payload: { data },
          });
          alert(`크리에이터 ${data.data.user_nickname}님 환영합니다`);
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
// 로그아웃
export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: PURGE,
    });
  };
};

// 스트리밍권
export const ticket = (leftTicket, ttoday) => {
  return async (dispatch, getState) => {
    const data = { leftTicket, ttoday };
    dispatch({
      type: TICKET,
      payload: { data },
    });
  };
};

// 초기값
const init = {
  users: { user_grade: 0 },
  contracts: {},
  userscontracts: [],
  tickets: {},
};

// 리듀서
export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return produce(state, (draft) => {
        draft.users.user_grade = payload.data.data.user_grade;
      });
    case CREATOR_LOGIN:
      return produce(state, (draft) => {
        draft.users.user_grade = payload.data.data.user_grade;
      });
    case ADMIN_LOGIN:
      return produce(state, (draft) => {
        draft.users.user_grade = payload.data.data.user_grade;
      });
    case TICKET:
      return produce(state, (draft) => {
        draft.users.tickets = payload.data;
      });
    case PURGE: {
      return produce(state, (draft) => {
        draft.users.user_grade;
      });
    }
    default:
      return state;
  }
}
