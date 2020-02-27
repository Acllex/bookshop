<template>
  <div v-if="cates">
    <div class="head">
      <div class="head-left">
        派送至：北京石景山
        <span></span>
      </div>
      <div class="head-right">
        <img src="@/assets/head-foot/search3.png" />
      </div>
    </div>
    <!--正文-->
    <div class="classification-text">
      <!--左边-->
      <div class="text-left">
        <ul>
          <li
            v-for="(item, index) in cates"
            :key="index"
            @click="goodslist(item.cid,index)"
            :class="{box:index==current}"
          >{{item.cname}}</li>
        </ul>
      </div>
      <!--右边-->
      <div class="text-right">
        <div class="right-title">
          <span>综合排序</span>
          <span @click="prices()">
            按价格
            <img src="@/assets/classification/sort1.png" class="sort" />
            <img src="@/assets/classification/sort2.png" class="sort sort1" />
            <img src="@/assets/classification/sort3.png" class="sort sort1" />
          </span>
          <span>分类</span>
        </div>
        <!-- <div class="right-class">
          <ul>
            <li class="right-class-li right-class-color">全部分类</li>
            <li class="right-class-li">进口水果</li>
            <li class="right-class-li">国产水果</li>
            <li class="right-class-li">柑橘橙柚</li>
            <li class="right-class-li">柑橘橙柚</li>
            <li class="right-class-li">桃杏梅枣</li>
          </ul>
        </div>-->
        <div class="right-goods">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="islist"
            >
              <van-cell v-for="item in goods" :key="item.cid">
                <router-link :to="{ path: '/goodslist', query: { gid: item.gid }}" class="goods-a">
                  <img :src="BURL+item.gthumb" alt />
                </router-link>
                <div class="goods-text">
                  <router-link
                    :to="{ path: '/goodslist', query: { gid: item.gid }}"
                    class="goods-text-a"
                  >{{item.gname}}</router-link>
                  <span class="text-span">￥{{item.gprice}}</span>
                  <div class="text-sum">
                    <img
                      @click="subCart(item.gid,item.gdiscount)"
                      src="@/assets/classification/subtract.png"
                    />
                    <span>{{goodsnum(item.gid)}}</span>
                    <img
                      @click="addCart(item.gid,item.gdiscount)"
                      src="@/assets/classification/add.png"
                    />
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<style scoped>
/*头部*/
.head {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  color: #333333;
  background: #ffffff;
  text-align: center;
  border-bottom: 0.02rem solid #f3f3f3;
}
.head-left {
  width: 100%;
  float: left;
  height: 0.9rem;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.32rem;
}
.head-left span {
  width: 0.24rem;
  height: 0.24rem;
  display: inline-block;
  background: url(../assets/head-foot/triangle.png) no-repeat center center;
  background-size: 100%;
  margin-left: 0.1rem;
}
.head-right {
  width: 17%;
  height: 100%;
  float: left;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
}
.head-right img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.24rem;
}
/*正文*/
/*左边*/
.classification-text {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.text-left {
  width: 30%;
  height: 100%;
  float: left;
  overflow-x: hidden;
  /* overflow-y: auto; */
  border-right: 0.02rem solid #f4f4f4;
}
.text-left ul {
  margin-top: 0.9rem;
  position: relative;
  overflow-x: hidden;
  /* overflow-y: auto; */
  margin-bottom: 1.02rem;
}
.text-left ul li {
  width: 100%;
  float: left;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.28rem;
  border-bottom: 0.02rem solid #efeaee;
}
.box::after {
  content: "";
  width: 0.06rem;
  height: 0.6rem;
  background-color: #ff9201;
  margin-top: 0.1rem;
  position: absolute;
  left: 0;
}
/*右边*/
.text-right {
  width: 69.5%;
  float: right;
  height: 100%;
  overflow-x: hidden;
}
.right-title {
  width: 69.5%;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.02rem solid #efeaee;
  position: fixed;
  top: 0.89rem;
  right: 0;
  background-color: #fff;
}
.right-title span {
  width: 33.3%;
  text-align: center;
  float: left;
  font-size: 0.24rem;
  overflow: hidden;
}
.sort {
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: middle;
  margin-top: -0.06rem;
}
.sort1 {
  display: none;
}
.right-class {
  width: 69.5%;
  padding-top: 0.2rem;
  border-bottom: 0.02rem solid #efeaee;
  position: fixed;
  top: 0.94rem;
  right: 0;
  z-index: 1;
  background-color: #fff;
  display: none;
}
.right-class-li {
  width: 30%;
  text-align: center;
  border: 0.02rem solid #efefef;
  font-size: 0.24rem;
  height: 0.44rem;
  line-height: 0.44rem;
  margin-bottom: 0.2rem;
  border-radius: 0.06rem;
  float: left;
  margin-left: 2%;
}
.right-class-color {
  color: #ff9201;
  border-color: #ff9201;
}
.right-goods {
  width: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.4rem;
}
.right-goods ul {
  width: 100%;
  position: relative;
  top: 0.91rem;
  right: 0;
  z-index: -1;
  overflow-x: hidden;
  margin-bottom: 1.02rem;
  display: none;
}
.right-goods ul:first-child {
  display: block;
}
.right-goods ul li {
  width: 100%;
  height: 1.6rem;
  border-bottom: 0.02rem solid #efefef;
  overflow: hidden;
  /* float: left; */
}
.right-goods ul li:first-child {
  margin-top: 0.8rem;
}
.goods-a {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  text-align: center;
}
.goods-a img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
}
.goods-text {
  margin-left: 1.6rem;
  height: 1.5rem;
  margin-top: 0.1rem;
}
.goods-text-a {
  display: block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  overflow: hidden;
  color: #232326;
}
.text-span {
  float: left;
  font-size: 0.28rem;
  color: #ff9201;
  line-height: 0.6rem;
  margin-top: 0.1rem;
}
.text-sum {
  float: right;
  margin-top: 0.2rem;
  margin-right: 0.1rem;
  overflow: hidden;
  width: 1.2rem;
}
.text-sum img {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
}
.text-sum span {
  float: left;
  font-size: 0.28rem;
  line-height: 0.4rem;
  width: 0.4rem;
  text-align: center;
}
</style>

