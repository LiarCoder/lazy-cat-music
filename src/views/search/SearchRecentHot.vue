<!--
 * @Description: 搜索页最近热门展示
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-26 22:07:04
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 23:36:35
-->
<template>
  <div class="search-recent-hot">最近热门</div>
  <van-cell title="独家首发" />
  <van-cell title="儿歌大全" />
  <van-cell title="动漫" />
  <van-cell title="洗脑电音" />
  <van-cell title="情歌大全" />
</template>

<script>
export default {
  name: "SearchRecentHot",
};
</script>

<style lang="less">
.search-panel {
  .search-recent-hot {
    height: 2.8571rem;
    line-height: 2.8571rem;
    padding-left: 0.8929rem;
    border-bottom: 1px solid #ccc;
    font-size: 0.8571rem;
    color: #2ca2f9;
  }
  .van-cell {
    padding: 0 0 0 0.7143rem;
    .van-cell__title {
      height: 3.5714rem;
      line-height: 3.5714rem;
      border-bottom: 1px solid #e5e5e5;
      color: #333;
      font-size: 1.1429rem;
      text-indent: 0.1786rem;
    }
  }
}
</style>
