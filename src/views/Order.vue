<template>
  <div>
    <Head></Head>
    <div class="jd-qrdd-a1">
      <span class="qrdd-a1-t1">董辉</span>
      <span class="qrdd-a1-t1">185****5453</span>
      <span class="qrdd-a1-t2">默认</span>
      <div class="qrdd-a1-b1">
        <span class="qrdd-a1-img1"></span>
        <span class="qrdd-a1-t3">北京市 海淀区 四环到五环之间 四季青杏石口路5号益园文化创业基地c3区4层</span>
      </div>
      <span class="qrdd-a1-img2"></span>
    </div>
    <div class="zjzz-buylist-goods1">
      <div class="zjzz-buylist-gtime">
        <span class="zjzz-buylist-gtime1"></span>
        <span class="zjzz-buylist-gtime2">联系客服</span>
      </div>
      <div
        class="zjzz-buylist-det"
        v-for="(item, index) in order.goods"
        :key="index"
        @click="lookGoods(item.gid)"
      >
        <img :src="BURL+item.gthumb" />
        <div class="zjzz-buylist-gdetail">
          <span class="zjzz-buylist-gtit1">{{item.gname}}</span>
          <span class="zjzz-buylist-gmoney">
            <span class="zjzz-buylist-gm1">{{item.gdiscount}}</span>
            <i class="zjzz-buylist-gm2">x{{item.num}}</i>
          </span>
        </div>
      </div>
      <div class="zjzz-buylist-btn"></div>
    </div>
    <div class="indent-details-box2">
      <span class="indent-details-text4">应付总额</span>
      <span class="indent-details-text5">￥{{order.total}}</span>
    </div>
    <div class="indent-details-box2">
      <span class="indent-details-text4 tcolor-grey">商品总价</span>
      <span class="indent-details-text5 tcolor-black">￥{{order.total}}</span>
    </div>
    <div class="indent-details-box2">
      <span class="indent-details-text4 tcolor-grey">商品总数</span>
      <span class="indent-details-text5 tcolor-black">{{order.count}}件</span>
    </div>
    <div class="indent-details-box2">
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="备注"
        type="textarea"
        placeholder="请输入备注"
      />
    </div>
    <div class="indent-details-box3">
      <p>订单编号:{{order.onum}}</p>
      <p>支付方式:支付宝</p>
      <p>支付交易单号:201711024866544846144</p>
      <p>下单时间:{{order.ctime}}</p>
    </div>

    <div class="foot">
      <div class="foot-index"></div>
      <div class="foot-index"></div>
      <button class="foot-btn1" @click="subCart()">取消订单</button>
      <button class="foot-btn2" @touchstart.stop="show = true">立即支付</button>
    </div>

    <van-password-input
      :value="value"
      v-if="show"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      :show="show"
      close-button-text="取消"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<style scoped>
