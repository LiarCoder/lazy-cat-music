/*
 * @Description: 管理播放器组件的共享数据（音频数据、播放状态、歌词等歌曲信息）
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2021-12-01 14:31:11
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-09 00:09:37
 */

import { getAudio, getLyric } from "@/api/player";
import processLyric from "@/utils/lyric";
import { Dialog } from "vant";

const defalutImg = "http://m.kugou.com/v3/static/images/index/logo_kugou.png";

export default {
  namespaced: true,
  state() {
    return {
      audio: {
        audioEle: null,
        songUrl: "",
        songName: "",
        songDuration: 0,
        singerName: "",
        singerImg: defalutImg,
        albumImg: defalutImg,
        lyric: [],
      },
      status: {
        currentTime: 0,
        isSettingCurrentTimeManually: false,
        newCurrentTime: 0,
        isPlaying: false,
        isShowPlayerDetail: false,
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
      ctx.commit("setSong", { audio, lyric });
      ctx.commit("setList", { songs, index });
    },

    switchSong(ctx, actionType) {
      try {
        if (!["next", "prev"].includes(actionType)) {
          throw `[Action Error]: '${actionType}' is not a expected action type, it must be 'next' or 'prev'`;
        }
        let songs = ctx.state.list.songs;
        let index = ctx.state.list.index;
        let limit = actionType === "next" ? songs.length - 1 : 0;
        let limitMessage = actionType === "next" ? "已经是最后一首歌了" : "已经是第一首歌了";
        let newIndex = actionType === "next" ? index + 1 : index - 1;
        if (index === limit) {
          alert(limitMessage);
          return;
        }
        ctx.dispatch("getSong", { songs, index: newIndex });
      } catch (error) {
        console.error(error);
      }
    },
  },

  mutations: {
    setSong(state, { audio, lyric }) {
      if (!audio.url) {
        Dialog({
          message: "唱片公司要求这首歌付费后才能试听，请在手机酷狗里购买",
          width: "88%",
          confirmButtonColor: "#229ef8",
        });
        return;
      }
      state.audio.songUrl = audio.url;
      state.audio.songName = audio.songName;
      state.audio.songDuration = audio.timeLength;
      state.audio.singerName = audio.singerName;
      state.audio.singerImg = audio.imgUrl || defalutImg;
      state.audio.albumImg = audio.album_img || defalutImg;
      state.audio.lyric = processLyric(lyric);
      state.status.isPlaying = true;
    },

    setList(state, { songs, index }) {
      state.list.songs = songs;
      state.list.index = index;
    },

    updateCurrentTime(state, value) {
      state.status.currentTime = value;
    },

    setCurrentTime(state, newCurrentTime) {
      state.audio.audioEle.currentTime = newCurrentTime;
    },

    toggleStatus(state, status) {
      state.status[status] = !state.status[status];
    },
  },
};
