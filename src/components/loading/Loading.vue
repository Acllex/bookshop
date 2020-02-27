<template id="loading">
  <div class="load" v-if='vis'>
    <div class="box">
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
      <div class="box-item">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.load {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
}
.box-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.line {
  width: 5px;
  height: 34px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: spinner 1s infinite;
}
$data: 360/8;
$time: 1/8;
@for $i from 1 through 8 {
  .box-item:nth-child(#{$i}) {
    transform: rotateZ(#{$i * $data}deg);
  }
  .box-item:nth-child(#{$i}) > .line {
    animation-delay: #{$time * $i}s !important;
  }
}
@keyframes spinner {
  100% {
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
}
</style>

<script>
export default {
  name: "loading",
  data() {
      return {
          
      }
  },
  props: {
    vis: Boolean,
  }
};
</script>