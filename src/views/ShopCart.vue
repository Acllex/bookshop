<template>
  <div>
    <div v-if="cart">
      <div class="head">
        <a href="shop.html" class="head-left"></a>
        <span class="head-title">购物车</span>
        <span class="head-right">编辑</span>
      </div>

      <!--发货时间-->
      <div class="shop-time">
        收货时间
        <span>今天30分钟可送达(可预订)</span>
      </div>

      <!--自营商品-->
      <div class="shop-shop">
        <!-- <div class="shop-shop-text">
        <i class="iconfont icon-weixuanzhong"></i>
        <span>自营商品</span>
        </div>-->

        <div class="shop-shop-goods" v-for="(item, index) in cart.goods" :key="index">
          <div class="goods_icon" @click="choice(item)">
            <i :class="['iconfont',item.state==1?'icon-xuanzhong':'icon-weixuanzhong']"></i>
          </div>

          <img :src="BURL+item.gthumb" class="goods-img" />
          <div class="goods-text">
            <div class="goods-text-title">{{item.gname}}</div>
            <div class="goods-text-price">￥{{item.gdiscount}}</div>
            <div class="goods-text-sum">
              <img @click="subCart(item.gid,item.gdiscount)" src="@/assets/shop/subtract.png" />
              <span>{{goodsnum(item.gid)}}</span>
              <img @click="addCart(item.gid,item.gdiscount)" src="@/assets/shop/add.png" />
            </div>
          </div>
        </div>
      </div>
      <!--全选-->
      <div class="shop-all">
        <div class="goods_icons" @click="choiceAll()">
          <i :class="['iconfont',istrue?'icon-xuanzhong':'icon-weixuanzhong']"></i>
        </div>
        <span>全选</span>
        <span>合计：￥</span>
        <span>{{cart.stotal}}</span>
        <a @click="orderAdd()">去结算</a>
        <img src="@/assets/shop/delete.png" class="delete" />
      </div>
    </div>
    <div v-else>购物车中没有商品</div>
    <Foot></Foot>
  </div>
</template>

<style scoped>
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
  background: url(../assets/shop/arrow-left.png) no-repeat 0.2rem center;
  background-size: 18%;
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
  color: #000;
  float: left;
}
.head-right {
  width: 30%;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.32rem;
  float: left;
  text-align: right;
  padding-right: 0.46rem;
  box-sizing: border-box;
}

/*时间*/
.shop-time {
  margin-top: 0.9rem;
  width: 94%;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 3%;
  background: url(../assets/shop/arrow-right.png) no-repeat 97% center #fff;
  background-size: 6%;
  margin-bottom: 0.1rem;
  font-size: 0.28rem;
  overflow: hidden;
}
.shop-time span {
  float: right;
  margin-right: 0.5rem;
  color: #379ede;
}
/*自营商品*/
.shop-shop {
  width: 100%;
  margin-bottom: 2.02rem;
  overflow: hidden;
}
.shop-shop-text {
  width: 94%;
  height: 0.7rem;
  line-height: 0.7rem;
  float: left;
  background: #fff;
  padding: 0 3%;
  border-top: 0.02rem solid #f9f9f9;
}
.shop-shop-text img {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  margin-top: 0.14rem;
}

