<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-19 20:10:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-21 16:59:48
-->
<template lang="">
  <van-tabs v-model:active="active">
    <van-tab title="新歌">内容1</van-tab>
    <van-tab title="排行">内容2</van-tab>
    <van-tab title="歌单">内容3</van-tab>
    <van-tab title="歌手">内容4</van-tab>
    <van-tab title="听书">内容4</van-tab>
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
/deep/ .van-tabs__wrap {
  font-family: "Microsoft Yahei";
  font-size: 1rem;
  background: #fff;
  height: 3.2143rem !important;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
  padding: 0 0.7143rem;

  .van-tab {
    line-height: 3rem;
  }

  .van-tab__text {
    height: 100%;
    line-height: 3rem;
    font-size: 1.1429rem;
  }

  .van-tabs__line {
    width: 20%;
    height: 0.2143rem;
    margin-bottom: 1px;
    background-color: #33a3f5;
    border-radius: 0;
  }
}
</style>
