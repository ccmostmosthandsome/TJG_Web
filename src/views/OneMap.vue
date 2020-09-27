<!--
 描述: 天津港水域船舶污染风险智能化动态监控平台
 作者: csg
 日期: 2020-09/17
-->
<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <span>
            <img :src="imgSrc" />
            <span class="tem">{{ weatcherData.tem }}°C</span>
          </span>
          <span>
            <img :src="imgSrc" />
            <span class="dem">{{ weatcherData.wea }}</span>
            <!--需要改没有用高程 -->
          </span>
          <span>
            <img :src="imgSrc" />
            <span class="win_speed">{{ weatcherData.win_speed }}</span>
          </span>
        </div>
        <h2>天津港水域船舶污染风险智能化动态监控平台</h2>
        <div class="showTime">
          <span class="date">{{ date }}</span>
          <span class="time">{{ nowTime }}</span>
          <span>{{ week }}</span>
        </div>
      </header>
      <div id="map" class="mainbox">
        <!-- <-- //地图 -->
        -->
        <div class="map_center">
          <div style="margin-right: 15px">
            <span
              style="
                position: absolute;
                z-index: 9999;
                font-size: 20px;
                padding: 58px;
                z-index: 9999;
                font-size: 20px;
                color: #fff;
              "
              >码头</span
            >
            <img src="../assets/img/inner.png" class="cen_button" />
          </div>
          <div style="margin-right: 15px">
            <span
              style="
                position: absolute;
                z-index: 9999;
                font-size: 20px;
                padding: 58px;
                z-index: 9999;
                font-size: 20px;
                color: #fff;
              "
              >错地</span
            >
            <img src="../assets/img/inner.png" class="cen_button" />
          </div>
          <div style="margin-right: 15px">
            <span
              style="
                position: absolute;
                z-index: 9999;
                font-size: 20px;
                padding: 58px;
                z-index: 9999;
                font-size: 20px;
                color: #fff;
              "
              >航道</span
            >
            <img
              src="../assets/img/inner.png"
              class="cen_button"
              style="margin-right: 0"
            />
          </div>
        </div>

        <!-- <-- 左侧面板 -->
        -->
        <div class="leftpanel">
          <div class="panel">
            <h2>业务范围</h2>
            <business />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>人才队伍</h2>
            <talent />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>营收状况</h2>
            <income />
            <div class="panel-footer"></div>
          </div>
        </div>

        <!-- <-- 右侧面板 -->
        -->
        <div class="rightpanel">
          <L1Tabs v-bind:items="rightPanel"> </L1Tabs>
          <!--          <div class="panel">-->
          <!--            <h2>产品热词</h2>-->
          <!--            <wordCloud />-->
          <!--            <div class="panel-footer"></div>-->
          <!--          </div>-->
          <!--          <div class="panel">-->
          <!--            <h2>客户分布</h2>-->
          <!--            <distribution />-->
          <!--            <div class="panel-footer"></div>-->
          <!--          </div>-->
          <!--          <div class="panel">-->
          <!--            <h2>发展历程</h2>-->
          <!--            <history />-->
          <!--            <div class="panel-footer"></div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import "@/assets/js/flexible";
import { initMap } from "@/assets/js/map";
import { rightPanel } from "@/store/config";

