<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:29:19
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 18:29:41
-->
<template>
  <div class="playlist-info-wrapper">
    <div class="playlist-info-top">
      <img :src="playlistCoverURL" alt="排行封面" />
    </div>

    <IntroPanel :intro="playlistIntro" />

    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "@/components/SongList";
import IntroPanel from "@/components/IntroPanel";

import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { getPlaylistInfo } from "@/api/playlist";
import useHeader from "@/hooks/useHeader";

export default {
  name: "PlayListInfo",
  components: {
    SongList,
    IntroPanel,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    let playlistCoverURL = ref("");
    let playlistIntro = ref("");
    let songs = ref([]);
    let routeGuard = useHeader();

    getPlaylistInfo(route.params.specialID)
      .then((result) => {
        playlistCoverURL.value = result.info.list.imgurl.replace("{size}", "400");
        playlistIntro.value = result.info.list.intro;
        songs.value = result.list.list.info;
        store.commit("header/setHeaderInfo", result.info.list.specialname);
      })
      .catch((error) => {
        console.warn(error);
      });

    routeGuard();

    return {
      playlistCoverURL,
      playlistIntro,
      songs,
    };
  },
};
</script>

<style lang="less" scoped>
.playlist-info-wrapper {
  transform: translateY(-3.2143rem);
  .playlist-info-top {
    height: 12.5rem;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: -68px;
    }
  }
}
</style>
