<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:21:41
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-25 11:52:30
-->
<template>
  <van-cell class="rank-cell-wrapper">
    <template #title>
      <img src="https://imgessl.kugou.com/custom/400/20200714/20200714003432579177.jpg" alt="" />
    </template>
    <template #value>
      <span>拯救歌荒！循环一个月都听不腻</span>
      <span><i class="icon-music"></i>2957904</span>
    </template>
    <template #right-icon>
      <div class="right-arrow-icon">
        <img src="http://m.kugou.com/v3/static/images/index/arrow_icon.png" alt="" />
      </div>
    </template>
  </van-cell>

  <van-cell class="rank-cell-wrapper">
    <template #title>
      <img src="https://imgessl.kugou.com/custom/400/20210604/20210604073857260155.jpg" alt="" />
    </template>
    <template #value>
      <span>五分钟入眠：30首纯音跟你说晚安</span>
      <span><i class="icon-music"></i>7064167</span>
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
  name: "PlayList",
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
    i.icon-music {
      width: 0.7143rem;
      height: 0.7143rem;
      margin-top: 0.10714rem;
      margin-right: 0.2857rem;
      display: inline-block;
      background: url("~@/assets/images/icon_music.png") no-repeat;
      background-size: 100%;
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
