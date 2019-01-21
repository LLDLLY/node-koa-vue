import * as api from '../service/api'
import { Toast } from 'vant';

const state = {
  homeData: {}
}

const mutations = {
  getHomeData(state, data) {
    state.homeData = data
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
  }

}
const getters={
  getHomeInitData: state =>state.homeData
}

export default {
  state,
  mutations,
  actions,
  getters
}
