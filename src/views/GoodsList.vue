<template>
  <div id="goodslist">
    <div v-if="goods!=null">
      <div class="head">
        <a href="javascript:history.back();" class="head-left"></a>
        <span class="head-title">{{goods.gname}}</span>
        <span class="head-right"></span>
      </div>
      <!-- 轮播图 -->
      <div class="goods-details-box">
        <van-swipe :autoplay="3000" indicator-color="white" v-if="gbanner">
          <van-swipe-item v-for="(item, index) in gbanner" :key="index">
            <img :src="BURL+item" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品价格 -->
      <div class="goods-details-price">
        <p>
          <span>￥{{goods.gdiscount}}</span>
          <span>原价￥{{goods.gprice}}</span>
          <span>特价</span>
        </p>
        <p>{{goods.gdesc}}</p>
      </div>
      <!-- 商品详情 -->
      <div class="good-details-title">商品详情</div>
      <div class="title-text">
        <span class="text-span">
          <span>出版社：</span>
          {{goods.gbrand}}
        </span>
        <span class="text-span">
          <span>产品规格：</span>
          {{goods.gspecs}}
        </span>
      </div>
      <!-- 图文详情 -->
      <div class="good-details-title">图文详情</div>
      <div class="title-img">
        <img :src="BURL+goods.gdetail" />
      </div>
      <!-- 底部 -->
      <div class="foot">
        <div class="foot-index">
          <span class="index-img1"></span>
          <span @click="home()" class="index-text">首页</span>
        </div>
        <div class="foot-box"></div>
        <div class="foot-index">
          <span class="index-img2"></span>
          <span class="index-text">购物车</span>
          <span v-show="goodsnum" class="num">{{goodsnum}}</span>
        </div>
        <button class="foot-btn1" @click="addCart()">加入购物车</button>
        <button class="foot-btn2">立即购买</button>
      </div>

      <div class="box"></div>
      <div class="box-foot">
        <div class="box-foot-text">分享</div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_qq.png" />
          <span>QQ</span>
        </div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_weichat.png" />
          <span>微信</span>
        </div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_qzone.png" />
          <span>QQ空间</span>
        </div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_xinlang.png" />
          <span>新浪微博</span>
        </div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_douban.png" />
          <span>豆瓣网</span>
        </div>
        <div class="box-foot-img">
          <img src="@/assets/commodityDetails/icon_zhifubao.png" />
          <span>支付宝</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f7f7f7;
}
/*头部*/
.head {
  width: 94%;
  padding: 0.24rem 3%;
  height: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
}
.head-left {
  background: url(../assets/head-foot/arrow-left.png) no-repeat left center;
  background-size: 60%;
  width: 0.8rem;
  height: 0.9rem;
  position: absolute;
  left: 3%;
  top: 0.2rem;
}
.head-title {
  display: block;
  margin: 0px 0.8rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
  text-align: center;
}
.head-right {
  width: 0.8rem;
  height: 0.9rem;
  background: url(../assets/commodityDetails/share.png) no-repeat right center;
  background-size: 50%;
  position: absolute;
  right: 3%;
  top: 0.2rem;
}
/* 轮播图 */
.goods-details-box {
  position: relative;
  overflow: hidden;
  margin: 0px auto;
  width: 100%;
  margin-top: 0.9rem;
}
.box-img {
  width: 400%;
  position: relative;
  overflow: hidden;
}
.box-img li {
  width: 25%;
  float: left;
}
.box-img li img {
  width: 100%;
}
.box-dot {
  position: absolute;
  height: 0.14rem;
  bottom: 0.4rem;
  right: 50%;
  margin-right: -0.6rem;
  z-index: 1;
}
.box-dot li {
  float: left;
  width: 0.1rem;
  height: 0.1rem;
  background: #dddddd;
  overflow: hidden;
  margin: 0 0.08rem;
}
.box-dot li:first-child {
  width: 0.28rem;
  background: #666666;
}
/* 商品价格 */
.goods-details-price {
  width: 94%;
  border-top: 0.02rem solid #f6f6f6;
  padding: 0px 3%;
  background: #fff;
  padding-top: 0.3rem;
  overflow: hidden;
}
.goods-details-price p {
  width: 100%;
  margin-bottom: 0.24rem;
  overflow: hidden;
}
.goods-details-price p span:nth-child(1) {
  font-size: 0.52rem;
  color: #ffb34e;
  float: left;
}
.goods-details-price p span:nth-child(2) {
  font-size: 0.24rem;
  color: #747474;
  float: left;
  margin: 0.24rem 0.1rem 0px 0.1rem;
  text-decoration: line-through;
}
.goods-details-price p span:nth-child(3) {
  padding: 0px 0.16rem;
  height: 0.36rem;
  line-height: 0.36rem;
  background: #ffb34e;
  color: #fff;
  float: left;
  font-size: 0.24rem;
  margin-top: 0.18rem;
}
.goods-details-price p:last-child {
  line-height: 0.44rem;
  font-size: 0.32rem;
}
/* 商品详情 */
.good-details-title {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  margin-top: 0.2rem;
  float: left;
  font-size: 0.3rem;
  text-align: center;
  border-bottom: 0.02rem solid #f9f9f9;
}
.title-text {
  width: 94%;
  padding: 0.2rem 3%;
  background: #fff;
  overflow: hidden;
}
.text-span {
  width: 100%;
  float: left;
  font-size: 0.28rem;
  line-height: 0.6rem;
}
.text-span span {
  color: #8a8d93;
}
/* 图文详情 */
.title-img {
  width: 100%;
  margin-bottom: 1.2rem;
}
.title-img img {
  width: 100%;
}
/* 底部 */
.foot {
  width: 100%;
  float: left;
  height: 1.2rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  background: #fff;
}
.foot-index {
  width: 17%;
  height: 1.2rem;
  float: left;
  text-align: center;
  font-size: 0.28rem;
  position: relative;
}
.index-img1 {
  width: 0.56rem;
  height: 0.56rem;
  background: url(../assets/commodityDetails/home2.png) no-repeat center center;
  background-size: 100%;
  display: block;
  margin: 0.14rem auto 0.02rem auto;
}
.index-text {
  width: 100%;
  display: block;
  color: #828282;
}
.num {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: tomato;
  color: #fff;
  text-align: center;
}
.index-img2 {
  width: 0.56rem;
  height: 0.56rem;
  background: url(../assets/commodityDetails/shop-cart1.png) no-repeat center
    center;
  background-size: 100%;
  display: block;
  margin: 0.14rem auto 0 auto;
}
.foot-box {
  width: 0.02rem;
  height: 100%;
  background: #e6e6e6;
  position: absolute;
  top: 0px;
  left: 17%;
}
.foot-btn1 {
  width: 33%;
  height: 1.2rem;
  border: none;
  outline: none;
  background: #111111;
  color: #eeeeee;
  float: left;
  font-size: 0.32rem;
}
.foot-btn2 {
  width: 33%;
  height: 1.2rem;
  border: none;
  outline: none;
  background: #ffb34e;
  color: #eeeeee;
  float: left;
  font-size: 0.32rem;
}

