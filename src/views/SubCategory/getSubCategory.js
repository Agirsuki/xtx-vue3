import { getSubCategoryAPI } from '@/apis/category.js';
import { subCategory } from './index.vue';

export const getSubCategory = async() => {
    const { result } = await getSubCategoryAPI();
    subCategory.value = result;
};