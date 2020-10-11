import url from "./url"
import axios from "../utils/http"
const api = {
    //获取新闻列表 7001
    getNewsList(params) {
        return axios.post(url.base + url.newsList + url.appKey, params);
    },
    //获取新闻列表 5004
    getAll(params) {
        return axios.post(url.base + url.getAll + url.appKey, params);
    }
}

export default api