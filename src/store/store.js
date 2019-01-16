import * as api from '../service/api'

const state = {
  homeData: {}

}

const mutations = {
  getHomeData(state, status) {
    state.homeData = status
  },

}

const actions = {
  async getHomeDataFn({commit},data){
    let res = await api.getHomeInitDataApi();
    if(res.data.code == 200){
       commit()
    }
    
  }

}


export default {
  state,
  mutations,
  actions
}
