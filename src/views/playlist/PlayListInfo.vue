<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:29:19
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 01:02:06
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img src="https://imgessl.kugou.com/custom/400/20210709/20210709010332148129.jpg" alt="" />
    </div>

    <div class="playlist-info-intro">
      <p>
        学习不努力，考试徒伤悲。很多时候，你是不是恨不得能拥有哆啦A梦的记忆面包，能瞬间记住所有知识点？先从美梦中醒醒啦！学习只能靠自己平常的努力积累，愿这些歌曲能让你快速进入学习状态！加油！
      </p>
      <div><i></i></div>
    </div>
    <hr />

    <div class="rank-info-list">
      <van-cell class="latest-cell-wrapper" data-rank-before="1" title="青睐 - 贩卖人间黄昏">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="2" title="桃沢晴 - 云边小卖铺">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="3" title="青睐 - 夏の景色 (夏日风光)">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>

      <van-cell class="latest-cell-wrapper" data-rank-before="4" title="桃沢晴 - 晨起暮落">
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayListInfo",
};
</script>

<style lang="less">
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
  .playlist-info-intro {
    width: 100%;
    line-height: 1.8;
    padding: 0.5357rem 2.67857rem 0.5357rem 0.8929rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: auto;
    height: 2.25rem;
    div {
      font-size: 1rem;
      width: 2.1429rem;
      height: 2rem;
      line-height: 2.1429rem;
      position: absolute;
      top: 0.25rem;
      right: 0.1786rem;
      text-align: center;
      cursor: pointer;
      i {
        // line-height: 2.1429rem;
        // text-align: center;
        cursor: pointer;
        // font-style: normal;
        width: 1.25rem;
        height: 1.25rem;
        display: inline-block;
        vertical-align: text-bottom;
        background: url("~@/assets/images/close_icon.png") no-repeat;
        background-size: 100%;
      }
    }
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
    color: #333;
  }
}
</style>
