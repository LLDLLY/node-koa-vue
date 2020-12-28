import * as api from "../request/api";

const state = {
  show: true,
  homeData: {},
  goodsDetail: {},
  goodsComments: {},
  goodsCategories: {}
};

const mutations = {
  setState(state, data) {
    if (!data || JSON.stringify(data) === "{}") {
      return;
    }
    if (Object.prototype.toString.call(data) !== "[object Object]") {
      throw "setState数据格式错误！";
    }
    const keys = Object.keys(data);
    keys.forEach(item => {
      state[item] = data[item];
    });
  },
  changeShow(state, data) {
    state.show = data;
  }
};

const actions = {
  async getHomeDataFn({ commit }, data) {
    let res = await api.getHomeInitDataApi();
    if (res.code == 200) {
      commit("setState", { homeData: res.result });
    }
  },
  async getGoodsDetailFn({ commit }, data) {
    let res = await api.getGoodsDetailApi(data);
    if (res.code == 200) {
      commit("setState", { goodsDetail: res.result });
    }
  },
  async getGoodsCommentsFn({ commit }) {
    const res = await api.getGoodsCommentApi();
    if (res.code == 200) {
      commit("setState", { goodsComments: res.result });
    }
  },
  async getGoodsCategoriesFn({ commit }) {
    const res = await api.getCategoriesApi();
    if (res.code == 200) {
      commit("setState", { goodsCategories: res.result });
    }
  }
};

const getters = {
  getHomeInitData: state => state.homeData,
  getGoodsDetailGetter: state => state.goodsDetail,
  getGoodSCommentGetter: state => state.goodsComments,
  getgoodsCategoriesGetter: state => state.goodsCategories
};

export default {
  state,
  mutations,
  actions,
  getters
};
