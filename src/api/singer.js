/*
 * @Description: 提供【歌手】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-30 14:00:53
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 19:59:15
 */

import request from "@/utils/request";

/**
 * @description: 获取歌手列表
 * @param {String} classID 歌手在分类列表中的ID
 * @return {Promise} 返回由Promise包装的响应结果，包含对应分类的歌手列表
 */
export const getSingerList = (classID) => {
  return request(`/m_kugou/singer/list/${classID}`, "get", { json: true });
};

/**
 * @description: 获取某个歌手的具体信息
 * @param {String} singerID 某个歌手对应的唯一ID
 * @return {Promise} 返回由Promise包装的响应结果，包含相应歌手的详细信息
 */

export const getSingerInfo = (singerID) => {
  return request(`/m_kugou/singer/info/${singerID}`, "get", { json: true });
};
