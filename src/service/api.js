import axios from './http'

// 首页信息
export function getShoppingMallInfo(){
    return axios.request('/api/index')
}
