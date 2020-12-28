import * as api from "../request/api";
import { Toast } from "vant";
import { Utils, CONSTANT } from "../utiles/modules-index";

const state = {
  show: true,
  userToken: ""
};

const mutations = {
  changeShow(state, data) {
    state.show = data;
  },
  setUserToken(state, data) {
    state.userToken = data;
  }
};

const actions = {
  userRegisterFn({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.userRegisterApi(data).then(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  userLoginFn({ commit }, data) {
    return new Promise(async resolve => {
      let res = await api.userLoginApi(data);
      let result = res.result || null;
      resolve(result);
      if (res.success) {
        Utils.setLocal(CONSTANT.LOCAL_TOKEN_NAME, result.token);
      } else {
        Toast(res.mess);
      }
    });
  }
};

const getters = {
  getToken: state => state.userToken
};

export default {
  state,
  mutations,
  actions,
  getters
};
