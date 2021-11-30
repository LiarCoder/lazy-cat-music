/*
 * @Description: 利用axios封装通用的网络请求操作
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-11-29 20:31:45
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-30 20:12:48
 */

import axios from "axios";
import { Toast } from "vant";

const axiosInstance = axios.create({
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 在 axios 请求拦截器中设置加载动画，每次发送请求时都会出现加载动画
    Toast.loading({
      message: "加载中...",
      loadingType: "spinner",
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (result) => {
    // 在响应拦截器中清除加载动画，等请求结果回来之后就会让加载动画消失
    Toast.clear();
    // 同时将返回结果中冗余嵌套消去一层
    return result.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @description: 向外暴露一个通用的网络请求函数
 * @param {String} url 发送网络请求的目标地址
 * @param {String} method 发送网络请求的类型，比如：get、post等，虽然本项目中只用到了
 *                        get类型的请求，但是为了本函数的复用性更好，所以设置了该参数
 * @param {Object} uploadData 发送网络请求时提交的数据，如果是get请求则为query参数
 *                            如果不是get请求，则为data参数
 * @return {Promise} 返回由Promise包装的响应结果
 */

export default (url, method, uploadData) => {
  return axiosInstance({
    url,
    method,
    // 下面这种形式是用于动态设置一个对象的 key 值的写法，不能简单地写成（xxxx可能为js表达式） `xxxx` : uploadData
    [method.toLowerCase() === "get" ? "params" : "data"]: uploadData,
  });
};
