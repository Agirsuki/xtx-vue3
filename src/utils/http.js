import axios from "axios";

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const request = axios.create({
    baseURL,
    timeout: 5000
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.reject(error)
)
request.interceptors.response.use(
    res => res.data,
    e => Promise.reject(e)
)


export default request