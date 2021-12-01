/*
 * @Description: 提供【排行】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-30 14:00:30
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 23:54:47
 */

import request from "@/utils/request";

/**
 * @description: 获取排行列表
 * @return {Promise} 返回由Promise包装的响应结果，包含所有的排行
 */

export const getRankList = () => {
  return request("/m_kugou/rank/list", "get", { json: true });
};

/**
 * @description: 获取某个排行的具体信息
 * @param {String} rankID 某个排行的具体标识
 * @return {Promise} 返回由Promise包装的响应结果，包含该排行中的所有歌曲列表等信息
 */

export const getRankListInfo = (rankID) => {
  return request("/m_kugou/rank/info/", "get", {
    rankid: rankID,
    page: 1,
    json: true,
  });
};
