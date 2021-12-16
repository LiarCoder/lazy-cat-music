/*
 * @Description: 播放器相关的数据、函数封装
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-03 16:02:23
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 18:59:19
 */

import { useStore } from "vuex";
import { Dialog } from "vant";

export default () => {
  // 下面这个store千万不要写到playAudio函数里面，否则控制台会报错【TypeError: can't read property 'dispatch' of undefined】
  // 初步判定是箭头函数作用域的问题
  const store = useStore();

  let playAudio = (songs, index) => {
    store.dispatch("player/getSong", { songs, index });
  };

  let downloadAudio = () => {
    Dialog({
      message: "下载需要手机酷狗客户端支持。",
      width: "88%",
      confirmButtonColor: "#229ef8",
    });
  };

  return { playAudio, downloadAudio };
};
