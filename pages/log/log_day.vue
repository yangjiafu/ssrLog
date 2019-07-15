<template>
    <div class="log-box">
      <!--大标题-->
      <div class="log-title">
        目标计划
      </div>
      <div class="log-write-box">
        <!--头部标题-->
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">重要紧急：</div>
          <div class="log-write-tBselect">自评分： <Select></Select></div>
        </div>
        <!--输入框-->
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写重要紧急事情' :content="info_box.things"></Inputs>
          {{info_box.things}}
          <!--<div class="log-write-write" contenteditable="true" placeholder="请填写重要紧急事情" style="-webkit-user-select:text">{{info_box.things}}</div>-->
        </div>
      </div>
        <div  contenteditable="true" placeholder="请填写" style="-webkit-user-select:text"><br />阿斯顿发送到</div>
    </div>
</template>

<script>
  import Select from '@/components/select/select'
  import Inputs from '@/components/input/inputs'
  /** 日报 */
    export default {
        name: "log_day",
        components:{
          Select,Inputs
        },
        data(){
          return {
            info_box:{
              things:'123'
            }
          }
        },
        methods:{
          write_info_change(e){
            // console.log(e);
            // if (e.length>9){
            //   this.$refs.textarea.style.height = '80px'
            // }
            console.log(e);
            e.target.style.height = e.target.scrollHeight + 'px'
          }
        }
    }
</script>

<style lang="less" scoped>
  .log-box{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
  /*输入框样式 */
    .log-write-box{
      min-height: 60px;
      font-size: 16px;
      width: 100%;
      .log-write-titleBox{
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 14px;
        align-items: center;
        .log-write-tBtitle{
          width: 200px;
        }
        .log-write-tBselect{
          flex: 1;
          text-align: right;
        }
      }

      .log-writebox-title{
        color: #333;
      }
      .log-writebox-gtitle{
        color: #ddd;
      }
      .log-write-info{
        color: #7f828b;
        margin-top: 10px;

        input{
          padding:0 20px;
          width: 100%;
          height: 100%;
          outline: none;
          -webkit-appearance: none;
          border-radius: 0;
          border: none;
          background-color: transparent;
        }
        input::placeholder{
          font-size: 16px;
          color: #aaa;
        }
      }
      .log-write-select{
        width: 100px;
        height: 30px;
        background-color: #F4F4F4;
        border-radius: 10px;
      }
    }
    .log-write-box:last-child{
      border-bottom: none;
    }
  }
  /*标题样式*/
  .log-title{
    width: 100%;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: #EB6133;
    position: relative;
  }
  .log-title:before{
    position: absolute;
    content: '';
    left: 0;
    top: 10px;
    width: 5px;
    height: 20px;
    background-color: #EB6133;
  }

</style>
