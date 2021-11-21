<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-19 19:50:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-21 17:02:04
-->
<template lang="">
  <div class="header-container">
    <HeaderTop />
    <HeaderNav v-if="false" />
    <HeaderInfo v-else />
  </div>
</template>
<script>
import HeaderTop from "./HeaderTop";
import HeaderInfo from "./HeaderInfo";
import HeaderNav from "./HeaderNav";

export default {
  name: "Header",
  components: {
    HeaderTop,
    HeaderInfo,
    HeaderNav,
  },
};
</script>
<style lang="less">
.header-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 120;
}
</style>
