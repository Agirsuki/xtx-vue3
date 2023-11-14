import { ref, onMounted } from 'vue'
import { getBannerList } from '@/apis/home'

// 轮播图
export const useBanner = () => {
    const bannerList = ref([])
    const getBanner = async() => {
        const { result } = await getBannerList({ distributionSite: '2' })
        bannerList.value = result
    }
    onMounted(() => getBanner())

    return {
        bannerList
    }
}