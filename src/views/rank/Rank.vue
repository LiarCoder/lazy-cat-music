<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:22:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 15:55:52
-->
<template>
  <NavCell v-for="rank in rankList" :key="rank.id" :to="`/rank/info/${rank.id}`" :info="rank">
  </NavCell>
</template>

<script>
import NavCell from "@/components/NavCell";

import { getRankList } from "@/api/rank";
import { ref } from "vue";

export default {
  name: "Rank",
  components: {
    NavCell,
  },
  setup() {
    let rankList = ref([]);

    getRankList()
      .then((result) => {
        rankList.value = result.rank.list.map((item) => {
          return {
            id: item.rankid,
            imgURL: item.imgurl,
            title: item.rankname,
          };
        });
      })
      .catch((error) => {
        console.warn(error);
      });

    return { rankList };
  },
};
</script>

<style lang="less"></style>
