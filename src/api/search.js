/*
 * @Description: 提供【搜索】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-30 14:00:46
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 20:03:38
 */

import request from "@/utils/request";

/**
 * @description: 获取最近热门搜索列表
 * @return {Promise} 返回由Promise包装的响应结果，包含最近热门搜索关键词
 */

export const getRecentHotList = () => {
  return request("/mobliecdn_kugou/api/v3/search/hot", "get", {
    format: json,
    plat: 0,
    count: 30,
  });
};

/**
 * @description: 根据某个关键词，获取搜索结果
 * @param {String} keyword 想要搜索的关键词
 * @return {Promise} 返回由Promise包装的响应结果，包含所有搜索结果
 */

export const getSearchResult = (keyword) => {
  return request("/mobliecdn_kugou/api/v3/search/song", "get", {
    keyword,
    format: json,
    page: 1,
    pagesize: 30,
    showtype: 1,
  });
};
