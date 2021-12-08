/*
 * @Description: 封装有关数学运算的函数
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-08 13:27:29
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-08 14:42:59
 */

/**
 * @description: 获取除法运算的商和余数
 * @param {Number} dividend 被除数
 * @param {Number} divisor 除数
 * @return {Array} 第一位为商，第二位为余数
 */

// 突然发现本项目中其实没必要用到该工具函数，但还是留着吧……

export const divide = (dividend, divisor) => {
  let quotient = parseInt(dividend / divisor);
  let remaining = dividend % divisor;
  return [quotient, remaining];
};
