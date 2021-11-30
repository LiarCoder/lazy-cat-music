/*
 * @Description: 提供【歌单】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-30 14:00:23
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 20:08:20
 */
import request from "@/utils/request";

/**
 * @description: 获取歌单列表
 * @return {Promise} 返回由Promise包装的响应结果，包含所有的歌单
 */

export const getPlaylist = () => {
  return request("/m_kugou/plist/index", "get", { json: true });
};

/**
 * @description: 获取某个歌单的具体信息
 * @param {String} listID 某个歌单的具体标识
 * @return {Promise} 返回由Promise包装的响应结果，包含该歌单中的所有歌曲列表等信息
 */

export const getPlaylistInfo = (listID) => {
  return request(`/m_kugou/plist/list/${listID}`, "get", { json: true });
};
