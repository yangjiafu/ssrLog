<template>
    <div class="select-box">
      <select v-model="select_box.selected" :required ='required' :style="{backgroundImage: select_box.backgroundImage}">
        <option v-for="(item,index) in dataList" :value="item.id" :key="item.id" v-if="item.id <= maxFraction">{{item.name}}</option>
      </select>
    </div>
</template>

<script>
  /** 选择框组件 */
    export default {
      name: "selects",
      props:{
        dataList:{type:Array}, //数据列表name，id
        maxFraction:{type: Number,default:10}, //分数最大值
        required:{type:Boolean,default:true}, //是否可选
        bg_color:{
          type:String,default:'blue'
        }
      },
      data() {
        return {
          select_box:{
            selected: this.maxFraction?this.maxFraction:1,
            backgroundImage:"url(" +(this.bg_color ==='blue' ? require('../../static/bg/down_blue.png'): require('../../static/bg/down.png'))+")",
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
      },
      watch:{
        'select_box.selected' (val){
          this.$emit('input',val)
        }
      }
    }
</script>

<style lang="less" scoped>
  .select-box{
    width: 100%;
    height: 100%;
    max-width: 65px;
    min-width: 60px;
    min-height: 30px;
    border: none;
    background: #F4F4F4;
    border-radius: 10px;
    display: inline-block;
    text-align: left;
    select{
      width: 60%;
      height: 100%;
      font-size: 16px;
      margin:0 20%;
      padding: 5px 0;
      border: none;
      outline: none;
      appearance: none;
      /*background: url("../../static/bg/down.png") no-repeat scroll right center transparent;*/
      /*background-image: url("../../static/bg/down.png");*/
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: right;
      box-sizing: border-box;
    }
    select:extend{
      border: none ;
    }
  }
</style>
