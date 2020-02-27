<template>
  <div id="Header">
    <div class="head">
      <div class="head-left" @click="returns()"></div>
      <span class="head-title">{{title}}</span>
      <span class="head-right"></span>
    </div>
  </div>
</template>
<style scoped>
#Header .head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  font-size: 0.32rem;
  z-index: 2;
  background-color: #fff;
  border-bottom: 0.02rem solid #f6f6f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  background: url("../../assets/head-foot/arrow-left.png") no-repeat 0.2rem center;
  background-size: 20%;
  width: 30%;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.28rem;
  float: left;
}
.head-title {
  width: 40%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.32rem;
  color: #333333;
  float: left;
}
.head-right {
  width: 30%;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.28rem;
  float: left;
}
</style>
<script>
export default {
  name: "Head",
  props: ['title'],
  data() {
    return {
      
    };
  },
  methods: {
    returns() {
      this.$router.back();
    }
  }
};
</script>

