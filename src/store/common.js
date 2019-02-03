import * as api from '../service/api'
import { Toast } from 'vant';

const state = {
  homeData: {},
  goodsDetail:{}
}

const mutations = {
  getHomeData(state, data) {
    state.homeData = data
  },
  getGoodsDetail(state, data) {
    state.goodsDetail = data
  },
}

const actions = {
  async getHomeDataFn({commit},data){
    let res = await api.getHomeInitDataApi();
    if(res.data.code == 200){
       commit('getHomeData',res.data.data);
    }else {
       Toast("服务器繁忙，请稍后重试");
    }
  },
  async getGoodsDetailFn({commit},data){
    let res = await api.getGoodsDetailApi(data);
    if(res.data.code == 200){
      // commit('mutation处理函数名字'，数据)
       commit('getGoodsDetail',res.data.data);
    }else {
       Toast("服务器繁忙，请稍后重试");
    }
  }

}
const getters={
  getHomeInitData: state =>state.homeData,
  getGoodsDetailGetter:state =>state.goodsDetail
}

export default {
  state,
  mutations,
  actions,
  getters
}