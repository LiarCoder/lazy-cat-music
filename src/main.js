/*
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-18 20:36:03
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-21 02:17:12
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/common.css";
import vantUI from "./plugins/vant-ui";
import "vant/lib/index.css";
// import "vant/lib/index.less";
createApp(App).use(store).use(router).use(vantUI).mount("#app");
