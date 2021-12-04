/*
 * @Description: 播放器相关的数据、函数封装
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-03 16:02:23
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-04 21:39:15
 */

import { useStore } from "vuex";

export default () => {
  // 下面这个store千万不要写到playAudio函数里面，否则控制台会报错【TypeError: can't read property 'dispatch' of undefined】
  // 初步判定是箭头函数作用域的问题
  const store = useStore();

  let playAudio = (songs, index) => {
    // console.log("playAudio被调用了");
    store.dispatch("player/getSong", { songs, index });
  };

  return playAudio;
};
