import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";
import router from "@/router";

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
            // 处理 401 身份验证失效
        if (e.response.status === 401) {
            const userStore = useUserStore()
            userStore.clearUserInfo()
            router.push('/login')
        }
        return Promise.reject(e)
    }
)


export default request