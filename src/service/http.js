import axios from 'axios'
// axios 配置
axios.defaults.timeout = 50000;

axios.defaults.baseURL = 'http://localhost:3001';

// axios.defaults.headers.common['sessionid'] = getCookie('token');
// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     MessageBox("请求失败", '提示', {
//       confirmButtonText: '确定'
//     })
//     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//     return Promise.reject(error.response.data)
//   });

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // alert(config.headers.sessionid);
  // alert(getCookie('token'));
  // alert("登录过期");
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default axios;
