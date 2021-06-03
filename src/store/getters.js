/* eslint-disable indent */
const getters = {
        sidebar: state => state.app.sidebar,
        device: state => state.app.device,
        token: state => state.user.token // 建立token的快捷访问
    }
    // eslint-disable-next-line eol-last
export default getters