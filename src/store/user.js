import * as api from '../service/api'
import { Toast } from 'vant';

const state = {
    show: true,
    userData: {}
}

const mutations = {
    changeShow(state, data) {
        state.show = data
    },
    setUserData(state, data) {
        state.userData = data
    },
}

const actions = {
    async getHomeDataFn({ commit }, data) {
        let res = await api.getHomeInitDataApi();
        if (res.data.code == 200) {
            commit('getHomeData', res.data.data);
        } else {
            Toast("服务器繁忙，请稍后重试");
        }
    },
    userRegisterFn({ commit }, data) {
        return new Promise((resolve, reject) => {
            api.userRegisterApi(data).then(res => {
                resolve(res);
            }, (error) => {
                Toast("服务器繁忙，请稍后重试");
                reject(error);
            })
        });
    },
    async userLoginFn({ commit }, data) {
        let res = await api.userLoginApi(data);
        if (res.data.code == 200) {
            console.log(res.data)
            commit('setUserData', res.data.data);
        } else {
            Toast("服务器繁忙，请稍后重试");
        }
    }
}

const getters = {
    getUserData: state => state.userData,

}

export default {
    state,
    mutations,
    actions,
    getters
}
