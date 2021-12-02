<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:23:25
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-02 14:55:26
-->
<template>
  <van-search v-model="value" show-action placeholder="歌手/歌名/拼音" @search="onSearch">
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
  <div class="search-panel">
    <router-view :keyword="value"></router-view>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Search",
  setup() {
    const value = ref("");
    const router = useRouter();

    let onSearch = () => {
      console.log(router.currentRoute.value.path);
      if (router.currentRoute.value.path === "/search/result") {
        return;
      }
      router.push({ path: "/search/result" });
    };
    return { value, onSearch };
  },
};
</script>

<style lang="less">
.van-search {
  padding: 0.7143rem;
  .van-search__content {
    // height: 2.0714rem;
    height: 100%;
    // background: var(--van-search-content-background-color);
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    .van-cell {
      font-size: 1rem;
      i {
        // font-size: var(--van-field-icon-size);
        font-size: 1rem;
      }
    }
  }
  .van-search__action {
    background-color: #2ca2f9;
    // color: #959595;
    color: #fff;
    padding: 0;
    margin-left: 1rem;
    width: 17.25%;
    height: 2rem;
    // height: 100%;
    // line-height: 2.0714rem;
    line-height: 2rem;
    vertical-align: middle;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
    // background: #e5e5e5;
  }
}
</style>
