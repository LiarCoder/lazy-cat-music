<!--
 * @Description: 描述信息
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-27 19:27:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-28 16:35:55
-->
<template>
  <div class="player-detail">
    <div class="bg-overlay"></div>
    <div class="player-panel">
      <div class="header-top">
        <span class="go-back">
          <img src="~@/assets/images/goback_icon.png" alt="返回按钮" />
        </span>
        演员
      </div>

      <div class="singer-img">
        <img
          src="http://singerimg.kugou.com/uploadpic/softhead/200/20200603/20200603112123228.jpg"
          alt=""
        />
      </div>

      <div class="song-lyrics">
        <p>混音师：鲍锐</p>
        <p class="current-lyric">母带处理工程师：鲍锐</p>
        <p>简单点</p>
        <p>简单点</p>
        <p>简单点</p>
        <p>简单点</p>
        <p>简单点</p>
        <p>简单点</p>
      </div>

      <div class="player-slider">
        <span>00:00</span>
        <van-slider
          v-model="value"
          bar-height="0.1785rem"
          active-color="#3195fd"
          inactive-color="#232228"
        >
          <template #button>
            <div class="slider-btn"></div>
          </template>
        </van-slider>
        <span>04:21</span>
      </div>

      <div class="player-btns">
        <i class="player-icon-prev"></i>
        <i class="player-icon-play"></i>
        <i class="player-icon-next"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PlayerDetail",
  setup() {
    const value = ref(80);
    return {
      value,
    };
  },
};
</script>

<style lang="less">
.player-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 121;
  .bg-overlay {
    // transform: translateY(62px);
    transform: translateY(3.2143rem;);
    // margin-top: 62px;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // filter: blur(10px);
    background-image: url("http://singerimg.kugou.com/uploadpic/softhead/200/20200603/20200603112123228.jpg");
  }
  .player-panel {
    backdrop-filter: blur(15px);
    transform: translateY(3.2143rem;);
    background-color: rgba(0, 0, 0, 0.5);
    // margin-top: 62px;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;

    .header-top {
      background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
      padding: 0 2.1429rem;
      text-align: center;
      margin: 0 auto;
      height: 3rem;
      line-height: 3rem;
      font-size: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .go-back {
        position: absolute;
        top: 0px;
        left: 0px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 2.1429rem;
        height: 2.8031rem;
        img {
          width: 0.85714rem;
          height: 1.42857rem;
        }
      }
    }

    .singer-img {
      width: 10.7143rem;
      height: 10.7143rem;
      margin: 1.4286rem auto 0;

      img {
        width: 100%;
      }
    }

    .song-lyrics {
      margin-top: 0.8928rem;
      // height: 3.8rem;
      height: 68px;
      overflow: hidden;
      text-align: center;
      color: #afabac;

      p {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 1.7857rem;
        line-height: 1.7857rem;
        vertical-align: top;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.8571rem;

        &.current-lyric {
          color: #d1c90e;
        }
      }
    }

    .player-slider {
      padding: 0.8928rem 0.7143rem;
      display: flex;
      align-items: center;
      .van-slider {
        margin: 0 0.5357rem;

        .slider-btn {
          width: 0.7143rem;
          height: 0.7143rem;
          background: #3195fd;
          border-radius: 100%;
        }
      }
      span {
        font-size: 0.6428rem;
        color: #dcdcdc;
      }
    }

    .player-btns {
      margin: 0 auto;
      text-align: center;

      i {
        margin: 0 0.8929rem;
        display: inline-block;
        vertical-align: middle;
        width: 2.3214rem;
        height: 2.4rem;

        &.player-icon-prev {
          background: url("~@/assets/images/play_prev.png") no-repeat;
          background-size: 100%;
        }
        &.player-icon-next {
          background: url("~@/assets/images/play_next.png") no-repeat;
          background-size: 100%;
        }
        &.player-icon-play {
          width: 3.2143rem;
          height: 3.2143rem;
          background: url("~@/assets/images/play_play.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}
</style>
