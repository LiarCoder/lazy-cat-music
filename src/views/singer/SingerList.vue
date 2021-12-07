<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-07 23:49:33
-->
<template>
  <van-cell
    v-for="singer in singers"
    :key="singer.singerid"
    :to="`/singer/info/${singer.singerid}`"
    class="rank-cell-wrapper"
  >
    <template #title>
      <img :src="singer.imgurl.replace('{size}', '400')" alt="歌手图片" />
    </template>
    <template #value>
      <span>{{ singer.singername }}</span>
    </template>
  </van-cell>
</template>

<script>
import { getSingerList } from "@/api/singer";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";
import useHeader from "@/hooks/useHeader";
import { useStore } from "vuex";

export default {
  name: "SingerList",
  setup() {
    const route = useRoute();
    const store = useStore();
    let singers = ref([]);
    let routeGuard = useHeader();

    getSingerList(route.params.classID).then(
      (result) => {
        singers.value = result.singers.list.info;
        store.commit("header/setHeaderInfo", result.classname);
      },
      (error) => {
        console.warn(error);
      }
    );

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

<style lang="less">
// .header-info-container {
//   // background: #fff;
//   // box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
//   .header-info {
//     // color: #333;
//   }
// }
.rank-cell-wrapper {
  padding: 0.7143rem 0 0.7143rem 0.7143rem;

  & > img {
    display: block;
  }

  .van-cell__title {
    flex: none;
    width: 3.3929rem;
    height: 3.3929rem;
    margin-right: 1.0535rem;
    img {
      width: 100%;
    }
  }
  &::after {
    border-bottom: 1px solid #cecaca;
    width: 100%;
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
  }
}
</style>
