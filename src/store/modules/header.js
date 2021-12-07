/*
 * @Description: 管理头部组件的共享数据
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-01 14:31:01
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-07 23:15:57
 */

export default {
  namespaced: true,
  state() {
    return {
      isShowHeaderInfo: false,
      headerInfo: "",
      headerStyle: {
        backgroundImage: "",
        color: "",
      },
    };
  },

  mutations: {
    setShowHeaderInfo(state, status) {
      state.isShowHeaderInfo = status;
    },

    setHeaderInfo(state, info) {
      state.headerInfo = info;
    },

    setHeaderStyle(state, style) {
      state.headerStyle = { ...style };
    },
  },
};
