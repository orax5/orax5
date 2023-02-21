// import axios from "axios";

// const BASE_URL = "http://localhost:3001";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   timeout: 1000,
//   withCredentials: true,
// });

// // 보낼때 API에 접속할 때
// axios.interceptors.request.use((config) => {
//   if (!config.headers) return config;
//   console.log("request@@@@@@@@@@@@@@@@@",config);
//   //const refreshToken = localStorage.getItem("refreshToken"); ///
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken !== null) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// // 응답을 받았을 때, 토큰을 받았을 때
// axios.interceptors.response.use((config) => {
//   if (!config.headers) return config;
//   //console.log("response@@@@@@@@@@@@@@@@@",config.headers);
//   const accessToken = config.data?.token?.split("Bearer")[0]; //"Bearer eyjOjspdf... "
//   console.log(accessToken);
//   //const refreshToken = config.headers?.JWT_SECRET2;
//   // localStorage.setItem("refreshToken", refreshToken); ///
//   localStorage.setItem("accessToken", accessToken);

//   //console.log(config.status===401&& localStorage.setItem("accessToken", ""));

//   return config;
// });

// export default axiosInstance;



