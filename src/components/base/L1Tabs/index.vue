
<template>
  <div class="l1-panel-tabs">
    <el-tabs v-model="activeName" stretch="true">
      <el-tab-pane
        v-for="item in items"
        :label="item.itemName"
        :key="item.itemName"
        :name="item.itemName"
      >
        <!-- <slot name="title"> 
          {{item.label}} 1111
        </slot> -->

<!--        <slot></slot>-->

        <base-panel :title="item.itemName" :items="item.items"></base-panel>

        <!-- {{ item.label }} -->
        <!-- <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {{ item.label }} -->
      </el-tab-pane>
      <!-- <ul role="tablist" aria-orientation="horizontal">
    <li v-for="item in items" role="tab" tabindex="0">
      {{ item.label }}
    </li>
  </ul> -->
      <!-- <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "L1Tabs",
  props: ["items"],
  data() {
    return {
      // items: this.items,
      activeName: this.items[0].itemName,
      option: null,
      timer: null,
    };
  },
};
</script>

<style scoped>
.l1-panel-tabs {
  /*padding: 5px;*/
}
.l1-panel-tabs >>> .el-tabs__item {
  border: 1px solid #1f3153;
  background-color: #0b143a;
  color: #298ed5 !important;
  padding: 0 35px !important;
  height: 30px !important;
  line-height: 30px !important;
  /* transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); */
}

.l1-panel-tabs >>> .el-tabs__item.is-active {
  border: 1px solid #416cdb;
  background-color: #182a78;
}

.l1-panel-tabs >>> .el-tabs__active-bar {
  display: none;
}

.l1-panel-tabs >>> .el-tabs__content {
  /* border: 1px solid #416cdb; */
}
</style>