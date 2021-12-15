<!--
 * @Description: 搜索结果展示
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-26 22:07:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-15 18:02:46
-->
<template>
  <div class="search-result">共有{{ resultAmount }}条结果</div>

  <SongList :songs="searchResults" />
</template>

<script>
import SongList from "@/components/SongList";

import { computed } from "vue";
import { useStore, mapState } from "vuex";

import useMapper from "@/hooks/useMapper";

export default {
  name: "SearchResult",
  components: {
    SongList,
  },
  setup() {
    const store = useStore();

    let { useState } = useMapper();

    return {
      ...useState("search", ["searchResults", "resultAmount"]),
    };
  },
};
</script>

<style lang="less">
.search-panel {
  .search-result {
    height: 1.5714rem;
    line-height: 1.5714rem;
    background: #e6e6e6;
    padding-left: 0.9rem;
    font-size: 0.7857rem;
    color: #5d5d5d;
  }
}
</style>
