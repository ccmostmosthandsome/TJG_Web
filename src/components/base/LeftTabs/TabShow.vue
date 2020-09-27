<template>
  <div class="tab-container">
    <div v-for="item in items1" :key="item.id" class="item">
      <span>{{ item.label }}</span>
      <p class="value">{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabShow",
  props: ["items1"],
};
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #01001a;
  border: 1px solid rgba(43, 128, 245, 0.4);
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.05);
  padding: 21px 0 14px 0;

  .item {
    width: 95px;
    height: 49px;
    background: rgba(79, 247, 248, 0.2);
    border: 1px solid #4ff7f8;
    border-radius: 4px;
    text-align: center;
    font-family: Source Han Sans CN;
    color: #aecef9;
    line-height: 26px;

    .value {
      color: #02d9f2;
    }
  }
}
</style>