<script>
import Foot from "@/components/listhead/Foot";
import { queryCate } from "@/api/cate.js";
import { queryList } from "@/api/index.js";
import { BURL } from "@/config/base";
import { queryCart, cartAdd } from "@/api/cart";

export default {
  name: "cate",
  components: { Foot },
  data() {
    return {
      cates: [],
      goods: [],
      BURL: BURL,
      limit: 6,
      page: 0,
      cid: 0,
      loading: false,
      finished: false,
      isLoading: false,
      count: 0,
      isprice: true,
      current: 0,
      islist: false
    };
  },
  methods: {
    goodslist(cid, index) {
      if (cid != this.cid) {
        this.cid = cid;
        this.onRefresh();
      }
      this.current = index;
    },
    getList() {
      let data = { cid: this.cid, limit: this.limit, page: this.page };
      queryList(data)
        .then(res => {
          let { code, count, data } = res.data;
          if (code == 200) {
            this.count = count;
            if (this.page == 1) {
              this.goods = data;
            } else {
              this.goods = this.goods.concat(data);
            }
            //this.goods.push(...data);
          }
        })
        .finally(() => {
          this.loading = false;
          this.isLoading = false;
          if (this.count <= this.goods.length) {
            this.finished = true;
            return;
          }
        });
    },
    onLoad() {
      this.page++;
      this.getList();
    },
    onRefresh() {
      this.finished = true;
      this.page = 1;
      this.goods = [];
      this.getList();
      this.finished = false;
    },
    getCate() {
      queryCate().then(res => {
        let { code, data } = res.data;
        if (code == 200) {
          this.cates = data;
          this.cid = data[0].cid;
          this.onRefresh();
        }
      });
    },
    prices() {
      if (this.isprice) {
        this.goods.sort((a, b) => {
          return a.gprice - b.gprice;
        });
        this.isprice = false;
      } else {
        this.goods.sort((a, b) => {
          return b.gprice - a.gprice;
        });
        this.isprice = true;
      }
    },
    goodsnum(gid) {
      return this.$store.getters.goodsNum(gid);
    },
    async subCart(gid, gdiscount) {
      if(this.goodsnum(gid)<=0){
        this.$toast("请先添加商品");
        return;
      }
      let data = {
        gid: gid,
        num: -1,
        state: 1,
        gdiscount: gdiscount
      };
      let subcart = await cartAdd(data);
      let { code } = subcart.data;
      if (code == 200) {
        this.cartQuery();
      }
    },
    async addCart(gid, gdiscount) {
      let data = {
        gid: gid,
        num: 1,
        state: 1,
        gdiscount: gdiscount
      };
      let subcart = await cartAdd(data);
      let { code } = subcart.data;
      if (code == 200) {
        this.cartQuery();
      }
    },
    async cartQuery() {
      let getcart = await queryCart();
      let { code, data } = getcart.data;
      if (code == 200) {
        this.$store.commit("getCart", data);
      }
    }
  },
  computed: {},
  mounted() {
    this.getCate();
  }
};
</script>