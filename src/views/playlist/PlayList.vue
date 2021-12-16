<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:21:41
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 15:53:59
-->
<template>
  <NavCell
    v-for="playlist in playlists"
    :key="playlist.id"
    :to="`/playlist/info/${playlist.id}`"
    :info="playlist"
  >
    <template #label>
      <span><i class="icon-music"></i>{{ playlist.label }}</span>
    </template>
  </NavCell>
</template>

<script>
import NavCell from "@/components/NavCell";

import { getPlaylist } from "@/api/playlist";
import { ref } from "vue";

export default {
  name: "PlayList",
  components: {
    NavCell,
  },
  setup() {
    let playlists = ref([]);

    getPlaylist()
      .then((result) => {
        playlists.value = result.plist.list.info.map((item) => {
          return {
            id: item.specialid,
            imgURL: item.imgurl,
            title: item.specialname,
            label: item.playcount,
          };
        });
      })
      .catch((error) => {
        console.warn(error);
      });
    return { playlists };
  },
};
</script>

<style lang="less"></style>
