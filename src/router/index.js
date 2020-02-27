import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/goodslist/',
    name: 'goodslist',
    meta: {
      title: "商品详情"
    },
    component: () => import('@/views/GoodsList.vue')
  },
  {
    path: '/catelist',
    name: 'catelist',
    meta: {
      title: "分类列表"
    },
    component: () => import('@/views/CateList.vue')
  },
  {
    path: '/cate',
    name: 'cate',
    meta: {
      title: "分类"
    },
    component: () => import('@/views/Cate.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: "我的"
    },
    component: () => import('@/views/User.vue')
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    meta: {
      title: "用户登录",
    },
    component: () => import('@/views/UserLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: "用户注册",
    },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    meta: {
      title: "购物车",
    },
    component: () => import('@/views/ShopCart.vue')
  },
  {
    path: '/order/:onum',
    name: 'order',
    meta: {
      title: "订单详情",
    },
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/osuccess/',
    name: 'osuccess',
    meta: {
      title: "支付成功",
    },
    component: () => import('@/views/Osuccess.vue')
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    meta: {
      title: "支付成功",
    },
    component: () => import('@/views/Orderlist.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'shop';
  if (to.meta.isAure) {
    //sessionStorage.getItem
    const s = sessionStorage.token;
    if (s) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.name
        }
      });
    }
  } else {
    next();
  }
})
export default router