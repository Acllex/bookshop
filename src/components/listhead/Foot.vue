<template>
  <div>
    <div class="foot">
      <router-link :to="{name:'home'}">
        <span>
          <i :class="{footcolor:'/'==index}" class="iconfont icon-shouye"></i>
        </span>
        <!--根据页面修改颜色-->
        <span :class="{footcolor:'/'==index}">首页</span>
      </router-link>
      <router-link :to="{name:'cate'}">
        <span>
          <i :class="{footcolor:'/cate'==index}" class="iconfont icon-sousuo"></i>
        </span>
        <!--根据页面修改颜色-->
        <span :class="{footcolor:'/cate'==index}">分类</span>
      </router-link>

      <router-link :to="{name:'shopcart'}">
        <span>
          <i :class="{footcolor:'/shopcart'==index}" class="iconfont icon-sousuo"></i>
        </span>
        <!--根据页面修改颜色-->
        <span :class="{footcolor:'/shopcart'==index}">购物车</span>
      </router-link>
      <router-link :to="{name:'user'}">
        <span :class="{footcolor:'/user'==index}">
          <i class="iconfont icon-wode"></i>
        </span>
        <!--根据页面修改颜色-->
        <span :class="{footcolor:'/user'==index}">我的</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 1rem;
  background: #fff;
  border-top: 0.02rem solid #dcdcdc;
}
.foot > a {
  width: 25%;
  float: left;
  height: 1rem;
  text-align: center;
  color: #232326;
}
.foot > a span:first-child {
  width: 0.42rem;
  height: 0.42rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.foot > a span:first-child img {
  width: 100%;
  height: 100%;
  float: left;
}
.foot > a span:last-child {
  width: 100%;
  float: left;
  font-size: 0.26rem;
}

.footcolor {
  color: #ff9201;
}
</style>

<script>
export default {
  name: "Foot",
  data() {
    return {
      index: ""
    };
  },
  methods: {
    getroute() {
      this.index = this.$route.path;
      // switch (path) {
      //   case "/":
      //     this.index = 0;
      //     break;
      //   case "/cate":
      //     this.index = 1;
      //     break;
      //   default:
      //     break;
      // }
    }
  },
  mounted() {
    this.getroute();
  }
};
</script>