<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:20:17
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:45:15
-->
<template>
  <van-swipe :autoplay="3000" lazy-render class="latest-song-swipe">
    <van-swipe-item v-for="banner in banners" :key="banner.id">
      <a :href="banner.extra.tourl">
        <img :src="banner.imgurl" :title="banner.title" />
      </a>
    </van-swipe-item>
  </van-swipe>

  <SongList :songs="songs" />
</template>

<script>
import SongList from "@/components/SongList";
import { ref } from "vue";
import { getLatestSongs } from "@/api/latest-song";

export default {
  name: "LatestSong",
  components: {
    SongList,
  },
  setup() {
    let banners = ref([]);
    let songs = ref([]);

    getLatestSongs()
      .then((result) => {
        // 千万不要忘记，如果要取由ref包裹的数据xxx，那么一定要通过 xxx.value 的形式
        banners.value = result.banner;
        songs.value = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return { banners, songs };
  },
};
</script>

<style lang="less" scoped>
.latest-song-swipe {
  margin-top: 0.3571rem;
  background: #fff;
  :deep(.van-swipe-item) {
    img {
      max-width: 100%;
      height: 8.5714rem;
      display: block;
    }
  }
}
</style>
