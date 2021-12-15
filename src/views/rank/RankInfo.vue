<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:30:35
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 01:07:56
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img :src="rankCoverURL" alt="排行封面图" />
      <span>上次更新时间：{{ lastUpdateTime }}</span>
    </div>
    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "@/components/SongList";

import { useRoute, onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";
import { getRankListInfo } from "@/api/rank";
import { useStore } from "vuex";
import useHeader from "@/hooks/useHeader";
import usePlayer from "@/hooks/usePlayer";

export default {
  name: "RankInfo",
  components: {
    SongList,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    let rankCoverURL = ref("");
    let lastUpdateTime = new Date().toLocaleDateString().replaceAll("\/", "-");
    let songs = ref([]);
    let { playAudio, downloadAudio } = usePlayer();
    let routeGuard = useHeader();

    getRankListInfo(route.params.rankID).then(
      (result) => {
        rankCoverURL.value = result.info.imgurl.replace("{size}", "400");
        songs.value = result.songs.list;
        store.commit("header/setHeaderInfo", result.info.rankname);
      },
      (error) => {
        console.warn(error);
      }
    );

    routeGuard();

    return { playAudio, downloadAudio, rankCoverURL, lastUpdateTime, songs };
  },
};
</script>

<style lang="less" scoped>
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
}

:deep(.song-cell-list) {
  & > div:nth-child(1) {
    &::before {
      background: #e80000;
      color: #fff;
    }
  }
  & > div:nth-child(2) {
    &::before {
      background: #ff7200;
      color: #fff;
    }
  }
  & > div:nth-child(3) {
    &::before {
      background: #f8b300;
      color: #fff;
    }
  }
}

:deep(.song-cell) {
  &::before {
    content: attr(data-rank-before);
    display: inline-block;
    padding: 0 0.5rem;
    height: 1.0714rem;
    line-height: 1.0714rem;
    border-radius: 0.5rem;
    font-size: 0.7143rem;
    margin-left: -0.3571rem;
    margin-right: 0.72rem;
  }
}
</style>
