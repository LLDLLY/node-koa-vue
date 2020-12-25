import * as api from '../service/api'

const state = {
  show: true,
  homeData: {},
  goodsDetail: {},
  goodsComments: {},
  goodsCategories: {},
}

const mutations = {
  changeShow(state, data) {
    state.show = data
  },
  getHomeData(state, data) {
    state.homeData = data
  },
  getGoodsDetail(state, data) {
    state.goodsDetail = data
  },
  getGoodsComments(state, data) {
    state.goodsComments = data
  },
  getGoodsCategories(state, data) {
    state.goodsCategories = data;
  }
}

const actions = {
  async getHomeDataFn({ commit }, data) {
    let res = await api.getHomeInitDataApi();
    if (res.code == 200) {
      commit('getHomeData', res.data);
    }
  },
  async getGoodsDetailFn({ commit }, data) {
    let res = await api.getGoodsDetailApi(data);
    if (res.code == 200) {
      // commit('mutation处理函数名字'，数据)
      commit('getGoodsDetail', res.data);
    }
  },
  async getGoodsCommentsFn({ commit }) {
    const res = await api.getGoodsCommentApi();
    if (res.code == 200) {
      commit('getGoodsComments', res.data);
    }
  },
  async getGoodsCategoriesFn({ commit }) {
    const res = await api.getCategoriesApi();
    if (res.code == 200) {
      commit('getGoodsCategories', res.data);
    }
  }
}

const getters = {
  getHomeInitData: state => state.homeData,
  getGoodsDetailGetter: state => state.goodsDetail,
  getGoodSCommentGetter: state => state.goodsComments,
  getgoodsCategoriesGetter: state => state.goodsCategories,
}

export default {
  state,
  mutations,
  actions,
  getters
}
