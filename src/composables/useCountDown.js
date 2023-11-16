import { ref, computed, onUnmounted } from "vue"
import dayjs from "dayjs"
export const useCountDown = () => {
    let timer = null
    const time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    const start = (paramTime) => {
        time.value = paramTime
        timer = setInterval(() => {
            time.value--
                if (time.value === 0) clearInterval(timer)
        }, 1000)
    }
    onUnmounted(() => timer && clearInterval(timer))
    return {
        start,
        formatTime
    }
}