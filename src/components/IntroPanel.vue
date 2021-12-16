<!--
 * @Description: 封装【介绍面板】组件
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-16 16:37:06
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:41:43
-->

<template>
  <div class="intro">
    <p :class="{ 'intro-hide': isHideIntro }">{{ intro }}</p>
    <div @click="toggleIntro()"><i :class="{ 'intro-hide': isHideIntro }"></i></div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "IntroPanel",
  props: ["intro"],
  setup() {
    let isHideIntro = ref(true);

    let toggleIntro = () => {
      isHideIntro.value = !isHideIntro.value;
    };
    return { isHideIntro, toggleIntro };
  },
};
</script>

<style lang="less" scoped>
.intro {
  display: flex;

  p {
    &.intro-hide {
      height: 1.8rem;
      white-space: nowrap;
    }
    line-height: 1.8rem;
    font-size: 0.8rem;
    flex: 1;
    width: 80%;
    display: inline-block;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  margin: 0.5357rem 0 0.5357rem 0.8929rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
  overflow: hidden;
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    width: 2.25rem;
    height: 1.8rem;
    i {
      transition: 0.2s;
      &.intro-hide {
        transform: rotateZ(-180deg);
      }
      width: 1.25rem;
      height: 1.25rem;
      background: url("~@/assets/images/open_icon.png") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
