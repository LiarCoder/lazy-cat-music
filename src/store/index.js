/*
 * @Description: 全局状态（数据）管理
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-02 15:24:22
 */
import { createStore } from "vuex";

import player from "./modules/player";
import header from "./modules/header";
import search from "./modules/search";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    player,
    header,
    search,
  },
});
