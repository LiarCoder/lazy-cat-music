<!--
 * @Descripttion:
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-19 19:59:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-23 00:15:28
-->
<template lang="">
  <div class="header-top">
    <a href="" class="logo"></a>
    <a href="" class="btn-search"></a>
  </div>
</template>
<script>
export default {
  name: "HeaderTop",
};
</script>
<style lang="less" scoped>
.header-top {
  width: 100%;
  padding-top: 0.0357rem;
  height: 3.2143rem;
  line-height: 3rem;
  background: #2ca2f9;
  position: relative;

  .logo {
    width: 7.286rem;
    height: 1.67857rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.7143rem;
    background: url("~@/assets/images/logo.png") no-repeat;
    background-size: 100%;
  }

  .btn-search {
    width: 1.2143rem;
    height: 1.2143rem;
    background: url("~@/assets/images/search.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 1rem;
    right: 0.7143rem;
    cursor: pointer;
  }
}
</style>
