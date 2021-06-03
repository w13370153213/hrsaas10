/* eslint-disable indent */
/* eslint-disable eol-last */
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
// Vuex的持久化 如何实现 ？ Vuex和前端缓存相结合
const state = {
        token: getToken() // 设置token初始状态   token持久化 => 放到缓存中
    }
    // 修改状态
const mutations = {
    // 设置token
    setToken(state, token) {
        state.token = token // 设置token  只是修改state的数据  123 =》 1234
            // 同步给缓存
        setToken(token)
    },
    // 删除缓存
    removeToken(state) {
        state.token = null // 将vuex的数据置空 ，vuex置空了缓存也需要置空
        removeToken() // 同步缓存
    }
}
const actions = {
    async login(context, data) {
        // 调用接口
        const result = await login(data)
        context.commit('setToken', result) // 提交mutations 设置token
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}