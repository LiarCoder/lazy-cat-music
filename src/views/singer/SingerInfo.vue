<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:20
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-08 01:44:14
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img :src="singerCoverURL" alt="歌手图片" />
    </div>

    <div class="playlist-info-intro" :class="{ 'playlist-info-intro-hide2': isHideIntro }">
      <p>{{ singerIntro }}</p>
      <div @click="toggleIntro()">
        <i :class="{ 'playlist-info-intro-hide2': isHideIntro }"></i>
      </div>
    </div>
    <hr />

    <div class="rank-info-list">
      <van-cell
        v-for="(song, index) in songs"
        :key="song.audio_id"
        :title="song.filename.split(' - ')[1]"
        :label="song.filename.split(' - ')[0]"
        class="latest-cell-wrapper"
        @click="playAudio(songs, index)"
      >
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getSingerInfo } from "@/api/singer";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";

import useHeader from "@/hooks/useHeader";
import usePlayer from "@/hooks/usePlayer";

import { useStore } from "vuex";

export default {
  name: "SingerInfo",
  setup() {
    const route = useRoute();
    const store = useStore();
    let singerCoverURL = ref("");
    let singerIntro = ref("");
    let songs = ref([]);
    let isHideIntro = ref(true);
    let routeGuard = useHeader();
    let playAudio = usePlayer();

    let toggleIntro = () => {
      console.log("toggleIntro");
      isHideIntro.value = !isHideIntro.value;
    };

    getSingerInfo(route.params.singerID).then(
      (result) => {
        singerCoverURL.value = result.info.imgurl.replace("{size}", "400");
        singerIntro.value = result.info.intro;
        songs.value = result.songs.list;
        store.commit("header/setHeaderInfo", result.info.singername);
      },
      (error) => {
        console.warn(error);
      }
    );

    routeGuard();

    return { isHideIntro, toggleIntro, playAudio, singerCoverURL, singerIntro, songs };
  },
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
    &.playlist-info-intro-hide2 {
      height: 2.25rem;
    }

    width: 100%;
    line-height: 1.8;
    padding: 0.5357rem 2.67857rem 0.5357rem 0.8929rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: auto;
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
        transition: 0.2s;
        &.playlist-info-intro-hide2 {
          transform: rotateZ(-180deg);
        }
        width: 1.25rem;
        height: 1.25rem;
        display: inline-block;
        vertical-align: text-bottom;
        background: url("~@/assets/images/open_icon.png") no-repeat;
        background-size: 100%;
      }
    }
  }
}

.latest-cell-wrapper {
  padding: 0 0 0 1.0714rem;
  height: 4.0714rem;
  align-items: center;
  // width: 76%;

  .van-cell__title {
    display: block;
    padding-right: 24%;
    font-size: 0.875rem;

    & + div {
      height: 100%;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        transition: 0.2s;
        &.playlist-info-intro-hide {
          transform: rotateZ(-180deg);
        }
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
    // width: 100%;
  }
  .van-cell__value {
    text-align: left;
    color: #333;
  }
}
</style>
