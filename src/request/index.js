import axios from "axios";
import BASE_URL from "./base.url";
import Request from "./request.config";

axios.defaults.timeout = 3000; // 3秒超时
axios.defaults.baseURL = BASE_URL;

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return Request.requestConfig(config);
  },
  error => {
    // 失败了做的一些事
    return Request.requestError(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  res => {
    // 对返回的数据做一些处理
    return Request.responseConfig(res);
  },
  error => {
    // 失败了做的一些事
    return Request.reponseError(error);
  }
);

export default axios;
