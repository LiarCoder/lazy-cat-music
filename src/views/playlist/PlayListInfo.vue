<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:29:19
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-15 18:01:30
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img :src="playlistCoverURL" alt="" />
    </div>

    <div class="playlist-info-intro" :class="{ 'playlist-info-intro-hide': isHideIntro }">
      <p>{{ playlistIntro }}</p>
      <div @click="toggleIntro()"><i :class="{ 'playlist-info-intro-hide': isHideIntro }"></i></div>
    </div>
    <hr />

    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "@/components/SongList";

import { ref } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

import { getPlaylistInfo } from "@/api/playlist";
import useHeader from "@/hooks/useHeader";

export default {
  name: "PlayListInfo",
  components: {
    SongList,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    let playlistCoverURL = ref("");
    let playlistIntro = ref("");
    let songs = ref([]);
    let isHideIntro = ref(true);
    let routeGuard = useHeader();

    let toggleIntro = () => {
      console.log("toggleIntro");
      isHideIntro.value = !isHideIntro.value;
    };

    getPlaylistInfo(route.params.specialID).then(
      (result) => {
        playlistCoverURL.value = result.info.list.imgurl.replace("{size}", "400");
        playlistIntro.value = result.info.list.intro;
        songs.value = result.list.list.info;
        store.commit("header/setHeaderInfo", result.info.list.specialname);
      },
      (error) => {
        console.warn(error);
      }
    );

    routeGuard();

    return {
      isHideIntro,
      toggleIntro,
      playlistCoverURL,
      playlistIntro,
      songs,
    };
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
    &.playlist-info-intro-hide {
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
        &.playlist-info-intro-hide {
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
</style>
