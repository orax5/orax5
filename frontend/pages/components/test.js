// 유저 로그인 테스트
export const testUserLogin = (account, password, tokenData, router) => {
  return async (dispatch, getState) => {
    await axiosInstance({
      url: `/user/login`,
      method: "post",
      data: { user_wallet: account, user_pwd: password },
    })
      .then( (res) => {
        // 여기가 로그인 요청 보내고 받는 곳인듯
        console.log(res);
        const data = res.data;
        const token = data;
        Cookies.set('jwtToken', token); // 쿠키에 저장
        // 다른 api 요청보낼 때 토큰 담아보내는법
        /*
          const token = Cookies.get('jwtToken')
          const response = await axios.get('api요청',{
            headers:{
              Authorization: `Bearer ${token}`,
            }
          })
        */ 
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