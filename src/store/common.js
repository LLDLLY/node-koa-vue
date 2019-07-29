import * as api from '../service/api'
import { Toast } from 'vant';

const state = {
  show:true,
  homeData: {},
  goodsDetail:{},
  goodsComments:{},
  goodsCategories:{},
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
  getGoodsComments(state,data){
    state.goodsComments = data
  },
  getGoodsCategories(state,data){
    state.goodsCategories = data;
  }
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
  },
  async getGoodsCommentsFn({commit}){
    const res = await api.getGoodsCommentApi();
    if(res.data.code == 200){
       commit('getGoodsComments',res.data.data);
    }else {
       Toast("服务器繁忙，请稍后重试");
    }
  },
  async getGoodsCategoriesFn({commit}){
    const res = await api.getCategoriesApi();
    if(res.data.code == 200){
       commit('getGoodsCategories',res.data.data);
    }else {
       Toast("服务器繁忙，请稍后重试");
    }
  }
}

const getters={
  getHomeInitData: state => state.homeData,
  getGoodsDetailGetter:state => state.goodsDetail,
  getGoodSCommentGetter:state => state.goodsComments,
  getgoodsCategoriesGetter:state => state.goodsCategories,
}

export default {
  state,
  mutations,
  actions,
  getters
}
