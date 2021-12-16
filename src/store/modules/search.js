/*
 * @Description: 管理搜索组件的共享数据
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-02 15:22:46
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-09 23:34:52
 */

import { getSearchResult } from "@/api/search";

export default {
  namespaced: true,
  state() {
    return {
      keyword: { text: "" },
      searchResults: [],
      resultAmount: 0,
    };
  },

  actions: {
    search(ctx) {
      getSearchResult(ctx.state.keyword).then(
        (result) => {
          ctx.commit("updateResults", result.data);
        },
        (error) => {
          console.warn(error);
        }
      );
    },
  },

  mutations: {
    updateResults(state, data) {
      state.searchResults = data.info;
      state.resultAmount = data.total;
    },
  },
};