.ddxq-top {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 0.26rem 0;
  height: 0.36rem;
  font-size: 0.32rem;
  text-align: center;
  z-index: 666;
  background: url(../assets/personal/arrow-left.png) no-repeat 10px center
    #ffffff;
  background-size: 6%;
  border-bottom: 1px solid #f4f4f4;
}
.qrdd-topbox-t1 {
  display: block;
  text-align: center;
}
.qrdd-topbox-t2 {
  position: fixed;
  font-size: 0.32rem;
  z-index: 777;
  right: 0.2rem;
  top: 0.26rem;
}
.ddxq-bigbox {
  width: 100%;
  float: left;
  margin-bottom: 0.2rem;
  margin-top: 0.9rem;
}
.jd-qrdd-a1 {
  width: 100%;
  float: left;
  position: relative;
  background-color: #ffffff;
  padding: 0.3rem 0px 0px 0px;
  margin-bottom: 0.2rem;
}
.qrdd-a1-img2 {
  width: 100%;
  height: 0.04rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  /* background: url(../assets/personal/jd-qrdd-img1.png); */
  background-size: 28%;
}
.qrdd-a1-t1 {
  font-size: 0.28rem;
  float: left;
  margin-left: 6%;
  font-weight: 600;
}
.qrdd-a1-t2 {
  float: left;
  font-size: 0.24rem;
  padding: 0.04rem 0.08rem 0.02rem 0.08rem;
  background-color: #ff9201;
  color: #ffffff;
  margin-left: 3%;
  margin-top: -0.04rem;
}
.qrdd-a1-img1 {
  width: 0.22rem;
  height: 0.32rem;
  float: left;
  /* background: url(../assets/personal/jd-xq-img1.png) no-repeat; */
  background-size: 100%;
}
.qrdd-a1-b1 {
  width: 95%;
  float: left;
  padding: 0.2rem 3% 0.2rem 2%;
}
.qrdd-a1-t3 {
  width: 95%;
  float: left;
  margin-left: 1%;
  line-height: 0.36rem;
  font-size: 0.24rem;
  margin-top: -3px;
}
/*订单状态*/
.ddxq-address {
  width: 94%;
  float: left;
  height: 2rem;
  padding: 0.3rem 3%;
  background: url(../assets/personal/arrow-right2.png) no-repeat 97% center
    #636572;
  background-size: 6%;
  margin-bottom: 0.2rem;
}
.ddxq-address-img1 {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  background: url(../assets/personal/indent33.png) no-repeat center center;
  background-size: 100%;
}
.ddxq-address-1 {
  float: left;
  font-size: 0.3rem;
  color: #fbfeff;
  margin-left: 0.2rem;
}
.ddxq-address-2 {
  width: 85%;
  float: left;
  margin-top: 0.2rem;
  height: 0.88rem;
  line-height: 0.44rem;
  color: #fbfeff;
  padding: 0px 5% 0px 10%;
  font-size: 0.28rem;
  overflow: hidden;
}
.ddxq-address-3 {
  float: left;
  font-size: 0.24rem;
  color: #b0b2bf;
  margin: 0.2rem 0px 0px 10%;
}
/*商品部分*/
.zjzz-buylist-goods1 {
  margin-bottom: 0.2rem;
}
.zjzz-buylist-allact {
  float: left;
  width: 90%;
  padding-left: 10%;
  line-height: 0.8rem;
  font-size: 0.28rem;
  margin-top: 0.2rem;
  /* background: url(../assets/personal/gonga.png) no-repeat 3% center #ffffff; */
  background-size: 5%;
}
.zjzz-buylist-gtime {
  float: left;
  width: 100%;
  font-size: 0.28rem;
  line-height: 0.7rem;
  border-bottom: 0.02rem solid #d4d4d4;
}
.zjzz-buylist-gtime1 {
  float: left;
}
.zjzz-buylist-gtime2 {
  float: right;
  color: #ff9201;
}
.zjzz-buylist-gtit1 {
  float: left;
  width: 67%;
  font-size: 0.28rem;
  line-height: 0.4rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.zjzz-buylist-gmoney {
  float: right;
  text-align: right;
  line-height: 0.4rem;
  margin-top: 0.2rem;
}
.zjzz-buylist-gm2 {
  float: left;
  width: 100%;
  font-size: 0.28rem;
  height: 0.4rem;
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
  padding: 0.2rem 0;
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
  line-height: 0.5rem;
  color: #ed889a;
  font-size: 0.28rem;
}
.zjzz-buylist-shm img {
  vertical-align: middle;
  margin-top: -3px;
  width: 0.44rem;
  height: 0.44rem;
}
.zjzz-buylist-btn {
  float: left;
  width: 100%;
  margin-bottom: 0.2rem;
}
.zjzz-buylist-btn a {
  float: right;
  width: 1.7rem;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.06rem;
}
.zjzz-buylist-btn1 {
  color: #393939;
  margin-right: 0.3rem;
  border: 1px solid #cdcdcd;
}
.zjzz-buylist-btn2 {
  color: #be2543;
  border: 1px solid #be2543;
}
.zjzz-buylist-goods1 {
  float: left;
  width: 94%;
  padding: 0.1rem 3% 0 3%;
  background: #ffffff;
  border-bottom: 1px solid #f6f6f6;
}
.zjzz-buylist-goods1 img {
  float: left;
  width: 1.5rem;
  height: 1.5rem;
}
.zjzz-buylist-gdetail {
  display: block;
  margin-left: 1.6rem;
}
.indent-details-img2 {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  background: url(../assets/personal/shop.png) no-repeat center center;
  background-size: 100%;
  margin-top: 0.16rem;
  margin-right: 0.06rem;
}
/*商品金额部分*/
.indent-details-box2 {
  width: 94%;
  float: left;
  height: 0.7rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f8f8f8;
  padding: 0px 3%;
  background: #fff;
}
.indent-details-text4 {
  float: left;
  font-size: 0.28rem;
}
.indent-details-text5 {
  float: right;
  font-size: 0.28rem;
  color: #ff9201;
}
.tcolor-grey {
  color: #979797;
}
.tcolor-black {
  color: #494949;
}
.indent-details-box3 {
  width: 94%;
  float: left;
  padding: 0.3rem 3%;
  background: #fff;
  margin-top: 0.2rem;
  line-height: 0.44rem;
  font-size: 0.28rem;
}
.indent-details-box3 p {
  height: 0.5rem;
  color: #494949;
}
.foot {
  width: 100%;
  float: left;
  height: 1.2rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  border-top: 0.01rem solid #fcfcfc;
  background-color: #fcfcfc;
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
.van-password-input {
  position: fixed;
  top: 6rem;
  z-index: 9;
  width: 90%;
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
import Head from "@/components/listhead/Head";
import { readOrder, upOrder } from "@/api/order";
import { BURL } from "@/config/base";

export default {
  name: "order",
  components: { Head },
  data() {
    return {
      order: [],
      BURL: BURL,
      value: "",
      show: false,
      showKeyboard: false,
      message:''
    };
  },
  methods: {
    async getOrder() {
      let onum = await this.$route.params.onum;
      let res = await readOrder(onum);
      let { code, data } = res.data;
      if (code == 200) {
        this.order = data;
        this.$store.dispatch("getCart");
      }
    },
    lookGoods(gid) {
      this.$router.push({ name: "goodslist", query: { gid: gid } });
    },
    async onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if(this.value.length<6){
        return;
      }
      if (this.value === "123456") {
        this.value = '';
        let datas = {rem:this.message}
        let res = await upOrder(this.order["onum"],datas);
        let { code, msg } = res.data;
        if (code == 200) {
          this.$toast(msg);
          this.$router.replace({
            name: "osuccess",
            query: { onum: this.order["onum"] }
          });
        }
      }else{
        this.$toast('密码错误');
        this.value=''
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    subCart(){}
  },
  mounted() {
    this.getOrder();
  }
};
</script>