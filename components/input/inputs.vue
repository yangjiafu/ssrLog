<template>
  <div>
    <div class="log-write-write" :contenteditable="disabled" :placeholder="placeholder" @input="changeText"  style="-webkit-user-select:text">{{write_info}}</div>
  </div>
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
              },
              write_info: this.content
            }
        },
        methods:{
          changeText(event){ //填写信息回传绑定
            this.$emit('input',event.target.innerHTML)
          },
        },
        watch: {
          content(val){ //父级数据改动更新
            this.write_info = val
          },
          // write_info(val){
          //   console.log(val);
          //   this.$emit('input',val);
          // }
        }
    }
</script>

<style lang="less" scoped>
  .log-write-write{
    padding:8px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none;
    color: #333;
    border: 1px solid #ddd;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 0;
    background-color: transparent;
  }
  .log-write-write::placeholder{
    font-size: 16px;
    color: #999;
  }
  .log-write-write:empty:before{
    content: attr(placeholder);
    font-size: 16px;
    color:#888;
  }
  .log-write-write:focus:before{
    content:'';
    display: inline-block;
    height: 19px;
  }
</style>