export default {
  components: {},
  data() {
    return {
      rightPanel: rightPanel,
      nowTime: "",
      week: "",
      date: "",
      timer: null,
      imgSrc: "",
      weatcherData: {},
      startVal: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60);
    this.nowTimes();
    initMap.loadMap();
  },
  methods: {
    timeFormate(timeStamp) {
      //显示当前时间
      let newDate = new Date(timeStamp);
      let year = newDate.getFullYear();
      let month =
        newDate.getMonth() + 1 < 10
          ? "0" + (newDate.getMonth() + 1)
          : newDate.getMonth() + 1;
      let date =
        newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
      let hh =
        newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
      let mm =
        newDate.getMinutes() < 10
          ? "0" + newDate.getMinutes()
          : newDate.getMinutes();
      let ss =
        newDate.getSeconds() < 10
          ? "0" + newDate.getSeconds()
          : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      let getWeek = "星期" + weeks[week];
      this.week = getWeek;
      this.date = year + "/" + month + "/" + date;
      this.nowTime = hh + ":" + mm + ":" + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
    getWeather() {
      // 第三方天气api接口
      axios
        .get("https://www.tianqiapi.com/api/", {
          params: {
            appid: "26148275",
            appsecret: "2id6H48Y",
            version: "v6",
          },
        })
        .then((res) => {
          if (res.data) {
            if (res.data.wea_img == "xue") {
              this.imgSrc = require("../assets/img/brand/xue.png");
            } else if (res.data.wea_img == "yin") {
              this.imgSrc = require("../assets/img/brand/yin.png");
            } else if (
              res.data.wea_img == "yu" ||
              res.data.wea_img == "bingbao"
            ) {
              this.imgSrc = require("../assets/img/brand/yu.png");
            } else if (res.data.wea_img == "yun") {
              this.imgSrc = require("../assets/img/brand/yun.png");
            } else if (res.data.wea_img == "wu") {
              this.imgSrc = require("../assets/img/brand/wu.png");
            } else if (res.data.wea_img == "shachen") {
              this.imgSrc = require("../assets/img/brand/shachen.png");
            } else if (res.data.wea_img == "lei") {
              this.imgSrc = require("../assets/img/brand/lei.png");
            } else {
              this.imgSrc = require("../assets/img/brand/qing.png");
            }
            this.weatcherData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: rotateZ(0deg); /*从0度开始*/
  }
  100% {
    transform: rotateZ(360deg); /*360度结束*/
  }
}

.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;

  .wrap {
    background: url(../assets/img/brand/bg.jpg) no-repeat #000;
    background-size: cover;
    line-height: 1;

    header {
      position: relative;
      height: 1rem;
      background: url(../assets/img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7ef0ff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 0.75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 3.375rem;
        top: 0.35rem;
        font-size: 0.2rem;
        color: #fff;

        img {
          width: 0.3rem;
          margin-bottom: 0.1rem;
        }

        span {
          display: inline-grid;
          margin-right: 0.15rem;
        }
      }

      .showTime {
        position: absolute;
        top: 0.5rem;
        color: #fff;
        display: flex;
        font-size: 0.2rem;
        left: 0.2rem;

        .time {
          margin-right: 0.18rem;
        }

        .date {
          &:nth-child(1) {
            text-align: right;
            margin-right: 0.18rem;
          }
        }
      }
    }

    .mainbox {
      min-width: 1024px;
      max-width: 1920px;
      height: 100%;
      width: 100%;
      padding: 0;
      position: absolute;
      background-color: black;
    }
    .map_center {
      position: absolute;
      bottom: 90px;
      left: 7rem;
      display: flex;
      .cen_button {
        display: inline-grid;
        animation: rotate 2s linear infinite;
      }
    }

    .leftpanel {
      background: rgba(255, 255, 255, 0.04) url(../assets/img/bg-1.png);
      width: 300px;
      float: left;
      position: absolute;
      margin: 10px 0;

      .panel {
        position: relative;
        height: 3.175rem;
        border: 1px solid rgba(25, 186, 139, 0.17);
        background: rgba(255, 255, 255, 0.04) url(../assets/img/brand/line.png);
        padding: 0 0.1875rem 0;
        margin-bottom: 0.1875rem;

        .panel-footer {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
        }

        h2 {
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          color: #fff;
          font-size: 0.225rem;
          font-weight: 400;

          a {
            margin: 0 0.1875rem;
            color: #fff;
            text-decoration: none;
          }
        }

        .chart {
          height: 3rem;
        }
      }
    }

    .rightpanel {
      //background: rgba(255, 255, 255, 0.04) url(../assets/img/bg-1.png);
      width: 442px;
      float: right;
      right: 0;
      margin: 10px 0;
      position: absolute;
    }
  }
}
</style>
