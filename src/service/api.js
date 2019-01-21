import axios from './http'

// 首页信息
export function getHomeInitDataApi(){
    return axios.request('/home')
}
