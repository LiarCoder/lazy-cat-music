/*
 * @Description: 头部信息的数据、函数封装
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-07 21:05:36
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-07 23:50:02
 */

import { useStore } from "vuex";
import { onBeforeRouteLeave } from "vue-router";

export default () => {
  const store = useStore();

  let routeGuard = () => {
    store.commit("header/setShowHeaderInfo", true);

    onBeforeRouteLeave((to, from) => {
      store.commit("header/setShowHeaderInfo", false);

      // 离开SingerList组件时，更改顶部信息条的背景色和字体颜色以使得整体协调
      if (from.fullPath.startsWith("/singer/list")) {
        store.commit("header/setHeaderStyle", {
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
          color: "#fff",
        });
      }
    });
  };

  return routeGuard;
};
