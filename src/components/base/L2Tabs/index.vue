<template>
  <div class="l2-panel-tabs">
    <el-tabs v-model="activeName" stretch="true">
      <el-tab-pane
          v-for="item in items"
          :label="item.name"
          :key="item.name"
          :name="item.name"
      >
<!--        <h3>{{ item.name }}</h3>-->

        <TabShow
            v-bind:items1="[{id:1,label: '信息数据', value: '*******'},
               {id:2,label: '事故报告', value: '*******'},
                {id:3,label: '应急指挥', value: '*******'}]"
        ></TabShow>
        <Table></Table>
        <Contamination></Contamination>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "L2Tabs",
  props: ["items"],
  data() {
    return {
      // items: this.items,
      activeName: this.items[0].name,
      option: null,
      timer: null,
    };
  },
};
</script>

<style scoped>
.l2-panel-tabs {
  padding: 5px;
}

.l2-panel-tabs >>> .el-tabs__item {
  border: 1px solid #1f3153;
  background-color: #0b143a;
  color: #ffffff !important;
  padding: 0 10px !important;
  height: 30px !important;
  line-height: 30px !important;
  /*position: relative !important;*/
  transform: skewX(-25deg);
  /* transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); */
}

.l2-panel-tabs >>> .el-tabs__item text {
  transform: skewX(45deg);
  /* transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); */
}

.l2-panel-tabs >>> .el-tabs__item.is-active {
  border: 2px solid #0383E3;
  background-color: #083f81;
}

.l2-panel-tabs >>> .el-tabs__active-bar {
  display: none;
}

.l2-panel-tabs >>> .el-tabs__content {
  /* border: 1px solid #416cdb; */
}

.l2-panel-tabs >>> .el-tabs__nav-wrap::after {
  /* border: 1px solid #416cdb; */
  background-color: rgba(1, 1, 1, 0);
}

.l2-panel-tabs >>> .el-tabs__nav-next, .el-tabs__nav-prev {
  /* border: 1px solid #416cdb; */
  color: rgba(1, 1, 1, 0);
  line-height: 30px !important;
}
</style>