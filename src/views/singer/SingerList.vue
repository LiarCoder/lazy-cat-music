<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 22:09:08
-->
<template>
  <van-cell class="rank-cell-wrapper" to="/rank/info">
    <template #title>
      <img
        src="https://imgessl.kugou.com/uploadpic/pass/softhead/400/20180515/20180515002522714.jpg"
        alt=""
      />
    </template>
    <template #value>
      <span>周杰伦</span>
    </template>
  </van-cell>

  <van-cell class="rank-cell-wrapper">
    <template #title>
      <img
        src="https://imgessl.kugou.com/uploadpic/pass/softhead/400/20200603/20200603112123228.jpg"
        alt=""
      />
    </template>
    <template #value>
      <span>薛之谦</span>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "SingerList",
};
</script>

<style lang="less">
// .header-info-container {
//   // background: #fff;
//   // box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
//   .header-info {
//     // color: #333;
//   }
// }
.rank-cell-wrapper {
  padding: 0.7143rem 0 0.7143rem 0.7143rem;

  & > img {
    display: block;
  }

  .van-cell__title {
    flex: none;
    width: 3.3929rem;
    height: 3.3929rem;
    margin-right: 1.0535rem;
    img {
      width: 100%;
    }
  }
  &::after {
    border-bottom: 1px solid #cecaca;
    width: 100%;
  }

  .van-cell__value {
    text-align: left;
    // color: var(--van-cell-value-color);
    color: #333;

    span {
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 2.685rem;
      max-height: 2.685rem;
      line-height: 2.685rem;
      display: block;
      font-size: 1.0714rem;
      color: #333;
      // 以下三项用于实现描述信息过长时折叠文本（后面跟上省略号）
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
