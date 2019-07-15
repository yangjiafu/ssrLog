<template>
  <div>
    登录页面
    <button @click="set_user('1')">登录</button>
  </div>
</template>
<script>
  import {setCookie,getCookie} from "../../plugins/cookie";

  export default {
    activated(){
        // let login = this.$store.state.user;
        // console.log('用户state信息');
        // console.log(login);
    },
    methods:{
      check_is_login(){
        let user = getCookie('user');
        if (user == '1'){
          this.$router.go(-1)
        }
      },
      set_user(type){
        setCookie('user',type)
        this.check_is_login()
      }
    }
  }
</script>
<style scoped>

</style>
