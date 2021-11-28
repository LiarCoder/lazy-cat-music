<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:22:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-25 17:16:38
-->
<template>
  <van-cell class="rank-cell-wrapper" to="/rank/info">
    <template #title>
      <img src="https://imgessl.kugou.com/mcommon/400/20181019/20181019122513972113.jpg" alt="" />
    </template>
    <template #value>
      <span>TOP500</span>
    </template>
    <template #right-icon>
      <div class="right-arrow-icon">
        <img src="http://m.kugou.com/v3/static/images/index/arrow_icon.png" alt="" />
      </div>
    </template>
  </van-cell>

  <van-cell class="rank-cell-wrapper">
    <template #title>
      <img src="https://imgessl.kugou.com/mcommon/400/20190906/20190906162520714932.jpg" alt="" />
    </template>
    <template #value>
      <span>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
    </template>
    <template #right-icon>
      <div class="right-arrow-icon">
        <img src="http://m.kugou.com/v3/static/images/index/arrow_icon.png" alt="" />
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "Rank",
};
</script>

<style lang="less">
.rank-cell-wrapper {
  padding: 0.7143rem 0 0.7143rem 0.7143rem;

  & > img {
    display: block;
  }

  .van-cell__title {
    flex: none;
    width: 5.3751rem;
    height: 5.3751rem;
    margin-right: 1.0535rem;
    img {
      width: 100%;
    }
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

  .right-arrow-icon {
    width: 2.14286rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      cursor: pointer;
      text-align: center;
      font-style: normal;
      // width: 1.0357rem;
      height: 1.0814rem;
      // margin-top: 1.5rem;
      display: inline-block;
    }
  }
}
</style>
