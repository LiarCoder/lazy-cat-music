<!--
 * @Description: 描述信息
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-27 15:33:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-04 23:18:58
-->
<template>
  <div class="player-footer">
    <audio :src="$store.state.player.audio.songUrl" id="audioEle" autoplay></audio>
    <van-cell>
      <template #title>
        <img :src="$store.state.player.audio.albumImg.replace('{size}', '400')" alt="歌手图片" />
      </template>
      <template #value>
        <p>{{ $store.state.player.audio.songName }}</p>
        <p>{{ $store.state.player.audio.singerName }}</p>
      </template>
      <template #right-icon>
        <div class="player-control-panel">
          <i
            class="player-icon-play"
            :class="{ 'player-icon-pause': $store.state.player.status.isPlaying }"
            @click="toggleStatus()"
          ></i>
          <i class="player-icon-next" @click="next()"></i>
          <i class="player-icon-download"></i>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "PlayerFooter",

  setup() {
    const store = useStore();

    let toggleStatus = () => {
      // 下面这个获取音频元素audioEle的语句不能写在函数外面，
      // 否则执行后面的pause和play方法将报错：【TypeError: can't read property 'pause' of undefined】
      const audioEle = document.getElementById("audioEle");

      if (store.state.player.status.isPlaying) {
        audioEle.pause();
      } else {
        audioEle.play();
      }
      store.commit("player/toggleStatus");
    };

    let next = () => {
      store.dispatch("player/next");
    };

    return { toggleStatus, next };
  },
};
</script>

<style lang="less">
.player-footer {
  .van-cell {
    padding: 0;
    width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);

    .van-cell__title {
      flex: none;
      width: 3.75rem;
      height: 3.75rem;
      margin: 0.2143rem 0.535rem 0.2143rem 0.2143rem;

      img {
        -webkit-tap-highlight-color: transparent;
        // width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .van-cell__value {
      // 下面三行是让两个p标签在容器内垂直居中
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: left;
      color: #fff;
      vertical-align: middle;
      width: 65%;
      & > p:nth-child(1) {
        display: block;
        line-height: 1.7;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.8571rem;
      }
      & > p:nth-child(2) {
        display: block;
        line-height: 1.3;
        font-size: 0.7143rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #888;
      }
    }
  }
  .player-control-panel {
    position: absolute;
    top: 1.0714rem;
    right: 0.7143rem;

    .player-icon-play {
      background: url("~@/assets/images/play_icon.png") no-repeat;
    }
    .player-icon-pause {
      background: url("~@/assets/images/pause_icon.png") no-repeat;
    }
    .player-icon-next {
      background: url("~@/assets/images/next_icon.png") no-repeat;
    }
    .player-icon-download {
      background: url("~@/assets/images/download_icon_player.png") no-repeat;
    }

    .player-icon-play,
    .player-icon-pause,
    .player-icon-next,
    .player-icon-download {
      width: 1.786rem;
      height: 1.786rem;
      margin-left: 1rem;
      display: inline-block;
      vertical-align: middle;
      // 一定要在设置background-size之前设置background:url()，否则background-size无效
      background-size: 100%;
      // animation: loads 1.5s infinite linear;
    }
  }
}
</style>
