<template>
  <div class="table">
    <hr />
    <div class="pollution_event">
      <span class="event-name">污染事件</span>
      <span class="event-count">3起</span>
    </div>
    <div class="header header-color">
      <div>日期</div>
      <div>地点</div>
      <div>原因</div>
      <div>船名</div>
      <div>污染名称</div>
      <div>污染数量</div>
    </div>
    <div
      v-for="(item, index) in tableData"
      :key="index"
      class="body"
      :class="[index % 2 === 0 ? 'normal' : 'height-light']"
    >
      <div>{{item.data}}</div>
      <div>{{item.place}}</div>
      <div>{{item.reason}}</div>
      <div>{{item.name}}</div>
      <div>{{item.pollution_name}}</div>
      <div>{{item.pollution_count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contamination",

  data() {
    return {
      tableData: [
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
        {
          data: "化学品船",
          place: "天津A",
          reason: "--",
          name: "船舶1",
          pollution_name: "--",
          pollution_count: "--",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.normal {
  background: #0d0f0f;
}
.height-light {
  background: #122237;
}

.table {
  .pollution_event {
    display: flex;
    justify-content: space-between;
    margin: 0 33px 0 33px;

    .event-name {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #4fa0ff;
      line-height: 57px;
    }
    .event-count {
      font-size: 18px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #ffc000;
      line-height: 57px;
    }
  }
  .header-color {
    background: #12293f;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #cdd8ea;
  }
  .header {
    display: flex;
    justify-content: space-evenly;

    div {
      display: inline-block;
      width: 16.7%;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
  .body {
    @extend .header;

    div {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>