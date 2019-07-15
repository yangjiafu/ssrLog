<template>
    <div class="select-box">
      <select v-model="select_box.selected" required>
        <option v-for="item in select_box.list" :value="item.value" :key="item.value">{{item.name}}</option>
      </select>
    </div>
</template>

<script>
  /** 选择框组件 */
    export default {
      name: "selects",
      data() {
        return {
          select_box:{
            selected: '1',
            list:[
              {value:1,name:'1'},
              {value:2,name:'2'},
              {value:3,name:'3'},
              {value:4,name:'4'},
              {value:5,name:'5'},
              {value:6,name:'6'},
              {value:7,name:'7'},
            ]
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .select-box{
    width: 100%;
    height: 100%;
    max-width: 70px;
    border: none;
    background: #F4F4F4;
    border-radius: 10px;
    display: inline-block;
    padding: 10px 0;
    text-align: left;
    select{
      width: 90%;
      height: 100%;
      font-size: 16px;
      padding-left: 20px;
      border: none;
      outline: none;
      appearance: none;
      background: url("../../static/bg/down.png")no-repeat scroll right center transparent;

    }
    select:extend{
      border: none ;
    }
  }
</style>
