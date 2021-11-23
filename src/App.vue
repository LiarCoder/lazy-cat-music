<!--
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-23 14:45:31
-->
<template>
  <Header />
  <div class="main-body">
    <router-view></router-view>
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
  margin-top: 6.4286rem;
}
</style>
