import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategory } from "@/apis/layout";

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    const getcategoryList = async() => {
        const { result: data } = await getCategory()
        categoryList.value = data
    }
    return {
        categoryList,
        getcategoryList
    }
})