<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:20
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-01 18:30:12
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img :src="singerCoverURL" alt="歌手图片" />
    </div>

    <div class="playlist-info-intro">
      <p>{{ singerIntro }}</p>
      <div><i></i></div>
    </div>
    <hr />

    <div class="rank-info-list">
      <van-cell
        v-for="song in songs"
        :key="song.audio_id"
        :title="song.filename.split(' - ')[1]"
        :label="song.filename.split(' - ')[0]"
        class="latest-cell-wrapper"
      >
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getSingerInfo } from "@/api/singer";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "SingerInfo",
  setup() {
    const route = useRoute();
    let singerCoverURL = ref("");
    let singerIntro = ref("");
    let songs = ref([]);

    getSingerInfo(route.params.singerID).then(
      (result) => {
        // console.log(result);
        singerCoverURL.value = result.info.imgurl.replace("{size}", "400");
        singerIntro.value = result.info.intro;
        songs.value = result.songs.list;
      },
      (error) => {
        console.warn(error);
      }
    );

    return { singerCoverURL, singerIntro, songs };
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
    display: block;

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
    // width: 100%;
  }
  .van-cell__value {
    text-align: left;
    color: #333;
  }
}
</style>
