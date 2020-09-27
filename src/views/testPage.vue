<!--
 描述: 天津港水域船舶污染风险智能化动态监控平台
 作者: csg
 日期: 2020-09/17
-->
<template>
  <div class="brand-container">
    <L1Tabs
        v-bind:items="rightPanel"
    >
      <!--      <basePanel></basePanel>-->
    </L1Tabs>

  </div>
</template>

<script>
import "@/assets/js/flexible";
import {rightPanel} from "@/store/config"

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
  created() {
  },
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60);
    this.nowTimes();
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
}
</style>
