import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {queryCart} from "@/api/cart";
import { seeUser } from "@/api/logon";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: null,
    istrue:false,
    user:null,
  },
  mutations: {
    getUser(state, user) {
      state.user = user;
    },
    getCart(state, cart) {
      state.cart = cart;
    },
    getIstrue(state, istrue){
      state.istrue = istrue;
    },
    clearState(state){
      state.user=null;
      state.cart=null;
    }
  },
  actions: {
    async getCart(context){
      let res = await queryCart();
      let {code, data} = res.data;
      if(code==200){
        context.commit('getCart', data);
      }
    },
    async getUser(context){
      let res = await seeUser();
      let {code, data} = res.data;
        if(code==200){
          context.commit('getUser', data);
        }
    }
  },
  modules: {},
  getters: {
    goodsNum: (state) => (gid) => {
      if (!state.cart) {
        return 0;
      }
      let goods = state.cart.goods.find(ele => ele.gid == gid);
      if(goods){
        return goods.num;
      }else{
        return 0;
      }
    },
  },
  plugins: [vuexLocal.plugin]
})