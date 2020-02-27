<template>
  <div class="bodys">
    <div class="zjzz-buylist-wear">
      <div class="zjzz-buylist-top">
        <a href="javascript:history.back();" class="zjzz-buylist-t1"></a>
        <span class="zjzz-buylist-t2">我的订单</span>
        <span class="zjzz-buylist-t3">
          <span class="zjzz-buylist-t4"></span>
        </span>
      </div>
      <div class="zjzz-buylist-top2">
        <a
          class="zjzz-buylist-tp1"
          v-for="(item, index) in orders"
          :key="index"
          @click="onclick(item.state)"
        >
          <i :class="state==item.state?'zjzz-buylist-tp2':''">{{item.states}}</i>
          <span v-if="item.num!=0" class="zjzz-buylist-tp3">{{item.num}}</span>
        </a>
      </div>
      <div class="zjzz-buylist-mid">
        <!--全部-->
        <div class="zjzz-buylist-m1">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in orderlist" :key="item.oid">
              <div class="zjzz-buylist-goods1">
                <div class="zjzz-buylist-gtime">
                  <span class="zjzz-buylist-gtime1">{{item.ctime}}</span>
                  <span class="zjzz-buylist-gtime2">{{item.states}}</span>
                </div>
                <div class="zjzz-buylist-det" v-for="(items, i) in item.goods" :key="i">
                  <img :src="BURL+items.gthumb" />
                  <div class="zjzz-buylist-gdetail">
                    <span class="zjzz-buylist-gtit1">{{items.gname}}</span>
                    <span class="zjzz-buylist-gmoney">
                      <i class="zjzz-buylist-gm1">￥{{items.gdiscount}}</i>
                      <i class="zjzz-buylist-gm2">x{{items.num}}</i>
                    </span>
                  </div>
                </div>
                <span class="zjzz-buylist-goodsm">
                  <i class="zjzz-buylist-gm3">共{{item.count}}件</i>
                  <i>
                    {{item.states}}总额：
                    <i class="zjzz-buylist-gm4">￥{{item.total}}</i>
                  </i>
                </span>
                <div class="zjzz-buylist-btn">
                  <a v-if="item.states=='已送达'" class="zjzz-buylist-btn3">确认收货</a>
                  <a v-if="item.states=='已发货'" href="./order-tracking.html" class="zjzz-buylist-btn1">查看物流</a>
                  <a v-if="item.states=='已支付'" class="zjzz-buylist-btn1">催物流</a>
                  <a v-if="item.states=='未支付'" class="zjzz-buylist-btn3" @click="fukuan">立即支付</a>
                </div>
              </div>
            </van-cell>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #f7f7f7;
}
.zjzz-buylist-wear {
  max-width: 640px;
  overflow: hidden;
  margin: 0 auto;
}
/*头部 */
.zjzz-buylist-top {
  position: fixed;
  width: 100%;
  height: 45px;
  line-height: 45px;
  z-index: 9999;
  top: 0;
  left: 0;
  color: #333333;
  background: #ffffff;
  text-align: center;
  border-bottom: 1px solid #f3f3f3;
}
.zjzz-buylist-t1,
.zjzz-buylist-t2,
.zjzz-buylist-t3 {
  float: left;
}
.zjzz-buylist-t1,
.zjzz-buylist-t3 {
  width: 30%;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
}
.zjzz-buylist-t1 {
  background: url(../assets/discounts/arrow-left.png) no-repeat 10px
    center;
  background-size: 20%;
}
.zjzz-buylist-t2 {
  width: 40%;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
.zjzz-buylist-t4,
.zjzz-buylist-t5 {
  float: left;
  height: 45px;
}
.zjzz-buylist-t4 {
  width: 100%;
  /*background: url(../assets/images/ltt-sousuo.png) no-repeat 85% center;*/
  background-size: 18%;
}
.zjzz-buylist-t5 {
  width: 35%;
  font-size: 16px;
  color: #7f7f84;
  text-align: right;
  /* background: url(../images/more.png) no-repeat center center; */
  background-size: 45%;
}
.zjzz-buylist-top2 {
  position: fixed;
  z-index: 9999;
  left: 0;
  width: 100%;
  top: 46px;
  background: #ffffff;
  height: 40px;
  line-height: 40px;
}
.zjzz-buylist-tp1 {
  position: relative;
  float: left;
  width: 20%;
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.zjzz-buylist-tp2 {
  display: inline-block;
  padding: 0 5px;
  line-height: 40px;
  text-align: center;
  height: 37px;
  color: #ff9201;
  border-bottom: 3px solid #ff9201;
}
.zjzz-buylist-tp3 {
  position: absolute;
  top: 2px;
  right: 3px;
  color: #ff9201;
  font-size: 12px;
  width: 15px;
  height: 15px;
  line-height: 14px;
  text-align: center;
  border: 1px solid #ff9201;
  border-radius: 50%;
}
/*主面板*/
.zjzz-buylist-mid {
  width: 100%;
  margin-top: 86px;
  position: relative;
  top: 0;
  background: #f8f3f7;
}
.zjzz-buylist-m1 {
  float: left;
  width: 100%;
}
/*全部*/
.zjzz-buylist-goods1 {
  margin-top: 10px;
}
.zjzz-buylist-allact {
  float: left;
  width: 90%;
  padding-left: 10%;
  line-height: 40px;
  font-size: 14px;
  margin-top: 10px;
  /*background: url(../assets/images/gonga.png) no-repeat 3% center #FFFFFF;*/
  background-size: 5%;
}
.zjzz-buylist-gtime {
  float: left;
  width: 100%;
  font-size: 14px;
  line-height: 35px;
  border-bottom: 1px solid #d4d4d4;
}
.zjzz-buylist-gtime1 {
  float: left;
}
.zjzz-buylist-gtime2 {
  float: right;
  color: #787878;
}
.zjzz-buylist-gtit1 {
  float: left;
  width: 67%;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.zjzz-buylist-gmoney {
  float: right;
  text-align: right;
  line-height: 20px;
  margin-top: 10px;
}
.zjzz-buylist-gm1,
.zjzz-buylist-gm2 {
  float: left;
  width: 100%;
  font-size: 14px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zjzz-buylist-gm2 {
  color: #b1b1b1;
}
.zjzz-buylist-det {
  float: left;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
}
.zjzz-buylist-gm3 {
  margin: 0 10px;
}
.zjzz-buylist-gm4 {
  color: #ff9201;
}
.zjzz-buylist-goodsm {
  float: left;
  width: 100%;
  text-align: right;
  line-height: 45px;
  font-size: 14px;
}
.zjzz-buylist-btn3 {
  color: #ffffff;
  background: #ff9201;
  border: 1px solid #ff9201;
}
.zjzz-buylist-shm {
  float: right;
  width: 100%;
  text-align: right;
  line-height: 25px;
  color: #ed889a;
  font-size: 14px;
}
.zjzz-buylist-shm img {
  vertical-align: middle;
  float: none !important;
  margin-top: -3px;
  width: 22px !important;
  height: 22px !important;
}
/*评价*/
.zjzz-buylist-act {
  width: 100%;
}
.zjzz-buylist-mt1 {
  color: #a6a6a6;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  float: left;
  width: 50%;
  background: #ffffff;
}
.zjzz-buylist-mt2 {
  display: inline-block;
  line-height: 40px;
  height: 37px;
  color: #09090b;
  padding: 0 5px;
  border-bottom: 3px solid #09090b;
}
.zjzz-buylist-mt3 {
  float: left;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: #bcb7bb;
  font-size: 12px;
  background: #f8f3f7;
}
.zjzz-buylist-ms1 {
  float: left;
  width: 100%;
}
.zjzz-buylist-goods,
.zjzz-buylist-goods1 {
  float: left;
  width: 94%;
  padding: 5px 3% 0 3%;
  background: #ffffff;
  border-bottom: 1px solid #f6f6f6;
}
.zjzz-buylist-goods img,
.zjzz-buylist-goods1 img {
  float: left;
  width: 75px;
  height: 75px;
}
.zjzz-buylist-gdetail {
  display: block;
  margin-left: 80px;
}
.zjzz-buylist-gtit,
.zjzz-buylist-gd {
  float: left;
  width: 100%;
  font-size: 14px;
}
.zjzz-buylist-gtit {
  margin-top: 10px;
}
.zjzz-buylist-gd {
  line-height: 35px;
  color: #afafaf;
}
.zjzz-buylist-btn {
  float: left;
  width: 100%;
  margin-bottom: 10px;
}
.zjzz-buylist-btn a {
  float: right;
  width: 85px;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
  border-radius: 3px;
}
.zjzz-buylist-btn1 {
  color: #393939;
  margin-right: 15px;
  border: 1px solid #cdcdcd;
}
.zjzz-buylist-btn2 {
  color: #ff9201;
  border: 1px solid #ff9201;
}
.zjzz-buylist-mt4 {
  float: left;
  width: 100%;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  color: #8d8d8d;
  background: #ffffff;
}
.zjzz-buylist-mt4 img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: -5px;
}
</style>

<script>
import { BURL } from "@/config/base";
import { queryOrder, queryOrderList } from "@/api/orderlist";
export default {
  data() {
    return {
      orders: [],
      orderlist: [],
      page: 0,
      state: 0,
      loading: false,
      finished: false,
      isLoading: false,
      count: 0,
      BURL:BURL
    };
  },
  methods: {
    async getOrder() {
      let res = await queryOrder();
      let { code, data } = res.data;
      if (code == 200) {
        this.orders = data;
      }
    },
    onclick(state) {
      this.state = state;
      this.page = 0;
      this.orderlist = [];
      this.onLoad();
    },
    async getOrderList() {
      let datas = { page: this.page };
      let res = await queryOrderList(this.state, datas);
      let { code, data, count } = res.data;
      if (code == 200) {
        data.map(ele => {
          switch (ele.state) {
            case 1:
              return (ele.states = "未支付");
            case 2:
              return (ele.states = "已支付");
            case 3:
              return (ele.states = "未签收");
            case 4:
              return (ele.states = "已签收");
            default:
              break;
          }
        });
        this.orderlist = this.orderlist.concat(data);
        this.count = count;
        this.loading = false;
      }

      if (this.count <= this.orderlist.length) {
        this.finished = true;
      }
    },
    async fukuan(){
      
    },
    onLoad() {
      // setTimeout(() => {
      this.page++;
      this.getOrderList();

      // }, 500);
    }
  },
  mounted() {
    this.getOrder();
  }
};
</script>