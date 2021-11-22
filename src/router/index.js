/*
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-22 15:07:43
 */

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Default",
    path: "/",
    redirect: "/latest-song",
  },
  {
    name: "LatestSong",
    path: "/latest-song",
    components: () => import("@/views/latest-song/LatestSong"),
  },
  {
    name: "Rank",
    path: "/rank",
    components: () => import("@/views/rank/Rank"),
  },
  {
    name: "RankInfo",
    path: "/rank/info",
    components: () => import("@/views/rank/RankInfo"),
  },
  {
    name: "PlayList",
    path: "/playlist",
    components: () => import("@/views/playlist/PlayList"),
  },
  {
    name: "PlayListInfo",
    path: "/playlist/info",
    components: () => import("@/views/playlist/PlayListInfo"),
  },
  {
    name: "Singer",
    path: "/singer",
    components: () => import("@/views/singer/Singer"),
  },
  {
    name: "SingerList",
    path: "/singer/list",
    components: () => import("@/views/singer/SingerList"),
  },
  {
    name: "SingerInfo",
    path: "/singer/info",
    components: () => import("@/views/singer/SingerInfo"),
  },
  {
    name: "Storytelling",
    path: "/storytelling",
    components: () => import("@/views/storytelling/Storytelling"),
  },
  {
    name: "Search",
    path: "/search",
    components: () => import("@/views/search/Search"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
