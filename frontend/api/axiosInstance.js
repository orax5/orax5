// import axios from "axios";

// const BASE_URL = "http://localhost:3001";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   timeout: 1000,
//   withCredentials: false,
// });

// axios.interceptors.request.use((config) => {
//   if (!config.headers) return config;

//   const refreshToken = localStorage.getItem("refreshToken"); ///
//   const accessToken = localStorage.getItem("accessToken");

//   if (accessToken !== null) {
//     config.headers.Authorization = `Bearer ${token}`;
//     config.headers.JWT_SECRET = accessToken;
//     config.headers.JWT_SECRET2 = refreshToken;
//   }

//   return config;
// });

// axios.interceptors.response.use((config) => {
//   if (!config.headers) return config;

//   const accessToken = config.headers?.JWT_SECRET;
//   const refreshToken = config.headers?.JWT_SECRET2;
//   localStorage.setItem("refreshToken", refreshToken); ///
//   localStorage.setItem("accessToken", accessToken);

//   if (accessToken !== null) {
//     config.headers.Authorization = `Bearer ${token}`;
//     config.headers.JWT_SECRET = accessToken;
//   }
//   return config;
// });

// export default axiosInstance;
