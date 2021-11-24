<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:24:02
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-25 01:59:52
-->
<template>
  <van-cell-group>
    <van-cell title="热门歌手" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="华语男歌手" />
    <van-cell title="华语女歌手" />
    <van-cell title="华语组合" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="日韩男歌手" />
    <van-cell title="日韩女歌手" />
    <van-cell title="日韩组合" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="欧美男歌手" />
    <van-cell title="欧美女歌手" />
    <van-cell title="欧美组合" />
  </van-cell-group>
</template>

<script>
export default {
  name: "Singer",
};
</script>

<style lang="less">
.van-cell-group {
  font-size: 1rem;
  margin: 1rem 0.7143rem 1.0714rem 0.7143rem;
  border: 1px solid #e4e4e4;
  border-radius: 5px;

  .van-cell {
    // background: var(--van-cell-background-color);
    background: #fbfbfb;
    padding: 0.7143rem;
    display: block;
    font-size: 1rem;
    color: #333;

    .van-cell__title,
    .van-cell__value {
      display: inline-block;
    }

    &::after {
      // border-bottom: 1px solid var(--van-cell-border-color);
      border-bottom: 1px solid #cecaca;
      width: 100%;
      left: 0;
    }

    .van-cell__title {
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 0.57143rem;
        height: 1rem;
        background: url("~@/assets/images/arrow_icon.png") no-repeat center;
        background-size: 100%;
        top: 50%;
        transform: translateY(-50%);
        right: .7143rem;
      }
    }
  }
}
</style>
