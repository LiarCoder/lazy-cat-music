<!--
 * @Description: 封装具有导航（跳转）功能的单元格列表组件
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-16 01:23:46
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 15:57:32
-->

<template>
  <div class="nav-cell">
    <van-cell :to="to">
      <template #icon>
        <img class="nav-cell__left-icon" :src="info.imgURL.replace('{size}', '400')" alt="封面" />
      </template>
      <template #value>
        <span>{{ info.title }}</span>
        <slot name="label" />
      </template>
      <template #right-icon>
        <div class="nav-cell__right-icon"><i></i></div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "NavCell",
  props: ["to", "info"],
};
</script>

<style lang="less" scoped>
.nav-cell {
  padding-left: 0.7143rem;
  .van-cell {
    padding: 0.7143rem 0;
    border-bottom: 1px solid #e5e5e5;

    .nav-cell__left-icon {
      width: 5.3751rem;
      height: 5.3751rem;
      margin-right: 1.0535rem;
    }

    :deep(.van-cell__value) {
      span {
        height: 2.685rem;
        line-height: 2.685rem;
        display: block;
        font-size: 1.0714rem;
        color: #333;
        // 以下三项用于实现描述信息过长时折叠文本（后面跟上省略号）
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      i.icon-music {
        width: 0.7143rem;
        height: 0.7143rem;
        margin-right: 0.2857rem;
        display: inline-block;
        background: url("~@/assets/images/icon_music.png") no-repeat;
        background-size: 100%;
      }
    }

    .nav-cell__right-icon {
      width: 2.14286rem;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        width: 0.57143rem;
        height: 1rem;
        background: url("~@/assets/images/arrow_icon.png") no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>
