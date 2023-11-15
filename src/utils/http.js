import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const request = axios.create({
    baseURL,
    timeout: 5000
})

request.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        const token = userStore.token
        if (token) config.headers.Authorization = `Bearer ${token}`
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