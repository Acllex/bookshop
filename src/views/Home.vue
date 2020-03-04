<template>
  <div class="home">
    <div class="body" v-if="active!=null">
      <!-- 头开始 -->
      <header class="head">
        <div class="address">
          <img src="@/assets/index/scan.png" class="lazyload" alt />
          <span>地址</span>
        </div>
        <div class="head-title">
          <span>北京石景山</span>
          <img src="@/assets/index/triangle.png" class="lazyload" alt />
        </div>
        <a href="./indexSearch.html" class="address">
          <img src="@/assets/index/search3.png" class="lazyload" alt />
          <span>搜索</span>
        </a>
      </header>
      <!-- 头部结束 -->
      <!-- banner开始 -->
      <!-- <div id="container">
        <div class="wrappers">
          <ul class="wrapper">
      <li class="slide">-->
      <section class="banner">
        <van-swipe :autoplay="3000" indicator-color="white" v-if="banner">
          <van-swipe-item v-for="item in banner" :key="item.gid">
            <router-link to>
              <img :src="BURL+item.gthumb" alt />
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </section>
      <!-- </li>
      <li class="slide">-->
      <section class="menu">
        <ul class="menu1">
          <li v-for="(item, index) in active" :key="index">
            <router-link :to="{ path: '/catelist', query: { cid: item.cid }}">
              <div>
                <img src="@/assets/index/trophy.png" class="lazyload" alt />
              </div>
              <span>今日特惠</span>
            </router-link>
          </li>
        </ul>
      </section>
      <!-- </li>
      <li class="slide">-->
      <section class="box1">
        <div class="text">
          <span>品牌特卖</span>
          <img src="@/assets/index/arrow-right2.png" class="lazyload" alt />
        </div>
        <ul class="box1-1">
          <li v-for="item in banner" :key="item.gid">
            <router-link to>
              <img :src="BURL+item.gdetail" class="lazyload" alt />
            </router-link>
          </li>
        </ul>
      </section>
      <!-- </li> -->
      <section class="box1" v-for="(item, index) in active" :key="index">
        <div class="text">
          <span>{{item.cname}}</span>
          <img src="@/assets/index/arrow-right2.png" class="lazyload" alt />
        </div>
        <div class="s-banner">
          <img src="@/assets/index/optimization-img1.jpg" class="lazyload" alt />
        </div>
        <ul class="box2">
          <li v-for="(items, i) in item.goods" :key="i">
            <router-link :to="{ path: '/goodslist', query: { gid: items.gid }}">
              <img :src="BURL+items.gthumb" class="lazyload" alt />
              <span class="goods-name">{{items.gname}}</span>
              <span class="price">
                ￥{{items.gdiscount}}
                <s>￥{{items.gprice}}</s>
              </span>
            </router-link>
          </li>
        </ul>
      </section>

      <!-- </ul> -->
      <!-- </div>
      </div>-->
    </div>
    <Foot></Foot>

    <div class="returns">
      <img src="@/assets/index/topback.png" alt />
    </div>
  </div>
</template>

<style scoped>
.home .body {
  width: 100%;
  overflow: hidden;
  background-color: #f7f7f7;
  padding-bottom: 1.1rem;
}

.head {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  padding: 0.24rem 0;
  background-color: #ffffff;
  border-bottom: 0.01rem solid #f1f1f1;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.address {
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.address img {
  width: 0.4rem;
}

.address span {
  padding-top: 0.12rem;
  font-size: 0.24rem;
  color: #a8a3a7;
}

.head-title {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.32rem;
}

.head-title img {
  width: 0.24rem;
  padding-left: 0.12rem;
}

.search {
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.banner {
  margin-top: 1.3rem;
  width: 100%;
  /* height: 4.33rem; */
  position: relative;
  overflow: hidden;
}

.swiper-slide img {
  height: 2.73rem;
}

.swiper-container {
  --swiper-theme-color: #ffffff;
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  left: 2.4rem;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 0.1rem;
}
.swiper-pagination-bullet {
  width: 0.1rem;
  height: 0.1rem;
}
.swiper-pagination-bullet {
  opacity: 1;
}

.menu {
  padding: 0.3rem;
  background-color: #ffffff;
}

.menu1 {
  display: flex;
  justify-content: space-between;
}

.menu1 li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.menu1 li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu1 li a div {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #9bcbb5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu1 li a span {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  color: #000;
}

.menu1 li:nth-child(2) div {
  background-color: #e6c3bd;
}

.menu1 li:nth-child(3) div {
  background-color: #eed0b8;
}

.menu1 li:nth-child(4) div {
  background-color: #8cb2c5;
}

.menu1 li img:nth-child(1) {
  width: 0.52rem;
}

.box1 {
  margin-top: 0.1rem;
  padding: 0 0.3rem 0.2rem;
  background-color: #ffffff;
}

.text {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text span {
  font-size: 0.32rem;
}

.text img {
  margin-left: 0.12rem;
  width: 0.36rem;
}

.box1-1 {
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
}

.box1-1 li {
  width: 33.333%;
}

.box1-1 img {
  width: 100%;
}

.s-banner {
  width: 100%;
  padding-bottom: 0.2rem;
}

.s-banner img {
  width: 100%;
  border-radius: 1rem;
}

.box2 {
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
}

.box2 li {
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.box2 li img {
  width: 100%;
  margin: 0.1rem 0;
}

.box2 li span {
  font-size: 0.28rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-name {
  color: black;
}
.box2 li div {
  width: 100%;
}

.box2 li div span {
  display: inline-block;
  background-color: #ff8950;
  padding: 0 0.14rem;
  border-radius: 0.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.24rem;
  color: #ffffff;
  opacity: 0;
}

.box2 li:nth-child(1) div span {
  opacity: 1;
}

.price {
  display: inline-block;
  width: 100%;
  color: #ea4d13;
  font-size: 0.28rem;
  margin-top: 0.16rem;
}

.price s {
  color: #979797;
  font-size: 0.24rem;
  margin-left: 0.04rem;
}

.returns {
  position: fixed;
  bottom: 1.4rem;
  right: 0.4rem;
  opacity: 0;
}

.returns img {
  width: 0.7rem;
  height: 0.7rem;
}

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

.foot-color {
  color: #ff9201;
}

.van-swipe-item {
  width: 100%;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>

<script>
// @ is an alias to /src
import { queryIndex } from "@/api/index";
import { BURL } from "@/config/base";
import Foot from "@/components/listhead/Foot";

export default {
  name: "home",
  components: { Foot },
  data() {
    return {
      banner: [],
      active: null,
      recommend: [],
      BURL: BURL
    };
  },
  methods: {
    indexQuery() {
      queryIndex().then(res => {
        let { active, banner } = res.data.data;
        this.active = active;
        this.banner = banner;
      });
    }
  },
  mounted() {
    this.indexQuery();
  }
};
</script>
