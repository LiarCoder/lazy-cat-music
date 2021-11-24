<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:24:44
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-25 02:44:33
-->
<template>
  <div class="stroy-not-implemented">
    <img src="@/assets/images/not_implemented.png" alt="" />
    <span>功能尚未开发完成</span>
  </div>
</template>

<script>
export default {
  name: "Stroytelling",
};
</script>

<style lang="less">
.stroy-not-implemented {
  display: grid;
  img,
  span {
    margin-top: 70px;
    display: block;
    place-self: center;
  }
}
</style>
