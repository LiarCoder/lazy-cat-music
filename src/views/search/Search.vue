<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:23:25
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 18:39:19
-->
<template>
  <van-search v-model="keyword.text" show-action placeholder="歌手/歌名/拼音" @search="onSearch">
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>

  <div class="search-panel">
    <!-- 缓存SearchRecentHot子组件 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="SearchRecentHot">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useMapper from "@/hooks/useMapper";

export default {
  name: "Search",
  setup() {
    const router = useRouter();
    const store = useStore();

    let { useState } = useMapper();
    let { keyword } = useState("search", ["keyword"]);

    let onSearch = () => {
      if (!keyword.value.text) {
        router.push({ path: "/search/recent-hot" });
        return;
      }
      if (router.currentRoute.value.path !== "/search/result") {
        router.push({ path: "/search/result" });
      }
      store.dispatch("search/search");
    };
    return { onSearch, keyword };
  },
};
</script>

<style lang="less" scoped>
.van-search {
  padding: 0.7143rem;
  :deep(.van-search__content) {
    height: 100%;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    .van-cell {
      font-size: 1rem;
      i {
        font-size: 1rem;
      }
    }
  }
  :deep(.van-search__action) {
    background-color: #2ca2f9;
    color: #fff;
    padding: 0;
    margin-left: 1rem;
    width: 17.25%;
    height: 2rem;
    line-height: 2rem;
    vertical-align: middle;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
