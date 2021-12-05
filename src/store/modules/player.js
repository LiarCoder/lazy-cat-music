/*
 * @Description: 管理播放器组件的共享数据（音频数据、播放状态、歌词等歌曲信息）
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-01 14:31:11
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-05 00:41:59
 */

import { getAudio, getLyric } from "@/api/player";

export default {
  namespaced: true,
  state() {
    return {
      audio: {
        songUrl: "",
        songName: "",
        songDuration: 0,
        singerName: "",
        singerImg: "",
        albumImg: "http://m.kugou.com/v3/static/images/index/logo_kugou.png",
        lyric: "",
      },
      status: {
        currentTime: 0,
        isPlaying: false,
        isShowPlayerDetail: false,
        isShowPlayerFooter: false,
      },
      list: {
        songs: [],
        index: 0,
      },
    };
  },

  actions: {
    async getSong(ctx, { songs, index }) {
      const audio = await getAudio(songs[index].hash);
      const lyric = await getLyric(songs[index].duration * 1000, songs[index].hash);
      ctx.state.list.songs = songs;
      ctx.state.list.index = index;
      ctx.commit("setSong", { audio, lyric });
    },

    next(ctx) {
      let songs = ctx.state.list.songs;
      let index = ctx.state.list.index;
      if (index === songs.length - 1) {
        alert("已经是最后一首歌了。");
        return;
      }
      ctx.dispatch("getSong", { songs, index: index + 1 });
    },
  },

  mutations: {
    setSong(state, { audio, lyric }) {
      state.audio.songUrl = audio.url;
      state.audio.songName = audio.songName;
      state.audio.songDuration = audio.timeLength;
      state.audio.singerName = audio.singerName;
      state.audio.singerImg = audio.imgUrl;
      state.audio.albumImg = audio.album_img;
      state.audio.lyric = lyric;
      state.status.isPlaying = true;
    },
    togglePlayingStatus(state) {
      state.status.isPlaying = !state.status.isPlaying;
    },
  },
};
