/*
 * @Description: 封装 Vuex 中的 mapState、mapGetters 辅助函数，使之适应 Vue3 的 Composition API
 *               > 参考：[论如何在vue3中正确的使用vuex的辅助函数 - 掘金](https://juejin.cn/post/6999473771253874701)
 *               > 参考：[vuex/helpers.js at dev · vuejs/vuex](https://github.com/vuejs/vuex/blob/dev/src/helpers.js)
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-09 16:30:23
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-09 22:52:39
 */

import { useStore, mapState, mapGetters, createNamespacedHelpers } from "vuex";
import { computed } from "vue";

/**
 * @description: 包装 Vuex 中原始的辅助函数，使其更优雅地适应 Composition API
 * @param {Function} originMapHelper Vuex 中原始的辅助函数（mapState 或 mapGetters）
 * @param {Array|Object} targetAttr 想要映射的来自 Vuex 的目标属性（state 和 getters 中的数据）
 * @return {Object} 已经做好映射的数据对象
 */

const mapWrapper = (originMapHelper, targetAttr) => {
  const store = useStore();
  let originMappedFuncObject = originMapHelper(targetAttr);
  let computedTargetAttr = {};

  Object.keys(originMappedFuncObject).forEach((key) => {
    /**
     * 下面一句是关键，因为原 Vuex 中获取 state 是通过 this.$store.state 的方式（getters同理）
     * 而我们使用 Composition API 时（也就是在 setup() 函数中时）是没办法通过 this 获取 Vue 实例
     * 的，所以需要进行对 this 的绑定关系做一个重定向，并利用 bind() 函数应用该重定向
     */

    let redirectedStore = { $store: store };

    let newMappedFunc = originMappedFuncObject[key].bind(redirectedStore);
    computedTargetAttr[key] = computed(newMappedFunc);
  });

  return computedTargetAttr;
};

/**
 * @description: 生成新的 map 辅助函数
 * @param {String} helperName Vuex 中原始的辅助函数的名字，便于后续使用 createNamespacedHelpers
 * @param {Function} originMapHelper Vuex 中原始的辅助函数
 * @return {Function} 新生成的辅助函数
 */

const generateNewMapHelper = (helperName, originMapHelper) => {
  /**
   * @description: 包装过后的 map 辅助函数，可以按照以前 Vue2 中使用 map 辅助函数的用法来使用
   * @param {String} namespace 命名空间（Vuex模块名），如果没有模块化，则不需要传
   * @param {Array|Object} targetAttr 目标映射属性（Vuex 的 state 和 getters 中的数据）
   * @return {Object} 已经做好映射的数据对象
   */
  return function (namespace, targetAttr) {
    let mapHelper = originMapHelper;
    if (typeof namespace === "string") {
      mapHelper = createNamespacedHelpers(namespace)[helperName];
    } else {
      targetAttr = namespace;
    }

    return mapWrapper(mapHelper, targetAttr);
  };
};

export default () => {
  const useState = generateNewMapHelper("mapState", mapState);
  const useGetters = generateNewMapHelper("mapGetters", mapGetters);

  return { useState, useGetters };
};
