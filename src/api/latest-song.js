/*
 * @Description: 提供【新歌】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-30 14:00:07
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 20:00:55
 */

import request from "@/utils/request";

/**
 * @description: 获取最近新歌的歌曲列表
 * @return {Promise} 返回由Promise包装的响应结果，包含最近新歌的信息列表
 */

export const getLatestSongs = () => {
  return request("/m_kugou", "get", { json: true });
};
