<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category.js'
import GoodsItem from '../Home/components/GoodsItem.vue';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 获取面包屑导航数据
const route = useRoute()
const category = ref({})
const getCategory = async () => {
    const { result } = await getCategoryFilterAPI(route.params.id)
    category.value = result
}
onMounted(() => getCategory())

const goodsList = ref ({})
const data = ref({
  categoryId: route.params.id, 
  page: 1, 
  pageSize: 20, 
  sortField: 'publishTime'
})
const getSubCategory = async () => {
    const { result } = await getSubCategoryAPI(data.value)
    console.log(result);
    goodsList.value = result
}
onMounted(() => getSubCategory())

const tabChange = () => getSubCategory()

// 获取更多数据
const disabled = ref(false)
const load = async () => {
    data.value.page++
    const { result } = await getSubCategoryAPI(data.value)
    console.log(result);
    goodsList.value.items = [...goodsList.value.items, ...result.items]
    if(result.page >= result.pages) disabled.value = true
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${category.parentId}` }">{{ category.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-click="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="item in goodsList.items" :key="item.id" :good="item"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>