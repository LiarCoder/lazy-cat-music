<!--
 * @Description: 搜索页最近热门展示
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-26 22:07:04
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-09 23:20:45
-->
<template>
  <div class="search-recent-hot">最近热门</div>
  <van-cell
    v-for="hot in recentHotList"
    :key="hot.sort"
    :title="hot.keyword"
    class="recent-hot"
    @click="searchHot(hot.keyword)"
  />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { getRecentHotList } from "@/api/search";
import useMapper from "@/hooks/useMapper";

export default {
  name: "SearchRecentHot",
  setup() {
    const store = useStore();
    const router = useRouter();
    let recentHotList = ref([]);

    let { useState } = useMapper();
    let { keyword } = useState("search", ["keyword"]);

    let searchHot = (kw) => {
      keyword.value = kw;
      router.push({ path: "/search/result" });
      store.dispatch("search/search");
    };
    getRecentHotList().then(
      (result) => {
        recentHotList.value = result.data.info;
      },
      (error) => {
        console.warn(error);
      }
    );

    return { recentHotList, searchHot };
  },
};
</script>

<style lang="less">
.search-panel {
  .search-recent-hot {
    height: 2.8571rem;
    line-height: 2.8571rem;
    padding-left: 0.8929rem;
    border-bottom: 1px solid #ccc;
    font-size: 0.8571rem;
    color: #2ca2f9;
  }
  .van-cell.recent-hot {
    padding: 0 0 0 0.7143rem;
    .van-cell__title {
      height: 3.5714rem;
      line-height: 3.5714rem;
      border-bottom: 1px solid #e5e5e5;
      color: #333;
      font-size: 1.1429rem;
      text-indent: 0.1786rem;
    }
  }
}
</style>
