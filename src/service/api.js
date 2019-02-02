import axios from './http'

// 首页信息
export function getHomeInitDataApi() {
    return axios.request('/home')
}
// 商品详情
export function getGoodsDetailApi(id) {
    return axios.get(`/goods/getGoodsDetail`, { params: { id: id } })
}