import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

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
    e => {
        ElMessage({
            type: 'error',
            message: e.response.data.message
        })
        return Promise.reject(e)
    }
)


export default request