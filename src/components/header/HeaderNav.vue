<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-19 20:10:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:26:46
-->
<template lang="">
  <van-tabs v-model:active="active" color="#33a3f5" title-active-color="#33a3f5" line-width="20%">
    <van-tab title="新歌" to="/latest-song"></van-tab>
    <van-tab title="排行" to="/rank"></van-tab>
    <van-tab title="歌单" to="/playlist"></van-tab>
    <van-tab title="歌手" to="/singer"></van-tab>
    <van-tab title="听书" to="/storytelling"></van-tab>
  </van-tabs>
</template>
<script>
import { ref } from "vue";

export default {
  name: "HeaderNav",
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
<style lang="less" scoped>
:deep(.van-tabs__wrap) {
  font-size: 1rem;
  background: #fff;
  height: 3.2143rem !important;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
  padding: 0 0.7143rem;

  .van-tab__text {
    color: #333;
    height: 100%;
    line-height: 3rem;
    font-size: 1.1429rem;
  }

  .van-tabs__line {
    height: 0.2143rem;
    margin-bottom: 1px;
    border-radius: 0;
  }
}
</style>
