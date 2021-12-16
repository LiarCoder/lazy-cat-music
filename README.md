# lazy-cat-music

## 应用描述

这是一个仿造 [酷狗音乐](http://m.kugou.com/) 移动 web 版的音乐应用，仅作个人练习 Vue3 等前端技术之用。

## 如何使用

### Project setup（安装依赖）

```
npm install
```

### Compiles and hot-reloads for development（以开发模式运行）

```
npm run serve
```

### Compiles and minifies for production（以生产模式打包输出）

```
npm run build
```

### Lints and fixes files（代码检查）

```
npm run lint
```

### Customize configuration（自定义配置 vue.config.js）

See [Configuration Reference](https://cli.vuejs.org/config/).

## 开发日志

【2021 年 11 月 18 日 20:36:08】利用 Vue CLI 创建项目骨架。

【2021 年 11 月 19 日 19:01:47】调整项目原来的模板结构，删除原本的一些无用文件和默认组件。进行目录划分并增加了一些配置文件，完成项目初始化。

【2021 年 11 月 20 日~25 日】期间忘记记录进度了，大概就是进行各个模块的页面结构和样式的开发。

【2021 年 11 月 26 日 22:22:32】完成【歌手】模块的二级页面结构开发。

【2021 年 11 月 27 日 00:32:58】完成【搜索】模块的页面结构开发。

【2021 年 11 月 27 日 15:33:16】开始播放器组件的开发。

【2021 年 11 月 28 日 16:37:00】完成播放器组件的样式结构开发。

【2021 年 11 月 28 日 16:52:06】开始组织数据、设置事件等工作。

【2021 年 11 月 30 日 20:20:30】安装 axios，完成网络请求 API 的封装及项目代理配置。

【2021 年 11 月 30 日 21:42:34】完成【新歌】模块的数据渲染处理。

【2021 年 12 月 01 日 14:23:22】完成【排行】模块的数据渲染处理。

【2021 年 12 月 01 日 16:25:43】完成【歌单】模块的数据渲染处理。

【2021 年 12 月 01 日 18:32:03】完成【歌手】模块的数据渲染处理。

【2021 年 12 月 02 日 15:14:37】完成【搜索】模块的数据渲染处理。

【2021 年 12 月 02 日 15:15:27】开始处理组件之间的数据传输等问题。

【2021 年 12 月 03 日 15:27:55】利用 Vuex 完成【搜索】模块的数据交互共享处理。

【2021 年 12 月 04 日 23:35:33】利用 Vuex 完成底部播放器模块的数据交互共享处理。

【2021 年 12 月 05 日 15:22:55】完成底部播放器的播放、暂停、隐藏面板的基本功能。

【2021 年 12 月 06 日 16:49:36】完成播放详情页的播放、暂停等基本功能，开始完善进度条联动功能。

【2021 年 12 月 06 日 18:08:09】大体完成进度条联动功能，但是稍有瑕疵。接着完成歌词部分的联动。

【2021 年 12 月 07 日 00:30:20】初步完成歌词联动效果，但是稍有瑕疵，有待优化。

【2021 年 12 月 07 日 23:16:28】初步完成顶部信息条的样式和信息随路由切换的效果，细节有待打磨。

【2021 年 12 月 08 日 01:03:19】为 LatestSong 之外的页面补上音频播放功能。

【2021 年 12 月 08 日 01:46:39】完善 PlayList 和 SingerInfo 页面中的介绍折叠功能。

【2021 年 12 月 08 日 14:43:31】更改播放详情页的时间显示格式和歌词滚动时机。

> 突发情况：下面的几条更新记录，在我错误地使用 `git restore` 命令后丢失了！（准确地说是在 README.md 文件没有添加到暂存区的情况下，使用 `git restore` 命令时没有加上 `--staged` 参数，从而导致下面新增的内容直接从工作区中丢失了……），在网上一番搜索之后发现没有什么解决办法……😢，还好我的 git commit 信息中基本保留了我的更新日志的内容，所以我就根据 `git log` 后的内容恢复了以下日志。在此增加经验：使用 `git restore` 命令时一定要小心！记得加上 `--staged` 参数防止内容丢失。

【===========================手动恢复内容==============================】

【2021 年 12 月 08 日 16:42:57】更改播放详情页歌词滚动时机。

【2021 年 12 月 08 日 18:00:38】将 Vuex 中的 mutations 中的几个 toggle 函数做合并。

【2021 年 12 月 08 日 22:22:55】封装切换歌曲的函数 switchSong（并删除了原来的切换函数）。

【2021 年 12 月 08 日 23:41:48】将 Vuex 中的 actions 中的对 state 数据的操作移到 mutations 中。

【===========================手动恢复内容==============================】

【2021 年 12 月 09 日 01:52:07】增加提升用户体验的付费提示和下载提示，并增加相应的 hook 函数。

【2021 年 12 月 10 日 00:29:29】封装 Vuex 中的辅助函数。

【2021 年 12 月 16 日 01:11:40】封装歌曲列表组件 SongList。

【2021 年 12 月 16 日 16:29:05】封装带有图片和导航的单元组件 NavCell。

【2021 年 12 月 16 日 18:14:26】封装介绍面板 IntroPanel。

【2021 年 12 月 16 日 19:49:00】进行最后的整理工作（删除无用代码，增加部分注释，统一代码风格等）。
