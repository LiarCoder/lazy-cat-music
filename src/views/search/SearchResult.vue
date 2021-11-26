<!--
 * @Description: 搜索结果展示
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-26 22:07:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 23:41:54
-->
<template>
  <div class="search-result">共有404条结果</div>
  <van-cell class="latest-cell-wrapper" title="薛之谦、锤娜丽莎 - 陪你去流浪 (Live)">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>

  <van-cell class="latest-cell-wrapper" title="薛之谦 - 天外来物">
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>

  <van-cell class="latest-cell-wrapper" title="薛之谦 - 演员">
    <template #right-icon>
      <div>
        <i></i>
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "SearchResult",
};
</script>

<style lang="less">
.search-panel {
  .search-result {
    height: 1.5714rem;
    line-height: 1.5714rem;
    background: #e6e6e6;
    padding-left: 0.9rem;
    font-size: 0.7857rem;
    color: #5d5d5d;
  }
  .latest-cell-wrapper {
    padding: 0 0 0 1.0714rem;
    height: 4.0714rem;
    align-items: center;
    font-size: 1rem;
    // border-bottom: 1px solid #d8d6d6;

    .van-cell__title + div {
      height: 100%;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        cursor: pointer;
        text-align: center;
        font-style: normal;
        width: 1.0357rem;
        height: 1.0814rem;
        // margin-top: 1.5rem;
        display: inline-block;
        background: url("~@/assets/images/download_icon.png") no-repeat;
        background-size: 100%;
      }
    }
    &::after {
      // border-bottom: 1px solid var(--van-cell-border-color);
      border-bottom: 1px solid #cecaca;
      width: 100%;
    }
  }
}
</style>
