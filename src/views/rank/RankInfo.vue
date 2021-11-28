<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:30:35
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 19:20:22
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img src="https://imgessl.kugou.com/mcommon/400/20181019/20181019122516438289.jpg" alt="" />
      <span>上次更新时间：2021-11-25</span>
    </div>
    <div class="rank-info-list">
      <van-cell class="latest-cell-wrapper" data-rank-before="1" title="张杰、张碧晨 - 只要平凡">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="2" title="江珊 - 梦里水乡">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="3" title="张靓颖、李荣浩 - 女儿国">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="4" title="许家豪 - 删了吧 (新版)">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankInfo",
};
</script>

<style lang="less" scoped>
.rank-info-wrapper {
  transform: translateY(-3.2143rem);
  .rank-info-top {
    height: 12.5rem;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: -68px;
    }
    span {
      padding-left: 1.07143rem;
      width: 100%;
      height: 2.8rem;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));

      position: absolute;
      bottom: 0;
      left: 0;
      color: #fafff2;
      font-size: 0.85714rem;
      &::before {
        content: "";
        display: block;
        height: 10px;
      }
    }
  }
}

.rank-info-list {
  & > div:nth-child(1) {
    &::before {
      background: #e80000;
      color: #fff;
    }
  }
  & > div:nth-child(2) {
    &::before {
      background: #ff7200;
      color: #fff;
    }
  }
  & > div:nth-child(3) {
    &::before {
      background: #f8b300;
      color: #fff;
    }
  }
}

.latest-cell-wrapper {
  &::before {
    content: attr(data-rank-before);
    display: inline-block;
    padding: 0 0.5rem;
    height: 1.0714rem;
    line-height: 1.0714rem;
    border-radius: 0.5rem;
    font-size: 0.7143rem;
    margin-left: calc(~".7143rem - 1.0714rem");
    margin-right: 0.72rem;
  }
}

.latest-cell-wrapper {
  padding: 0 0 0 1.0714rem;
  height: 4.0714rem;
  align-items: center;
  font-size: 1rem;

  .van-cell__title {
    display: flex;
    align-items: center;
    & + div {
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
        display: inline-block;
        background: url("~@/assets/images/download_icon.png") no-repeat;
        background-size: 100%;
      }
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
  }
}
</style>
