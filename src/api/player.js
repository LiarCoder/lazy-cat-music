/*
 * @Description: 提供【播放器】模块的相关的API函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-03 22:39:48
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-03 23:37:25
 */

import request from "@/utils/request";

/**
 * @description: 获取某个歌曲的音频信息
 * @param {String} songHash 某个歌曲的具体标识
 * @return {Promise} 返回由Promise包装的响应结果，包含歌曲音频和其他信息
 */

export const getAudio = (songHash) => {
  return request("/m_kugou/api/v1/song/get_song_info", "get", {
    cmd: "playInfo",
    hash: songHash,
  });
};

/**
 * @description: 获取某个歌曲的歌词
 * @param {String} timeLength 某个歌曲的时长信息
 * @param {String} songHash 某个歌单的具体标识
 * @return {Promise} 返回由Promise包装的响应结果，包含歌曲歌词和其他信息
 */

export const getLyric = (timeLength, songHash) => {
  return request(`/m_kugou/app/i/krc.php`, "get", {
    cmd: 100,
    timelength: timeLength,
    hash: songHash,
  });
};
