<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-19 19:50:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-09 23:12:32
-->
<template lang="">
  <div class="header-container">
    <HeaderTop />
    <HeaderInfo v-if="isShowHeaderInfo" />
    <HeaderNav v-else />
  </div>
</template>
<script>
import HeaderTop from "./HeaderTop";
import HeaderInfo from "./HeaderInfo";
import HeaderNav from "./HeaderNav";
import useMapper from "@/hooks/useMapper";

export default {
  name: "Header",
  components: {
    HeaderTop,
    HeaderInfo,
    HeaderNav,
  },

  setup() {
    let { useState } = useMapper();
    return { ...useState("header", ["isShowHeaderInfo"]) };
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
