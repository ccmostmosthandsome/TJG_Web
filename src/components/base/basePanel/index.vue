<template>
  <div class="basePanel">
    <div class="border">
      <span class="fix-edge"></span>
      <span class="fix-edge"></span>
      <span class="fix-edge"></span>
      <span class="fix-edge"></span>

      <!--      <slot name="title">-->
      <div class="title">
        <h3>{{ title }}</h3>
        <span class="zoomBtn"></span>
      </div>
      <div class="content">

        <div class="l2tab">
            <L2Tabs :items="items"></L2Tabs>
        </div>



      </div>
      <!--      </slot>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "basePanel",
  props: ["title","items"],
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      title: this.title,
      //   activeName: this.items[0].label,
      option: null,
      timer: null,
    };
  },
};
</script>

<style scoped>
.basePanel {
  margin: 0;
}

.border {
  border: 1px solid #416cdb;
  height: 100%;
}

.fix-edge {
  /* 绝对定位 */
  position: absolute;
  /* 将span撑开 */
  padding: 10px 10px;
  /* 边框宽度，左上角只显示左边框和上边框 */

  border-style: solid;
  border-color: #3782E8;
}

.basePanel span:nth-child(1) {
  left: 0px;
  top: 0px;
  border-width: 4px 0 0 4px;
}

.basePanel span:nth-child(2) {
  border-width: 4px 4px 0 0;
  /* 定位到右上角，并使边框离main有一定间距 */
  right: 0px;
  top: 0px;
}

.basePanel span:nth-child(3) {
  border-width: 0 0 4px 4px;
  /* 定位到左下角，并使边框离main有一定间距 */
  left: 0px;
  bottom: 0px;
}

.basePanel span:nth-child(4) {
  border-width: 0 4px 4px 0;
  /* 定位到右下角，并使边框离main有一定间距 */
  right: 0px;
  bottom: 0px;
}

.basePanel >>> .title {
  height: 35px;
  width: 100%;
  color: aliceblue;
  background: linear-gradient(to right, rgb(13 31 118 / .7), rgb(103 129 199 / .3) 70%);
  line-height: 35px;
  /* background-image:  url('assets/img/page/home_wharf_upbg@2x.png') no-repeat; */
}

.basePanel >>> .content {
  /*background: #191c1f;*/
  background: rgba(25,28,31,.5);
  /*opacity: 50%;*/
}

.title > h3 {
  padding-left: 1rem;
  /*color: linear-gradient(to right, #ED060F, #C63B52 70%);*/
}

.title > .zoomBtn {
  top: 10px !important;
  right: 10px !important;
  height: 15px;
  width: 15px;
  position: absolute;
  background: #53A2FF;
}

.basePanel >>> .elxxxx {
  border: 1px solid #1f3153;
  background-color: #0b143a;
  color: #298ed5 !important;
  padding: 0 35px !important;
  height: 30px !important;
  line-height: 30px !important;
  /* transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); */
}
</style>