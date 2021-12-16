<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:20
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 18:29:53
-->
<template>
  <div class="singer-info-wrapper">
    <div class="singer-info-top">
      <img :src="singerCoverURL" alt="歌手图片" />
    </div>

    <IntroPanel :intro="singerIntro" />

    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "@/components/SongList";
import IntroPanel from "@/components/IntroPanel";

import { useRoute } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

import { getSingerInfo } from "@/api/singer";
import useHeader from "@/hooks/useHeader";

export default {
  name: "SingerInfo",
  components: {
    SongList,
    IntroPanel,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    let singerCoverURL = ref("");
    let singerIntro = ref("");
    let songs = ref([]);
    let routeGuard = useHeader();

    getSingerInfo(route.params.singerID)
      .then((result) => {
        singerCoverURL.value = result.info.imgurl.replace("{size}", "400");
        singerIntro.value = result.info.intro;
        songs.value = result.songs.list;
        store.commit("header/setHeaderInfo", result.info.singername);
      })
      .catch((error) => {
        console.warn(error);
      });

    routeGuard();

    return { singerCoverURL, singerIntro, songs };
  },
};
</script>

<style lang="less" scoped>
.singer-info-wrapper {
  transform: translateY(-3.2143rem);
  .singer-info-top {
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
