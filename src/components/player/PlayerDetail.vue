<!--
 * @Description: 描述信息
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-27 19:27:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:29:41
-->
<template>
  <div class="player-detail" v-show="status.isShowPlayerDetail">
    <div
      class="bg-overlay"
      :style="{
        backgroundImage: `url(${audio.singerImg.replace('{size}', '400')})`,
      }"
    ></div>
    <div class="player-panel">
      <div class="header-top">
        <span class="go-back" @click="togglePlayerDetail()">
          <img src="~@/assets/images/goback_icon.png" alt="返回按钮" />
        </span>
        {{ audio.songName }}
      </div>

      <div class="singer-img">
        <img :src="audio.albumImg.replace('{size}', '400')" alt="专辑封面" />
      </div>

      <div class="song-lyrics">
        <div class="lyric-content" :style="{ marginTop: `${-lyricOffset}rem` }">
          <p
            v-for="lrc in audio.lyric"
            :class="{
              'current-lyric': status.currentTime >= lrc.timestamp - 0.5,
            }"
            :key="lrc.timestamp"
          >
            {{ lrc.lyricText }}
          </p>
        </div>
      </div>

      <div class="player-slider">
        <span>{{ toMMSS(Number(status.currentTime.toFixed())) }}</span>
        <van-slider
          v-model="status.currentTime"
          ref="slider"
          :max="audio.songDuration"
          bar-height="0.1785rem"
          active-color="#3195fd"
          inactive-color="#232228"
          @drag-start="toggleUpdateTime()"
          @drag-end="toggleUpdateTime()"
          @change="onSliderChange()"
        >
          <template #button>
            <div class="slider-btn"></div>
          </template>
        </van-slider>
        <span>{{ toMMSS(Number(audio.songDuration)) }}</span>
      </div>

      <div class="player-btns">
        <i class="player-icon-prev" @click="switchSong('prev')"></i>
        <i
          class="player-icon-play"
          :class="{ 'player-icon-pause': status.isPlaying }"
          @click="togglePlayingStatus()"
        ></i>
        <i class="player-icon-next" @click="switchSong('next')"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { toMMSS } from "@/utils/time";
import useMapper from "@/hooks/useMapper";

export default {
  name: "PlayerDetail",
  setup() {
    const store = useStore();
    const slider = ref(null);

    let { useState } = useMapper();
    let { audio, status } = useState("player", ["audio", "status"]);

    let lyricOffset = computed(() => {
      let offset = (document.querySelectorAll(".current-lyric").length - 1) * 1.7857;
      return status.value.currentTime - status.value.currentTime + offset;
    });

    let onSliderChange = () => {
      store.commit("player/setCurrentTime", slider.value.modelValue);
    };

    let togglePlayerDetail = () => {
      store.commit("player/toggleStatus", "isShowPlayerDetail");
    };

    let toggleUpdateTime = () => {
      store.commit("player/toggleStatus", "isSettingCurrentTimeManually");
    };

    let togglePlayingStatus = () => {
      if (status.value.isPlaying) {
        audio.value.audioEle.pause();
      } else {
        audio.value.audioEle.play();
      }
      store.commit("player/toggleStatus", "isPlaying");
    };

    let switchSong = (actionType) => {
      store.dispatch("player/switchSong", actionType);
    };

    return {
      slider,
      togglePlayerDetail,
      onSliderChange,
      toggleUpdateTime,
      togglePlayingStatus,
      lyricOffset,
      toMMSS,
      switchSong,
      audio,
      status,
    };
  },
};
</script>

<style lang="less" scoped>
.player-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 121;
  .bg-overlay {
    transform: translateY(3.2143rem);
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
      height: 68px;
      overflow: hidden;
      text-align: center;
      color: #afabac;

      .lyric-content {
        transition: 0.3s;
      }

      p {
        padding: 0 12%;
        margin: 0;
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
        &.player-icon-prev {
          background: url("~@/assets/images/play_prev.png") no-repeat;
          background-size: 100%;
        }
        &.player-icon-next {
          background: url("~@/assets/images/play_next.png") no-repeat;
          background-size: 100%;
        }

        &.player-icon-play {
          background: url("~@/assets/images/play_play.png") no-repeat;
        }

        &.player-icon-pause {
          background: url("~@/assets/images/play_pause.png") no-repeat;
        }

        &.player-icon-play,
        &.player-icon-pause {
          width: 3.2143rem;
          height: 3.2143rem;
          background-size: 100%;
        }

        margin: 0 0.8929rem;
        display: inline-block;
        vertical-align: middle;
        width: 2.3214rem;
        height: 2.4rem;
      }
    }
  }
}
</style>
