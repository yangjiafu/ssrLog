<template>
  <div class="log-write-write" :contenteditable="disabled" :placeholder="placeholder" style="-webkit-user-select:text">{{content}}</div>
</template>

<script>
    export default {
        name: "inputs",
        props:{
          disabled:{type:Boolean,default:true},
          placeholder:{type:String,default: '请输入'},
          content:{type:String,default:''}
        },
        data(){
            return{
              info_box: {
                things: ''
              }
            }
        }
    }
</script>

<style lang="less" scoped>
  .log-write-write{
    padding:10px;
    width: 100%;
    height: 100%;
    font-size: 18px;
    outline: none;
    color: #333;
    border: 1px solid #a9a9a9;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 0;
    background-color: transparent;
  }
  .log-write-write::placeholder{
    font-size: 18px;
    color: #aaa;
  }
  .log-write-write:empty:before{
    content: attr(placeholder);
    font-size: 18px;
    color:#bbb;
  }
  .log-write-write:focus:before{
    content:'';
    display: inline-block;
    height: 21px;
  }
</style>
