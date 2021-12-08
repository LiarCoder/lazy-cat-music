/*
 * @Description: 封装一些处理时间的函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-05 21:56:55
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-08 14:20:15
 */

/**
 * @description: 将 HH:MM:SS.xx 或 MM:SS.xx 的时间格式转换为以秒为单位的时间
 * @param {String} rawTime 原始时间
 * @return {Number} 处理过的时间（单位为秒）
 */

export const toSeconds = (rawTime) => {
  let timeArr = rawTime.split(":").map(Number).reverse();
  return timeArr.reduce((acc, cur, idx) => {
    return acc + cur * Math.pow(60, idx);
  }, 0);
};

/**
 * @description: 把以秒为单位的时间转为 MM:SS 格式的时间
 * @param {Number} rawTime 原始时间，单位为秒
 * @return {String} 处理过的时间
 */

export const toMMSS = (rawTime) => {
  let minute = parseInt(rawTime / 60)
    .toString()
    .padStart(2, "0");
  let second = (rawTime % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};
