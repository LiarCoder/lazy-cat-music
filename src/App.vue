<!--
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-23 23:05:17
-->
<template>
  <Header />
  <div class="main-body">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="less">
.main-body {
  // 下面这里不能写成 margin-top，否则【新歌】页面的轮播图的顶部就会有一部分被遮住
  padding-top: 6.4286rem;
}
</style>
