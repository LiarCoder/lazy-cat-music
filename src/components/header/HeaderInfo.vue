<!--
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-19 20:11:33
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-28 15:45:02
-->
<template lang="">
  <div class="header-info-container">
    <span class="go-back">
      <img src="~@/assets/images/goback_icon_gray.png" alt="返回按钮" />
    </span>
    热门歌手
  </div>
</template>
<script>
export default {
  name: "HeaderInfo",
};
</script>
<style lang="less">
.header-info-container {
  // z-index: 999;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  padding: 0 2.1429rem;
  position: relative;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0 auto;
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .go-back {
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.1429rem;
    height: 2.8031rem;

    img {
      width: 0.85714rem;
      height: 1.42857rem;
    }
  }
}
</style>
