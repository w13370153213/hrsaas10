/* eslint-disable indent */
/* eslint-disable eol-last */
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
    // 如果执行 npm run dev  值为 /api 正确  /api 这个代理只是给开发环境配置的代理
    // 如果执行 npm run build 值为 /prod-api  没关系  运维应该在上线的时候 给你配置上 /prod-api的代理
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000 // 定义5秒超时
})
service.interceptors.request.use()
service.interceptors.response.use(response => {
    // axios默认加了一层data
    const { success, message, data } = response.data
    if (success) {
        return data
    } else {
        Message.error(message) // 提示错误信息
        return Promise.reject(new Error(message)) // 返回一个错误
    }
}, error => {
    Message.error(error.message) // 错误提示信息
    return Promise.reject(error) // 返回执行错误 让那个当前的执行连跳出成功，直接进入catch
})
export default service