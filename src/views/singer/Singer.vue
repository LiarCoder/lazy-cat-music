<!--
 * @Descripttion: 
 * @Version: 
 * @Author: LiarCoder
 * @Date: 2021-11-22 15:24:02
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-12-01 17:46:46
-->
<template>
  <van-cell-group v-for="(classGroup, index) in classList" :key="index">
    <van-cell
      v-for="classItem in classGroup"
      :key="classItem.classid"
      :title="classItem.classname"
      :to="`/singer/list/${classItem.classid}`"
    />
  </van-cell-group>
</template>

<script>
import { getSingerClass } from "@/api/singer";
import { reactive } from "vue";

export default {
  name: "Singer",
  setup() {
    let classList = reactive({
      hot: [],
      chinese: [],
      jk: [],
      ea: [],
    });

    let classMap = new Map();
    classMap.set("热门", "hot");
    classMap.set("华语", "chinese");
    classMap.set("日韩", "jk");
    classMap.set("欧美", "ea");

    getSingerClass().then(
      (result) => {
        // console.log(result);
        for (const singerClass of result.list) {
          classList[classMap.get(singerClass.classname.slice(0, 2))].push(singerClass);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return { classList };
  },
};
</script>

<style lang="less">
.van-cell-group {
  font-size: 1rem;
  margin: 1rem 0.7143rem 1.0714rem 0.7143rem;
  border: 1px solid #e4e4e4;
  border-radius: 5px;

  .van-cell {
    // background: var(--van-cell-background-color);
    background: #fbfbfb;
    padding: 0.7143rem;
    display: block;
    font-size: 1rem;
    color: #333;

    .van-cell__title,
    .van-cell__value {
      display: inline-block;
    }

    &::after {
      // border-bottom: 1px solid var(--van-cell-border-color);
      border-bottom: 1px solid #cecaca;
      width: 100%;
      left: 0;
    }

    .van-cell__title {
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 0.57143rem;
        height: 1rem;
        background: url("~@/assets/images/arrow_icon.png") no-repeat center;
        background-size: 100%;
        top: 50%;
        transform: translateY(-50%);
        right: 0.7143rem;
      }
    }
  }
}
</style>
