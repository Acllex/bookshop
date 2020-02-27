<template>
  <div id="catelist">
    <Head></Head>
    <section class="bodyer">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="banner">
          <img src="@/assets/discounts/discounts-img1.jpg" alt />
        </div>

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item.cid">
            <div class="box1">
              <div class="photo">
                <img :src="BURL+item.gthumb" alt />
              </div>
              <div class="price">
                <span>{{item.gname}}</span>
                <span>
                  ￥{{item.gdiscount}}
                  <s>原价￥{{item.gprice}}</s>
                </span>
                <div>
                  <router-link :to="{ path: '/goodslist', query: { gid: item.gid }}">
                  立即购买
                  </router-link>
                </div>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </section>
  </div>
</template>

<style scoped>
#catelist .bodyer {
  width: 100%;
  margin-top: 0.9rem;
  padding-bottom: 1.1rem;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.box1 {
  height: 2.8rem;
  border: 0.02rem solid #dedede;
  margin: 0.2rem 3% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.photo {
  width: 2.8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.photo img {
  width: 2rem;
}
.photo div {
  width: 1rem;
  height: 1rem;
  /* background: url() no-repeat center; */
  /* background-size: cover; */
  position: absolute;
  top: 0;
  left: 0;
}
.price {
  width: 3.6rem;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
}
.price span:nth-child(2) {
  margin-top: 0.1rem;
  font-size: 0.32rem;
  color: #ef7d00;
}
.price span:nth-child(2) s {
  margin-left: 0.1rem;
  font-size: 0.28rem;
  color: #8d8d8d;
}
.price div {
  width: 50%;
  height: 0.56rem;
  background-color: #f47c02;
  border-radius: 0.3rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.16rem 0 0 0.2rem;
}
.top {
  margin-top: 0.2rem;
}
.dis-bottom {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  border-top: 1px solid #f4f4f4;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
}
.bottom-img1 {
  width: 1.2rem;
  height: 1.2rem;
  /* background: url() no-repeat center #ffd608; */
  /* background-size: 50%; */
  border-radius: 50%;
  position: absolute;
  bottom: 0.2rem;
  left: 0.2rem;
  z-index: 3;
}
.bottom-img1 i {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #ff9201;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.24rem;
  color: #fff;
}
.dis-bottom span {
  font-size: 0.32rem;
  color: #ff9201;
  margin-left: 1.6rem;
}
.dis-bottom p {
  width: 2rem;
  background-color: #fed700;
  color: #fff;
  font-size: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Head from "@/components/listhead/Head.vue";
import { queryList } from "@/api/index.js";
import { BURL } from "@/config/base";
export default {
  name: "catelist",
  components: { Head },
  data() {
    return {
      list: [],
      page: 0,
      limit: 5,
      loading: false,
      finished: false,
      isLoading: false,
      count: 0,
      cid: this.$route.query.cid,
      BURL: BURL
    };
  },
  methods: {
    getList() {
      let data = { cid: this.cid, limit: this.limit, page: this.page };
      queryList(data).then(res => {
        let { code, count, data } = res.data;
        if (code == 200) {
          this.list = this.list.concat(data);
          this.count = count;
          this.loading = false;
        }

        if (this.count <= this.list.length) {
          this.finished = true;
        }
      });
    },
    onRefresh() {
      this.finished = true;
      // setTimeout(() => {
      this.page = 1;
      this.count = 0;
      this.list = [];
      this.getList();
      this.isLoading = false;
      // }, 500);
      this.finished = false;
    },
    onLoad() {
      // setTimeout(() => {
      this.page++;
      this.getList();
      // }, 500);
    }
  }
};
</script>