import axios from "./index";

// 首页信息
export function getHomeInitDataApi() {
  return axios.get("/home");
}

// 城市数据
export function getCityApi() {
  return axios.get("/city");
}

// 商品详情
export function getGoodsDetailApi(id) {
  return axios.get(`/goods/getGoodsDetail`, { params: { id: id } });
}

export function getGoodsCommentApi() {
  return axios.get(`/goods/commentsList`);
}

export function getCategoriesApi() {
  return axios.get(`/goods/getCategories`);
}

export function getCategoriesChildApi(id) {
  return axios.get(`/goods/getCategoriesChild`, { params: { id: id } });
}

export function getCategoriesListApi(data) {
  return axios.post(`/goods/getCategoriesChildList`, { ...data });
}

// user
export function userRegisterApi(data) {
  return axios.post(`/user/register`, { ...data });
}

export function userLoginApi(data) {
  return axios.post(`/user/login`, { ...data });
}
