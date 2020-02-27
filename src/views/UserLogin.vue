<template>
  <div id="bodyer">
    <Head :title="headname"></Head>
    <div class="logins">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <div class="btn">
          <van-button round type="info" @click="login">立即登录</van-button>
        </div>
        <div class="pass">
          <span>忘记密码</span>
          <span @click="register()">立即注册</span>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped>
#bodyer {
  /* width: 5rem; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
}
.logins {
  width: 6.5rem;
}
.btn {
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
}
.pass {
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
  color: #98d4f7;
  padding: 0 1rem;
  background-color: #fcfcfc;
}
</style>

<script>
import Head from "@/components/listhead/Head.vue";
import { logins } from "@/api/logon";

export default {
  name: "login",
  components: { Head },
  data() {
    return {
      username: "",
      password: "",
      headname: "登录"
    };
  },
  methods: {
    register() {
      this.$router.push({ name: "register" });
    },
    login() {
      let data = { username: this.username, upassword: this.password };
      logins(data).then(res => {
        let { code, msg, token } = res.data;
        if (code == 200) {
          sessionStorage.setItem("token", token);
          this.$toast(msg);
          this.getCart();
          this.$router.push({ name: "user" });
        }
      });
    },
    getCart() {
      this.$store.dispatch("getCart");
    }
  }
};
</script>