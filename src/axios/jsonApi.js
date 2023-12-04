import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_JSON_SERVER_URL,
});

// instance.interceptors.request.use(
//   function (config) {
//     // 요청을 보내기 전 수행
//     console.log('인터셉트 요청 성공!');
//     return config;
//   },
//   function (error) {
//     // 오류 요청을 보내기 전 수행
//     console.log('인터셉트 요청 오류!');
//     return Promise.reject(error);
//   }
// );

export default instance;
