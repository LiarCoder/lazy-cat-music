<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:29:19
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-01 16:23:14
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img :src="playlistCoverURL" alt="" />
    </div>

    <div class="playlist-info-intro">
      <p>{{ playlistIntro }}</p>
      <div><i></i></div>
    </div>
    <hr />

    <div class="rank-info-list">
      <van-cell
        v-for="song in songs"
        :key="song.audio_id"
        :title="song.filename"
        class="latest-cell-wrapper"
      >
        <template #right-icon>
          <div><i></i></div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { getPlaylistInfo } from "@/api/playlist";

export default {
  name: "PlayListInfo",
  setup() {
    const route = useRoute();
    let playlistCoverURL = ref("");
    let playlistIntro = ref("");
    let songs = ref([]);

    getPlaylistInfo(route.params.specialID).then(
      (result) => {
        // console.log(result);
        playlistCoverURL.value = result.info.list.imgurl.replace("{size}", "400");
        playlistIntro.value = result.info.list.intro;
        songs.value = result.list.list.info;
      },
      (error) => {
        console.warn(error);
      }
    );
    return { playlistCoverURL, playlistIntro, songs };
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
