<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        jjyy_journal
      </h1>
      <h2 class="subtitle">
        公司日报应用
      </h2>

      <div class="links">
        <div @click="go_login">
          去登录页
        </div>
        <button @click="set_user('')">清空user</button>
        <button @click="set_user('1')">写入user</button>
      </div>
      <div>
        <button @click="go_page('log-log_day')">日报页面</button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {setCookie,getCookie} from "../plugins/cookie";

export default {
  components: {
    Logo
  },
  mounted() {
    // this.check_is_login()
  },
  methods:{
    go_page(type){
      this.$router.push({name:type})
    },
    check_is_login(){
      let user = getCookie('user');
      if (user !== '1'){
        this.$router.push({name:'login-login'})
      }
    },
    go_login(){
      this.$router.push({name:'login-login'})
    },
    set_user(type){
      setCookie('user',type,3);
      this.check_is_login()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