.box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 666;
  background: rgba(0, 0, 0, 0.3);
  display: none;
}
.box-foot {
  width: 94%;
  padding: 0px 3%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 4rem;
  background: #fff;
  z-index: 999;
  display: none;
}
.box-foot-text {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  text-align: center;
  font-size: 0.32rem;
}
.box-foot-img {
  width: 20%;
  float: left;
  text-align: center;
  margin-bottom: 0.2rem;
  font-size: 0.24rem;
}
.box-foot-img img {
  width: 0.8rem;
  height: 0.8rem;
}
.box-foot-img span {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: inline-block;
  font-size: 0.24rem;
  color: #6b6b6b;
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
import { readGoods } from "@/api/goods";
import { BURL } from "@/config/base";
import { queryCart,cartAdd } from "@/api/cart";
import {upGoodsHistory} from "@/api/goodshistory";

//import head from "@/components/listhead/head"
export default {
  name: "goodslist",
  //components: {head},
  data() {
    return {
      goods: null,
      gbanner: [],
      BURL: BURL
    };
  },
  methods: {
    getGoods() {
      let gid = this.$route.query.gid;
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "加载中..."
      });
      const timer = setInterval(() => {
        if (this.goods == null) {
          toast.message = "加载中...";
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 100);
      readGoods(gid).then(res => {
        let { code, data } = res.data;
        if (code == 200) {
          this.goods = data;
          this.gbanner = data.gbanner.split(",");
          this.saveHistory(gid);
        }
      });
    },
    home() {
      this.$router.push({ name: "home" });
    },
    async addCart() {
      let data = {
        gid: this.goods.gid,
        num: 1,
        state: 1,
        gdiscount: this.goods.gdiscount
      };
      let res = await cartAdd(data);
      let {code, msg} = res.data;
      if(code == 200){
        this.$toast(msg);
        let getcart = await queryCart();
        let { code, data } = getcart.data;
        if(code == 200){
          this.$store.commit('getCart',data);
        }
      }
    },
    async saveHistory($id){
      await upGoodsHistory($id);
    }
  },
  computed: {
    goodsnum() {
      return this.$store.getters.goodsNum(this.goods.gid);
    }
  },
  mounted() {
    this.getGoods();
  }
};
</script>