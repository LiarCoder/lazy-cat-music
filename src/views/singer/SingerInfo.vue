<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:31:20
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-26 19:46:43
-->
<template>
  <div class="rank-info-wrapper">
    <div class="rank-info-top">
      <img
        src="https://imgessl.kugou.com/uploadpic/softhead/400/20200603/20200603112123228.jpg"
        alt=""
      />
    </div>

    <div class="playlist-info-intro">
      <p>
        薛之谦（Joker
        Xue），1983年7月17日出生于上海，华语流行乐男歌手、影视演员、音乐制作人，毕业于格里昂酒店管理学院。
        2005年，因参加选秀节目《我型我秀》而正式出道。2006年，发行首张同名专辑《薛之谦》，随后凭借歌曲《认真的雪》获得广泛关注。2007年，凭借专辑《你过得好吗》获得MusicRadio中国TOP排行榜内地年度最受欢迎男歌手奖。2008年，发行专辑《深深爱过你》；同年在上海举行个人首场演唱会“谦年传说”。2013年，专辑《几个薛之谦》获得MusicRadio中国TOP排行榜内地推荐唱片。2014年，凭借专辑《意外》获得第21届东方风云榜颁奖最佳唱作人；同年他还获得音悦V榜年度盛典年度创作歌手奖。
        2015年6月，薛之谦首度担当制作人并发行原创EP《绅士》；同年，他还主演都市励志剧《妈妈像花儿一样》。2016年，凭借EP《绅士》《一半》获得第16届全球华语歌曲排行榜最受欢迎男歌手、五大最受欢迎男歌手奖、上海地区杰出歌手奖及最受欢迎创作歌手奖，而歌曲《初学者》则获得年度二十大金曲奖。2017年4月，开启“我好像在哪见过你”全国巡回演唱会；同年，薛之谦获得第7届全球流行音乐年度盛典年度最佳男歌手及MusicRadio榜中国TOP排行榜内地最佳男歌手。
        2018年7月，薛之谦“摩天大楼”世界巡回演唱会于北京站启程，整个巡演横跨4大洲，8个国家，21个城市，累计上演场次23场。2019年2月14日，薛之谦在马来西亚举办巡回演唱会；同年12月27日，发行第十张个人专辑《尘》。2020年1月11日薛之谦获得年度原创音乐人。2020年12月31日，发行第11张个人专辑《天外来物》。
      </p>
      <div><i></i></div>
    </div>
    <hr />

    <div class="rank-info-list">
      <van-cell class="latest-cell-wrapper" title="陪你去流浪 (Live)" label="薛之谦、锤娜丽莎">
      </van-cell>

      <van-cell
        class="latest-cell-wrapper"
        title="敢爱敢做 (Live)"
        label="林子祥、薛之谦、胡夏、锤娜丽莎"
      >
      </van-cell>

      <van-cell class="latest-cell-wrapper" title="演员" label="薛之谦"> </van-cell>

      <van-cell class="latest-cell-wrapper" title="天外来物" label="薛之谦"> </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingerInfo",
};
</script>

<style lang="less">
.rank-info-wrapper {
  transform: translateY(-3.2143rem);
  .rank-info-top {
    height: 12.5rem;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: -68px;
    }
    span {
      padding-left: 1.07143rem;
      width: 100%;
      height: 2.8rem;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));

      position: absolute;
      bottom: 0;
      left: 0;
      color: #fafff2;
      font-size: 0.85714rem;
      &::before {
        content: "";
        display: block;
        height: 10px;
      }
    }
  }
  .playlist-info-intro {
    width: 100%;
    line-height: 1.8;
    padding: 0.5357rem 2.67857rem 0.5357rem 0.8929rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: auto;
    height: 2.25rem;
    div {
      font-size: 1rem;
      width: 2.1429rem;
      height: 2rem;
      line-height: 2.1429rem;
      position: absolute;
      top: 0.25rem;
      right: 0.1786rem;
      text-align: center;
      cursor: pointer;
      i {
        // line-height: 2.1429rem;
        // text-align: center;
        cursor: pointer;
        // font-style: normal;
        width: 1.25rem;
        height: 1.25rem;
        display: inline-block;
        vertical-align: text-bottom;
        background: url("~@/assets/images/close_icon.png") no-repeat;
        background-size: 100%;
      }
    }
  }
}

.latest-cell-wrapper {
  padding: 0 0 0 1.0714rem;
  height: 4.0714rem;
  align-items: center;
  font-size: 1rem;

  .van-cell__title {
    display: block;

    & + div {
      height: 100%;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        cursor: pointer;
        text-align: center;
        font-style: normal;
        width: 1.0357rem;
        height: 1.0814rem;
        display: inline-block;
        background: url("~@/assets/images/download_icon.png") no-repeat;
        background-size: 100%;
      }
    }
  }
  &::after {
    border-bottom: 1px solid #cecaca;
    // width: 100%;
  }
  .van-cell__value {
    text-align: left;
    color: #333;
  }
}
</style>
