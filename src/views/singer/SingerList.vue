<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 16:25:50
-->
<template>
  <NavCell
    v-for="singer in singers"
    :key="singer.id"
    :to="`/singer/info/${singer.id}`"
    :info="singer"
    class="nav-cell__left-icon--small"
  >
  </NavCell>
</template>

<script>
import NavCell from "@/components/NavCell";

import { useRoute } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

import { getSingerList } from "@/api/singer";
import useHeader from "@/hooks/useHeader";

export default {
  name: "SingerList",
  components: {
    NavCell,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    let singers = ref([]);
    let routeGuard = useHeader();

    getSingerList(route.params.classID)
      .then((result) => {
        singers.value = result.singers.list.info.map((item) => {
          return {
            id: item.singerid,
            imgURL: item.imgurl,
            title: item.singername,
          };
        });
        store.commit("header/setHeaderInfo", result.classname);
      })
      .catch((error) => {
        console.warn(error);
      });

    routeGuard();

    // 进入SingerList组件时，更改顶部信息条的背景色和字体颜色以使得整体协调
    store.commit("header/setHeaderStyle", {
      backgroundImage: "linear-gradient(#ffffff, #ffffff)",
      color: "#000",
    });

    return { singers };
  },
};
</script>

<style lang="less" scoped>
// 注意下面的 :deep() 的位置，否则达不到效果，括号里的那个div选择器是用来占位的，
// 因为 :deep() 内不能为空，其实可以直接用 ::v-deep 代替，但是控制台会报警告
.nav-cell.nav-cell__left-icon--small:deep(div) {
  .nav-cell__left-icon {
    width: 3.3929rem;
    height: 3.3929rem;
    margin-right: 0.9571rem;
  }
}
</style>
