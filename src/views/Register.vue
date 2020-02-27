<template>
  <div id="bodyer">
    <Head :title="headname"></Head>
    <div class="logins">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          label="用户名"
          placeholder="请输入用户名"
          @input="vefname"
          :error-message="error"
        />
        <van-field v-model="tell" required label="手机号" placeholder="请手机号" @input="veftell" :error-message="terror" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <div class="btn">
          <van-button round type="info" @click="putdata()">立即注册</van-button>
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
</style>

<script>
import Head from "@/components/listhead/Head.vue";
import { register, vef } from "@/api/logon";
export default {
  name: "register",
  components: {Head},
  data() {
    return {
      avatar: "/uploads/headphoto.jpg",
      username: "",
      tell: "",
      password: "",
      timer: "",
      error: "",
      terror: "",
      headname: '注册'
    };
  },
  methods: {
    putdata() {
      let data = {
        avatar: this.avatar,
        username: this.username,
        tell: this.tell,
        upassword: this.password
      };
      register(data).then(res=>{
          let {code, msg} = res.data;
          if(code==200){
              this.$toast(msg);
              this.$router.push({name:'userlogin'});
          }else{
              this.$toast(msg);
          }
      });
    },
    vefname(value) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!value){
        return;
      }
      this.timer = setTimeout(() => {
        let data = { id: "username", value };
        vef(data).then(res => {
          let { code, msg } = res.data;
          if (code == 200) {
            this.error = msg;
          }else{
              this.error = '';
          }
        });
      }, 200);
    },
    veftell(value) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let data = { id: "tell", value };
        vef(data).then(res => {
          let { code, msg } = res.data;
          if (code == 200) {
            this.terror = msg;
          }else{
              this.terror = '';
          }
        });
      }, 200);
    }
  }
};
</script>