/*
 * @Descripttion: 项目中将使用的UI组件为vant，本文件统一将所使用到的组件以插件形式供Vue使用
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-20 19:55:09
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 20:43:31
 */

import { Tab, Tabs, Slider, Loading, Swipe, SwipeItem, Cell, CellGroup, Search } from "vant";

export default {
  install(app) {
    app.use(Tab);
    app.use(Tabs);
    app.use(Slider);
    app.use(Loading);
    app.use(Swipe);
    app.use(SwipeItem);
    app.use(Cell);
    app.use(CellGroup);
    app.use(Search);
  },
};
