<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:20:17
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-24 14:33:59
-->
<template>
  <!-- <van-swipe :autoplay="3000" lazy-render> -->
  <van-swipe :autoplay="0" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <a href="">
        <img :src="image" />
      </a>
    </van-swipe-item>
  </van-swipe>

  <van-cell title="时代少年团 - 醉">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>

  <van-cell title="王琪 - 压岁">
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>

  <van-cell title="李玉刚、MiniG迷你机 - 东方不败SWORDSMAN">
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "LatestSong",
  setup() {
    const images = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg",
    ];
    return { images };
  },
};
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
  margin-top: 0.3571rem;
  background: #fff;
  overflow: hidden;
  position: relative;
  visibility: visible;
  .van-swipe-item {
    a {
      max-width: 100%;
      margin: 0 auto;
      display: block;
      img {
        max-width: 100%;
        margin: 0 auto;
        // height: 164px;
        height: 8.5714rem;
        display: block;
      }
    }
  }
}
.van-cell {
  padding: 0 0 0 1.0714rem;
  height: 4.0714rem;
  align-items: center;
  font-size: 1rem;
  // border-bottom: 1px solid #d8d6d6;

  .van-cell__title + div {
    height: 100%;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      cursor: pointer;
      text-align: center;
      font-style: normal;
      width: 1.0357rem;
      height: 1.0814rem;
      // margin-top: 1.5rem;
      display: inline-block;
      background: url("~@/assets/images/download_icon.png") no-repeat;
      background-size: 100%;
    }
  }
  &::after {
    // border-bottom: 1px solid var(--van-cell-border-color);
    border-bottom: 1px solid #cecaca;
    width: 100%;
  }
}
</style>
