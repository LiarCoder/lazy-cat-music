<!--
 * @Description: 封装项目中用到的歌曲列表
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-15 16:54:26
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 01:10:41
-->

<template>
  <div class="song-cell-list">
    <van-cell
      v-for="(song, index) in songs"
      :key="song.audio_id"
      :title="song.filename"
      :data-rank-before="index + 1"
      class="song-cell"
      @click="playAudio(songs, index)"
    >
      <template #right-icon>
        <div class="song-cell__right-icon" @click.stop="downloadAudio()"><i></i></div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import usePlayer from "@/hooks/usePlayer";

export default {
  name: "SongList",
  props: ["songs"],
  setup() {
    let { playAudio, downloadAudio } = usePlayer();
    return { playAudio, downloadAudio };
  },
};
</script>

<style lang="less" scoped>
.song-cell-list {
  padding-left: 0.7143rem;

  .song-cell {
    padding: 0.3rem 0 0.3rem 0.3571rem;
    min-height: 4.0714rem;
    align-items: center;
    font-size: 1rem;
    border-bottom: 1px solid #e5e5e5;

    .song-cell__right-icon {
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
}
</style>
