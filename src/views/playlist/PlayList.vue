<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:21:41
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-01 16:01:23
-->
<template>
  <van-cell
    v-for="playlist in playlists"
    :key="playlist.specialid"
    :to="`/playlist/info/${playlist.specialid}`"
    class="rank-cell-wrapper"
  >
    <template #title>
      <img :src="playlist.imgurl.replace('{size}', '400')" alt="歌单封面" />
    </template>
    <template #value>
      <span>{{ playlist.specialname }}</span>
      <span><i class="icon-music"></i>{{ playlist.playcount }}</span>
    </template>
    <template #right-icon>
      <div class="right-arrow-icon"><i></i></div>
    </template>
  </van-cell>
</template>

<script>
import { getPlaylist } from "@/api/playlist";
import { ref } from "vue";

export default {
  name: "PlayList",
  setup() {
    let playlists = ref([]);

    getPlaylist().then(
      (result) => {
        // console.log(result);
        playlists.value = result.plist.list.info;
      },
      (error) => {
        console.warn(error);
      }
    );

    return { playlists };
  },
};
</script>

<style lang="less">
.rank-cell-wrapper {
  padding: 0.7143rem 0 0.7143rem 0.7143rem;

  & > img {
    display: block;
  }

  .van-cell__title {
    flex: none;
    width: 5.3751rem;
    height: 5.3751rem;
    margin-right: 1.0535rem;
    img {
      width: 100%;
    }
  }

  .van-cell__value {
    text-align: left;
    // color: var(--van-cell-value-color);
    color: #333;

    span {
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 2.685rem;
      max-height: 2.685rem;
      line-height: 2.685rem;
      display: block;
      font-size: 1.0714rem;
      color: #333;
      // 以下三项用于实现描述信息过长时折叠文本（后面跟上省略号）
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    i.icon-music {
      width: 0.7143rem;
      height: 0.7143rem;
      margin-top: 0.10714rem;
      margin-right: 0.2857rem;
      display: inline-block;
      background: url("~@/assets/images/icon_music.png") no-repeat;
      background-size: 100%;
    }
  }

  .right-arrow-icon {
    width: 2.14286rem;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      cursor: pointer;
      text-align: center;
      font-style: normal;
      width: 0.57143rem;
      height: 1rem;
      // margin-top: 1.5rem;
      display: inline-block;
      background: url("~@/assets/images/arrow_icon.png") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
