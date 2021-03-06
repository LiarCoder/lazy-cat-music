/*
 * @Descripttion:
 * @Version:
 * @Author: LiarCoder
 * @Date: 2021-11-19 15:49:40
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-16 19:48:46
 */

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/m_kugou": {
        target: "http://m.kugou.com",
        pathRewrite: { "^/m_kugou": "" },
        changeOrigin: true,
        headers: { referer: "http://m.kugou.com" },
      },
      "/mobliecdn_kugou": {
        target: "http://mobilecdn.kugou.com",
        pathRewrite: { "^/mobliecdn_kugou": "" },
        changeOrigin: true,
        headers: { Referer: "http://m.kugou.com" },
      },
    },
  },
};
