<template>
  <div>
    <Loading :vis="isLoading"></Loading>
    <div class="personal">
      <!--头部开始-->
      <div class="personal-top">
        <img src="@/assets/personal/user-bg.jpg" alt class="personal-img" />
        <div class="personal-top-con" v-if="user">
          <img @click="personal" :src="BURL+user.avatar" />
          <div class="personal-top-box2">
            <span class="personal-top-text1">{{user.username}}</span>
          </div>
        </div>
        <div class="logonin" v-else>
          <van-button type="primary" size="small" color="#01d9ff" @click="inLogin">登录/注册</van-button>
        </div>
      </div>
      <!--头部结束-->
      <!--代付款分类开始-->
      <div class="personal-middle">
        <router-link class="personal-middle1" :to="{name:'orderlist'}">
          <span class="personal-middle1-img1">
            <img src="@/assets/personal/personal-center-img1.png" />
          </span>
          <span class="personal-middle1-text1">待付款</span>
        </router-link>
        <router-link class="personal-middle1" :to="{name:'orderlist'}">
          <span class="personal-middle1-img1">
            <img src="@/assets/personal/personal-center-img2.png" />
          </span>
          <span class="personal-middle1-text1">待发货</span>
        </router-link>
        <a class="personal-middle1" href="dsh.html">
          <span class="personal-middle1-img1">
            <img src="@/assets/personal/personal-center-img3.png" />
          </span>
          <span class="personal-middle1-text1">待收货</span>
        </a>
        <a class="personal-middle1" href="pj.html">
          <span class="personal-middle1-img1">
            <img src="@/assets/personal/personal-center-img4.png" />
          </span>
          <span class="personal-middle1-text1">待评价</span>
        </a>
        <a class="personal-middle1" href="ording.html">
          <span class="personal-middle1-img1">
            <img src="@/assets/personal/personal-center-img5.png" />
          </span>
          <span class="personal-middle1-text1">全部订单</span>
        </a>
      </div>
      <!--代付款分类结束-->
      <!--功能分类开始-->
      <a class="personal-gn" href="coupon.html">
        <span class="personal-gn-span">
          <img src="@/assets/personal/personal-center-img10.png" />
        </span>
        <span>我的优惠券</span>
      </a>
      <a class="personal-gn" href="address.html">
        <span class="personal-gn-span">
          <img src="@/assets/personal/personal-center-img11.png" />
        </span>
        <span>收货地址</span>
      </a>
      <a class="personal-gn" href="service.html">
        <span class="personal-gn-span">
          <img src="@/assets/personal/personal-center-img12.png" />
        </span>
        <span>售后服务</span>
      </a>
      <span v-if="user" tag="span" @click="noLogon" class="personal-exit">退出登录</span>
    </div>
    <Foot></Foot>
  </div>
</template>

<style scoped>

.personal-top {
  width: 100%;
  float: left;
  position: relative;
  height: 2.6rem;
}
.personal-img {
  width: 100%;
  float: left;
  height: 2.6rem;
}
.personal-top-con {
  width: 94%;
  position: absolute;
  height: 2.6rem;
  top: 0;
  left: 0;
  padding: 0 3%;
}
.personal-top-con img {
  width: 1.4rem;
  height: 1.4rem;
  float: left;
  overflow: hidden;
  border: 0.02rem solid #d7d1d1;
  margin-top: 0.6rem;
  border-radius: 50%;
}
.personal-top-img1 img {
  width: 1.4rem;
  height: 1.4rem;
  float: left;
}
.personal-top-box2 {
  display: block;
  margin-left: 1.6rem;
  height: 2rem;
  margin-top: 0.6rem;
}
.personal-top-text1 {
  width: 75%;
  float: left;
  height: 0.5rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  margin-top: 0.5rem;
}
.personal-top-write {
  width: 1.1rem;
  float: right;
  height: 0.5rem;
  font-size: 0.28rem;
  color: #fff;
  /* background: url(../assets/personal/write-pen.png) no-repeat left center; */
  background-size: 35%;
  text-align: right;
  line-height: 0.5rem;
  margin-top: 0.5rem;
}
/* 横的五个菜单项 */
.personal-middle {
  width: 100%;
  float: left;
  background: #fff;
  padding: 0.3rem 0px;
  display: flex;
  justify-content: left;
}
.personal-middle1 {
  width: 25%;
  float: left;
  text-align: center;
}
.personal-middle1-text1 {
  width: 100%;
  display: inline-block;
  font-size: 0.28rem;
  color: #797778;
}
.personal-middle1-text2 {
  width: 100%;
  display: inline-block;
  font-size: 0.28rem;
  color: #333;
  margin-top: 0.06rem;
}
.personal-middle1-img1 {
  width: 0.46rem;
  height: 0.46rem;
  display: inline-block;
}
.personal-middle1-img1 img {
  width: 0.46rem;
  height: 0.46rem;
  float: left;
}
.personal-box4 {
  width: 94%;
  float: left;
  padding: 0 3%;
  background: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #323232;
  margin-bottom: 0.1rem;
}
.personal-gn {
  width: 94%;
  float: left;
  height: 0.9rem;
  line-height: 0.9rem;
  background-size: 5%;
  padding: 0 3%;
  font-size: 0.28rem;
  color: #797778;
  border-bottom: 0.02rem solid #e6e6e6;
}
.personal-gn-span {
  width: 0.46rem;
  height: 0.46rem;
  float: left;
  margin-top: 0.22rem;
  margin-right: 0.2rem;
}
.personal-gn-span img {
  width: 0.46rem;
  height: 0.46rem;
  float: left;
}
.personal-exit {
  width: 90%;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #797778;
  text-align: center;
  float: left;
  background: #fff;
  margin-top: 0.2rem;
  margin-left: 5%;
  border: 0.02rem solid #e6e6e6;
  border-radius: 0.1rem;
}
.logonin {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Loading from "@/components/loading/Loading";
import Foot from "@/components/listhead/Foot";
import { BURL } from "@/config/base";
import { mapState } from "vuex";
//import event from '@/api/event.js';
export default {
  name: "user",
  components: { Foot, Loading },
  data() {
    return {
      BURL: BURL
    };
  },
  methods: {
    getuser() {
      let token = sessionStorage.getItem("token") || "";
      if (!token) {
        return;
      }
      this.$store.dispatch("getUser");
    },
    inLogin() {
      this.$router.push({ name: "userlogin" });
    },
    personal() {
      this.$router.push({ name: "personal" });
    },
    noLogon() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("vuex");
      this.$store.commit("clearState");
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapState(["isLoading"]),
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.getuser();
  }
};
</script>