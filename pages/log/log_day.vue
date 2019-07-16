<template>
    <div class="log-box">
      <div class="log-box-title-info">
        基本信息：许可 <span class="log-box-title-isparate">|</span> 技术部 <span class="log-box-title-isparate">|</span> 设计师
      </div>
      <div class="log-write-box">
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">工作状态：</div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写工作状态'  v-model="info_box.status"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">体验：</div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写工作体验'  v-model="info_box.experience"></Inputs>
        </div>
      </div>
      <!--大标题-->

      <div class="log-write-box">
        <div class="log-title">
          目标计划&nbsp;权重15%
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">重要紧急：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="10" :required="true" v-model="info_box.plan_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写重要紧急事情'  v-model="info_box.things"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">重要不紧急：</div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写重要紧急事情'  v-model="info_box.important_not_crash"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">紧急不重要：</div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写事情'  v-model="info_box.important_not_crash"></Inputs>
        </div>
      </div>

      <div class="log-write-box">
        <div class="log-title">
          资源环境&nbsp;权重10%
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">学习&nbsp;权重5%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="5" :required="true" v-model="info_box.learn_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.learn"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">创造协作&nbsp;权重5%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="5" :required="true" v-model="info_box.create_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.create"></Inputs>
        </div>
      </div>

      <div class="log-write-box">
        <div class="log-title">
          职责担当&nbsp;权重28%
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">负责 &nbsp;权重9%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="9" :required="true" v-model="info_box.duty_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.duty"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">承担 &nbsp;权重7%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="7" :required="true" v-model="info_box.bear_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.bear"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">主动 &nbsp;权重6%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="6" :required="true" v-model="info_box.initiative_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.initiative"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">沟通 &nbsp;权重6%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="6" :required="true" v-model="info_box.communication"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.communication"></Inputs>
        </div>
      </div>

      <div class="log-write-box">
        <div class="log-title">
          备案核准 &nbsp;权重16%
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">备案 &nbsp;权重8%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="8" :required="true" v-model="info_box.filing_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.filing"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">核准 &nbsp;权重8%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="8" :required="true" v-model="info_box.approved_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.approved"></Inputs>
        </div>
      </div>

      <div class="log-write-box">
        <div class="log-title">
          结汇 &nbsp;权重22%
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">总结 &nbsp;权重3%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="3" :required="true" v-model="info_box.summary_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.summary"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">遗留 &nbsp;权重3%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="3" :required="true" v-model="info_box.legacy_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.legacy"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">汇报 &nbsp;权重3%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="3" :required="true" v-model="info_box.report_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.report"></Inputs>
        </div>
        <div class="log-write-titleBox">
          <div class="log-write-tBtitle">问责 &nbsp;权重3%：</div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="3" :required="true" v-model="info_box.ask_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.ask"></Inputs>
        </div>
      </div>


      <div class="log-write-box">
        <div class="log-title">
          个人成长&nbsp;权重4%
        </div>
        <div class="log-write-titleBox">
          <!--<div class="log-write-tBtitle">总结 &nbsp;权重3%：</div>-->
          <div></div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="4" :required="true" v-model="info_box.up_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.up"></Inputs>
        </div>
      </div>

      <div class="log-write-box">
        <div class="log-title">
          教练&nbsp;权重5%
        </div>
        <div class="log-write-titleBox">
          <!--<div class="log-write-tBtitle">总结 &nbsp;权重3%：</div>-->
          <div></div>
          <div class="log-write-tBselect">自评分：
            <Select :dataList="page_prams.fraction"  :maxFraction="5" :required="true" v-model="info_box.teach_fraction"></Select>
          </div>
        </div>
        <div class="log-write-info">
          <Inputs :disabled="true" placeholder = '请填写真实信息'  v-model="info_box.teach"></Inputs>
        </div>
      </div>
      <div class="log-flex-around margin-top-xxxl ">
        <div class="log-commit-btn">保存</div>
        <div class="log-commit-btn" @click="commit_data">提交信息</div>
      </div>
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
            page_prams:{
              fraction:[
                {name:0,id:0},
                {name:1,id:1},
                {name:2,id:2},
                {name:3,id:3},
                {name:4,id:4},
                {name:5,id:5},
                {name:6,id:6},
                {name:7,id:7},
                {name:8,id:8},
                {name:9,id:9},
                {name:10,id:10},
              ]
            },
            info_box:{
              things:'',
              status: '', //状态
              experience: '',//体验
              crash: '', //紧急
              plan_fraction: 10, //目标计划分
              important_not_crash: '',//重要不紧急
              crash_not_important: '', //紧急不重要
              learn_fraction: 10, //学习分
              create_fraction: 10, //创造分
              learn: '', //学习
              create: '', //创造写作
              duty_fraction: 10, //负责分
              duty: '', //负责
              bear_fraction: 10, //承担分
              bear: '', //承担
              initiative_fraction: 10, //主动分
              initiative: '',
              communication_fraction:10, //沟通分
              communication: '',
              filing_fraction:10, //备案
              filing: '',
              approved_fraction:10, //核准
              approved: '',
              summary_fraction: 10,//总结
              summary: '',
              legacy_fraction:10, //遗留
              legacy: '', //
              report_fraction: 10,//汇报
              report: '',
              ask_fraction: 10, //问责
              ask: '',
              up_fraction: 10, //成长
              up:'',
              teach_fraction: 10, //教练
              teach: ''
            }
          }
        },
        created(){
          // this.commit_data()
        },
        methods:{
          commit_data(){
            this.$axios.get('home/cat_version',{_token:11213123424}).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          },
          write_info_change(e){
            // console.log(e);
            // if (e.length>9){
            //   this.$refs.textarea.style.height = '80px'
            // }
            // console.log(e);
            // e.target.style.height = e.target.scrollHeight + 'px'
          }
        }
    }
</script>

<style lang="less" scoped>
   /* @global_color:#EB6133; */
  @global_color:#2C95FF;
  @global_start_color:#01BDFF;
   @global_end_color:#2493FF;

  .margin-top-xxxl{
    margin-top: 40px;
  }
  .margin-bottom-xl{
    margin-bottom: 20px;
  }
  .log-box{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #E9EFF2;
    padding-bottom: 40px;
    .log-box-title-info{
      color: #444;
      font-weight: 600;
      height: 60px;
      font-size: 16px;
      line-height: 60px;
      .log-box-title-isparate{
        display: inline-block;
        color: #b9b9b9;
        margin: 0 5px;
      }
    }
  /*输入框样式 */
    .log-write-box{
      min-height: 60px;
      font-size: 16px;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;

      .log-write-titleBox{
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 14px;
        align-items: center;
        .log-write-tBtitle{
          width:140px;
          color: #444;
        }
        .log-write-tBselect{
          flex: 1;
          text-align: right;
        }
      }

      .log-writebox-title{
        color: #444;
      }
      .log-writebox-gtitle{
        color: #ddd;
      }
      .log-write-info{
        color: #7f828b;
        margin-top: 10px;
        margin-bottom: 10px;
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
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: @global_color;
    position: relative;
  }
  .log-title:before{
    position: absolute;
    content: '';
    left: 0;
    top: 10px;
    width: 5px;
    height: 20px;
    background-color: @global_color;
  }
  .log-flex-around{
    display: flex;
    justify-content: space-around;
  }
  .log-commit-btn {
    /*flex: 1;*/
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    width: 35%;
    min-width: 120px;
    font-size: 16px;
    vertical-align: middle;
    color: #fff;
    text-align: center;
    background: linear-gradient(to bottom,@global_start_color, @global_end_color);
  }

</style>
