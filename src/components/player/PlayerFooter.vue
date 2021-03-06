<!--
 * @Description: 描述信息
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-27 15:33:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:39:37
-->
<template>
  <div class="player-footer" :class="{ 'player-footer-toggle': isHidePlayerFooter }">
    <audio
      :src="audio.songUrl"
      ref="audioEle"
      autoplay
      @timeupdate="updateCurrentTime()"
      @ended="next()"
    ></audio>
    <img
      class="player-footer-control"
      :class="{ 'player-footer-toggle': isHidePlayerFooter }"
      @click="togglePlayerFooter()"
      src="@/assets/images/close_icon.png"
      alt="切换显示底部播放面板的按钮"
    />
    <van-cell>
      <template #title>
        <img
          :src="audio.albumImg.replace('{size}', '400')"
          alt="专辑封面"
          @click="togglePlayerDetail()"
        />
      </template>
      <template #value>
        <p @click="togglePlayerDetail()">{{ audio.songName }}</p>
        <p @click="togglePlayerDetail()">{{ audio.singerName }}</p>
      </template>
      <template #right-icon>
        <div class="player-control-panel">
          <i
            class="player-icon-play"
            :class="{ 'player-icon-pause': status.isPlaying }"
            @click="togglePlayingStatus()"
          ></i>
          <i class="player-icon-next" @click="switchSong('next')"></i>
          <i class="player-icon-download" @click.stop="downloadAudio()"></i>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import useMapper from "@/hooks/useMapper";
import usePlayer from "@/hooks/usePlayer";

export default {
  name: "PlayerFooter",

  setup() {
    const store = useStore();
    const audioEle = ref(null);
    let isHidePlayerFooter = ref(false);

    let { useState } = useMapper();
    // 注意下面解构出来的 audio 和 status 都是响应式的数据，所以使用的时候需要 xxx.value 的形式
    let { audio, status } = useState("player", ["audio", "status"]);

    let { downloadAudio } = usePlayer();

    onMounted(() => {
      audio.value.audioEle = audioEle.value;
    });

    let togglePlayerFooter = () => {
      isHidePlayerFooter.value = !isHidePlayerFooter.value;
    };

    let togglePlayingStatus = () => {
      // 下面这个获取音频元素audioEle的语句不能写在函数外面，
      // 否则执行后面的pause和play方法将报错：【TypeError: can't read property 'pause' of undefined】
      // 【更新：2021年12月5日22:33:08】突然发现使用Vue中的ref属性更好
      // const audioEle = document.getElementById("audioEle");

      if (status.value.isPlaying) {
        audioEle.value.pause();
      } else {
        audioEle.value.play();
      }
      store.commit("player/toggleStatus", "isPlaying");
    };

    let switchSong = (actionType) => {
      store.dispatch("player/switchSong", actionType);
    };

    let togglePlayerDetail = () => {
      store.commit("player/toggleStatus", "isShowPlayerDetail");
    };

    let updateCurrentTime = () => {
      if (status.value.isSettingCurrentTimeManually) {
        return;
      }
      store.commit("player/updateCurrentTime", audioEle.value.currentTime);
    };

    return {
      audioEle,
      audio,
      status,
      isHidePlayerFooter,
      togglePlayerFooter,
      togglePlayingStatus,
      togglePlayerDetail,
      updateCurrentTime,
      switchSong,
      downloadAudio,
    };
  },
};
</script>

<style lang="less" scoped>
.player-footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  transition: 0.5s;

  &.player-footer-toggle {
    margin-bottom: -4.2143rem;
  }

  img {
    &.player-footer-control {
      vertical-align: top; // 消除图片标签下方的几个空像素
      transition: 0.5s;
      margin: 0 0 0.5rem 0.5rem;
      background: rgba(0, 0, 0, 0.9);
      border-radius: 50%;
    }
    &.player-footer-toggle {
      transform: rotateZ(-180deg);
    }
  }
  :deep(.van-cell) {
    padding: 0;
    height: 4.2143rem;
    background: rgba(0, 0, 0, 0.9);

    .van-cell__title {
      flex: none;
      width: 3.75rem;
      height: 3.75rem;
      margin: 0.2143rem 0.535rem 0.2143rem 0.2143rem;

      img {
        height: 100%;
        border-radius: 5px;
      }
    }
    .van-cell__value {
      flex: 1;
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

    .player-control-panel {
      display: flex;
      align-items: center;
      margin-right: 0.7143rem;

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
        // 一定要在设置background-size之前设置background:url()，否则background-size无效
        background-size: 100%;
      }
    }
  }
}
</style>
