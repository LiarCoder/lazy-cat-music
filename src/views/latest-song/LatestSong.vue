<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:20:17
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-04 21:39:17
-->
<template>
  <!-- <van-swipe :autoplay="3000" lazy-render> -->
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="banner in banners" :key="banner.id">
      <a :href="banner.extra.tourl">
        <img :src="banner.imgurl" :title="banner.title" />
      </a>
    </van-swipe-item>
  </van-swipe>

  <van-cell
    v-for="(song, index) in songs"
    :key="song.audio_id"
    :title="song.filename"
    class="latest-cell-wrapper"
    @click="playAudio(songs, index)"
  >
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <div><i></i></div>
    </template>
  </van-cell>
</template>

<script>
import { ref, onMounted } from "vue";
import { getLatestSongs } from "@/api/latest-song";
import usePlayer from "@/hooks/usePlayer";

export default {
  name: "LatestSong",
  setup() {
    let banners = ref([]);
    let songs = ref([]);
    let playAudio = usePlayer();

    getLatestSongs().then(
      (result) => {
        // console.log(result);
        // 千万不要忘记，如果要取由ref包裹的数据xxx，那么一定要通过 xxx.value 的形式
        banners.value = result.banner;
        songs.value = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
    return { playAudio, banners, songs };
  },
};
</script>

<style lang="less">
.van-swipe {
  width: 100%;
  margin-top: 0.3571rem;
  background: #fff;
  overflow: hidden;
  position: relative;
  visibility: visible;
  .van-swipe-item {
    a {
      max-width: 100%;
      margin: 0 auto;
      display: block;
      img {
        max-width: 100%;
        margin: 0 auto;
        // height: 164px;
        height: 8.5714rem;
        display: block;
      }
    }
  }
}
.latest-cell-wrapper {
  padding: 0 0 0 1.0714rem;
  height: 4.0714rem;
  align-items: center;
  font-size: 1rem;
  // border-bottom: 1px solid #d8d6d6;

  .van-cell__title + div {
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
      // margin-top: 1.5rem;
      display: inline-block;
      background: url("~@/assets/images/download_icon.png") no-repeat;
      background-size: 100%;
    }
  }
  &::after {
    // border-bottom: 1px solid var(--van-cell-border-color);
    border-bottom: 1px solid #cecaca;
    width: 100%;
  }
}
</style>
