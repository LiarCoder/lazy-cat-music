/*
 * @Description: 处理原始歌词的通用函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-05 16:54:21
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-07 00:24:01
 */

const { toSeconds } = require("./time.js");

/**
 * @description: 处理原歌词
 * @param {String} rawLyric 通过网络请求获得的原歌词，包含一些歌词元信息和具体歌词内容
 * @return {Array} 剔除歌词元信息和换行符后，将有效歌词及其对应时间戳保存在数组中
 */

// 注意，有些歌曲的元信息比较多，有些则比较少，而且有些歌曲的第一句显示的有效歌词可能不是[00:00.00]

export default (rawLyric) => {
  let validLyricRegex = /\[(\d{1,}):(\d{2}\.\d{2,3})\](.*)/g;
  let timestamp = "";
  let lyricText = "";
  return rawLyric.match(validLyricRegex).map((cur) => {
    timestamp = toSeconds(cur.slice(1, 9));
    lyricText = cur.slice(10);
    return {
      timestamp,
      lyricText,
    };
  });
};