.shop-shop-text span {
  float: left;
  margin-left: 0.1rem;
  font-size: 0.3rem;
}
.shop-shop-goods {
  width: 94%;
  padding: 0.1rem 3%;
  float: left;
  background-color: #ffffff;
  border-top: 0.02rem solid #f9f9f9;
}
.goods_icon {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  margin: 0.98rem 0 0.98rem 0.16rem;
}
.goods_icons {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  margin: 0 0.2rem 0 0;
}
.goods_icon i {
  color: orange;
  font-size: 0.43rem;
}
.check-img {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  margin: 0.98rem 0.16rem 0.98rem 0;
}
.goods-img {
  width: 2rem;
  height: 2rem;
  margin: 0.2rem 0;
  float: left;
}
.goods-text {
  margin-left: 2.8rem;
  height: 2.2rem;
  overflow: hidden;
}
.goods-text-title {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  line-height: 0.4rem;
  color: #333;
  font-size: 0.3rem;
  margin-top: 0.2rem;
}
.goods-text-price {
  width: 100%;
  color: #ff9201;
  margin-top: 0.1rem;
  font-size: 0.36rem;
}
.goods-text-sum {
  width: 100%;
  margin-top: 0.1rem;
}
.goods-text-sum img {
  width: 0.5rem;
  height: 0.5rem;
  float: left;
}
.goods-text-sum span {
  float: left;
  font-size: 0.28rem;
  line-height: 0.5rem;
  width: 0.4rem;
  padding-left: 0.2rem;
}
.shop-shop-price {
  width: 94%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  padding: 0 3%;
  font-size: 0.28rem;
  border-top: 0.02rem solid #f9f9f9;
  border-bottom: 0.02rem solid #f9f9f9;
  float: left;
}
/*全选*/
.shop-all {
  width: 94%;
  height: 0.9rem;
  position: fixed;
  bottom: 1rem;
  left: 0;
  background-color: #ffffff;
  z-index: 999;
  padding: 0 3%;
  border-bottom: 0.02rem solid #f7f7f7;
  line-height: 0.9rem;
}
.all-img {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  margin: 0.2rem 0.2rem 0 0;
}
.shop-all span {
  float: left;
  line-height: 0.9rem;
}
.shop-all span:nth-child(3) {
  margin-left: 0.14rem;
  font-size: 0.28rem;
  color: #a3a3a3;
}
.shop-all span:nth-child(4) {
  font-size: 0.32rem;
  font-weight: 900;
  color: #ff9201;
}
.shop-all a {
  width: 1.4rem;
  text-align: center;
  float: right;
  background: #ff9201;
  height: 0.6rem;
  margin-top: 0.14rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  color: #fff;
  font-size: 0.28rem;
}
.delete {
  width: 0.36rem;
  height: 0.36rem;
  float: right;
  margin-top: 0.27rem;
  display: none;
}
</style>

<script>
import Foot from "@/components/listhead/Foot";
import { BURL } from "@/config/base";
import { cartAdd, choiceCart, allCart } from "@/api/cart";
import { addOrder } from "@/api/order";
export default {
  name: "ShopCart",
  components: { Foot },
  data() {
    return {
      BURL: BURL
    };
  },
  methods: {
    goodsnum(gid) {
      return this.$store.getters.goodsNum(gid);
    },
    async subCart(gid, gdiscount) {
      if (this.goodsnum(gid) <= 1) {
        this.$dialog
          .confirm({
            message: "确定要删除这个商品吗？"
          })
          .then(async () => {
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
          })
          .catch(() => {
            // on cancel
          });
        return;
      }
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中..."
      });
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
        this.$toast.clear();
      }
    },
    async addCart(gid, gdiscount) {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中..."
      });
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
        this.$toast.clear();
      }
    },
    async cartQuery() {
      this.$store.dispatch("getCart");
    },
    async choice(item) {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中..."
      });
      if (item.state == 1) {
        let data = {
          gid: item.gid,
          state: 0
        };
        let choicecart = await choiceCart(data);
        let { code } = choicecart.data;
        if (code == 200) {
          this.cartQuery();
          this.$toast.clear();
        }
      } else {
        let data = {
          gid: item.gid,
          state: 1
        };
        let choicecart = await choiceCart(data);
        let { code } = choicecart.data;
        if (code == 200) {
          this.cartQuery();
          this.$toast.clear();
        }
      }
    },
    allChoice() {
      if (!this.cart) {
        return;
      }
      let goods = this.cart.goods;
      let isall = goods.every(ele => ele.state == 1);
      if (isall) {
        let istrue = true;
        this.$store.commit("getIstrue", istrue);
      } else {
        let istrue = false;
        this.$store.commit("getIstrue", istrue);
      }
    },
    async choiceAll() {
      if (this.istrue) {
        let res = await allCart({ flag: 1 });
        let { code } = res.data;
        if (code == 200) {
          this.cartQuery();
          let istrue = false;
          this.$store.commit("getIstrue", istrue);
        }
      } else {
        let res = await allCart({ flag: 0 });
        let { code } = res.data;
        if (code == 200) {
          this.cartQuery();
          let istrue = true;
          this.$store.commit("getIstrue", istrue);
        }
      }
    },
    async orderAdd() {
      if (this.cart.count == 0) {
        this.$toast("请选择商品");
        return;
      }
      let res = await addOrder();
      let { code, msg, onum } = res.data;
      if (code == 200) {
        this.$toast(msg);
        this.$store.dispatch("getCart");
        this.$router.push({ name: "order", params: { onum } });
      }
    },
    delCart() {
    }
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    istrue() {
      return this.$store.state.istrue;
    }
  },
  watch: {
    cart: function() {
      this.allChoice();
    }
  },
  mounted() {
    this.allChoice();
  }
};
</script>