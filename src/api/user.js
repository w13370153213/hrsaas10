/* eslint-disable indent */
/* eslint-disable eol-last */
import request from '@/utils/request'
/**
 * 登录接口封装
 * @param {*} data
 * @returns
 */
export function login(data) {
    // 返回一个promise对象
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {

}

export function logout() {

}