import { getCategory } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export const useCategory = () => {
    const route = useRoute()
    const category = ref({})
    const getCategoryData = async(id = route.params.id) => {
        const { result } = await getCategory(id)
        category.value = result
    }
    onMounted(() => getCategoryData())

    // 避免组件复用导致生命周期钩子只执行一次
    // watch(
    //     () => route.params.id, 
    //     () => getCategoryData()
    // )
    // 路由发生改变 重新发送请求
    onBeforeRouteUpdate((to) => getCategoryData(to.params.id))

    return {
        category
    }
}