/*
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-01 16:01:05
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
    component: () => import("@/views/latest-song/LatestSong"),
  },
  {
    name: "Rank",
    path: "/rank",
    component: () => import("@/views/rank/Rank"),
  },
  {
    name: "RankInfo",
    path: "/rank/info/:rankID",
    component: () => import("@/views/rank/RankInfo"),
  },
  {
    name: "PlayList",
    path: "/playlist",
    component: () => import("@/views/playlist/PlayList"),
  },
  {
    name: "PlayListInfo",
    path: "/playlist/info/:specialID",
    component: () => import("@/views/playlist/PlayListInfo"),
  },
  {
    name: "Singer",
    path: "/singer",
    component: () => import("@/views/singer/Singer"),
  },
  {
    name: "SingerList",
    path: "/singer/list",
    component: () => import("@/views/singer/SingerList"),
  },
  {
    name: "SingerInfo",
    path: "/singer/info",
    component: () => import("@/views/singer/SingerInfo"),
  },
  {
    name: "Storytelling",
    path: "/storytelling",
    component: () => import("@/views/storytelling/Storytelling"),
  },
  {
    name: "Search",
    path: "/search",
    component: () => import("@/views/search/Search"),
    children: [
      {
        name: "SearchRecentHot",
        path: "recent-hot",
        component: () => import("@/views/search/SearchRecentHot"),
      },
      {
        name: "SearchResult",
        path: "result",
        component: () => import("@/views/search/SearchResult"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
