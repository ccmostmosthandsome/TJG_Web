<template>
  <div class="table">
    <div class="header header-color">
      <div>船舶名称</div>
      <div>船型</div>
      <div>货物类型</div>
      <div>吨级</div>
    </div>
    <div
      v-for="(item, index) in tableData"
      :key="index"
      class="body"
      :class="[index % 2 === 0 ? 'normal' : 'height-light']"
    >
      <div>{{item.name}}</div>
      <div>{{item.ship_type}}</div>
      <div>{{item.tonner_type}}</div>
      <div>{{item.tonner}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",

  data() {
    return {
      tableData: [
        {
          ship_type: "化学品船",
          name: "船舶1",
          tonner_type: "--",
          tonner: "--",
        },
        {
          ship_type: "化学品船",
          name: "船舶3",
          tonner_type: "--",
          tonner: "--",
        },
        {
          ship_type: "化学品船",
          name: "船舶1",
          tonner_type: "--",
          tonner: "--",
        },
        {
          ship_type: "化学品船",
          name: "船舶2",
          tonner_type: "--",
          tonner: "--",
        },
        {
          ship_type: "化学品船",
          name: "船舶2",
          tonner_type: "--",
          tonner: "--",
        },
        {
          ship_type: "化学品船",
          name: "船舶12",
          tonner_type: "--",
          tonner: "--",
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
      width: 25%;
      text-align: center;
      height: 30px;
      line-height: 30px;
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