<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category.js'

onMounted(() => {
    const categoryStore = useCategoryStore()
    categoryStore.getcategoryList()
})


</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- // 添加key 破坏复用机制 强制销毁重建  -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>