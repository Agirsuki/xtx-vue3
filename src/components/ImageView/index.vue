<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core';
// 图片列表
// const imageList = [
//   "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
//   "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
//   "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
//   "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
//   "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg"
// ]
defineProps({
    imageList: Array
})
// 实时获取当前图片索引
const activeIndex = ref(0)
// 鼠标悬浮中等盒子让大盒子显示
const visible = ref(false)
let timer = null
const targetEnter = () => {
    clearTimeout(timer)
    visible.value = true
}
const targetLeave = () => {
    timer = setTimeout(() => visible.value = false, 500);
}
// 鼠标在中等盒子移动
const target = ref(null) 
let position = ref({})
// 使用vueuse函数获取鼠标位于盒子的位置
const { elementX, elementY } = useMouseInElement(target)
const move = () => {
    // 原生js获取鼠标位于盒子的位置
    // const targetPosition = target.value.getBoundingClientRect()
    let x = /*e.pageX - targetPosition.left - document.documentElement.scrollLeft*/ elementX.value - 100
    let y = /*e.pageY - targetPosition.top - document.documentElement.scrollTop*/ elementY.value - 100
    if(x <= 0) x = 0
    if(x >= 200) x = 200
    if(y <= 0) y = 0
    if(y >= 200) y = 200
    position.value.x = x
    position.value.y = y
}

</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target" @mouseenter="targetEnter" @mouseleave="targetLeave" @mousemove="move">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `${position.x + 'px'}`, top: `${position.y + 'px'}`, display: (visible? 'block': 'none')  }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="activeIndex = i" :class="{ active: activeIndex === i }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[activeIndex]})`,
        backgroundPositionX: `${-2 * position.x + 'px'}`,
        backgroundPositionY: `${-2 * position.y + 'px'}`,
      },
    ]" v-show="visible" @mouseenter="targetEnter" @mouseleave="targetLeave"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>