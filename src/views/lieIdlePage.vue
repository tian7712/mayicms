<template>
  <div>
    <el-card shadow="never" class="spanBack">
      <div class="spanStyle">
        <h1>(转让)卖MINI双核小电脑主机一台</h1>
        <span style="float:right;">
          举报
          <el-divider direction="vertical"></el-divider>收藏
          <el-divider direction="vertical"></el-divider>修改
          <el-divider direction="vertical"></el-divider>删除
          <font style="color:red;">
            <el-divider direction="vertical"></el-divider>置顶
          </font>
        </span>
      </div>
      <p class="spanStyle">
        分享
        <el-divider direction="vertical"></el-divider>
        <span>2019-07-02发布</span>
        <span>5次浏览</span>
        <span>信息编号：1963556</span>
      </p>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="never">
            <img
              src="http://demo9.mayicms.com/attachment/information/201105/pre_1305828520kqfdm.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <div class="bottom">
                <el-button type="text" icon="el-icon-arrow-left" style="float:left;"></el-button>
                <div class="clearfix">
                  <el-tooltip
                    class="item"
                    effect="light"
                    content="丰田 普拉多 2019款 2.7L 自动标准版"
                    placement="bottom-start"
                  >
                    <el-image
                      style="width: 5rem; height: 4rem"
                      src="http://demo9.mayicms.com/attachment/information/201105/pre_1305828520kqfdm.jpg"
                    />
                  </el-tooltip>
                </div>
                <el-button type="text">
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="18">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="轿车品牌：">丰田</el-form-item>
            <el-form-item label="上牌年份：">2019年</el-form-item>
            <el-form-item label="行驶里程：">7万公里</el-form-item>
            <el-form-item label="价格：" style="color:red;">45万元</el-form-item>
            <el-form-item label="新旧程度:">7万公里</el-form-item>
            <el-form-item label="来源：">7万公里</el-form-item>
            <el-form-item label="地址：">7万公里</el-form-item>
            <el-form-item label="联系人：">张先生</el-form-item>
            <el-form-item label="电话：" style="color:red;">
              1863811
              <button class="buttonStyleRed">点击查看完整号码</button>
            </el-form-item>
            <!-- <el-form-item></el-form-item> -->
            <p class="pstyle"> <isty class=" iStyle"><i class="el-icon-warning-outline"></i></isty> 分类信息网-蚂蚁分类信息系统提醒您：让你提前汇款，或者价格明显低于市价，均有骗子嫌疑，不要轻易相信。</p>
          </el-form>
        </el-col>
      </el-row>
      <h3>信息详情</h3>
      <el-divider></el-divider>
      <p>车辆颜色: 白色外观 | 浅色内饰</p>
      <p>车辆颜色: 白色外观 | 浅色内饰</p>
      <p>车辆颜色: 白色外观 | 浅色内饰</p>
      <!-- <el-divider style="margin-bottom: 0px !important;"></el-divider> -->
      <div class="Comments">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="评论内容：">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="登录账号" style="float:left;">
                <el-input v-model="form.desc" style></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="密码">
                <el-input v-model="form.desc"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <div class="register"> 注册账号 <i class="el-icon-d-arrow-right"></i></div>
            </el-col>
          </el-row>
 <el-form-item label="验证码">
                <el-input v-model="form.desc"></el-input>
              </el-form-item>
          <el-form-item>
            <el-button type="primary">提交评论</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
.box {
  border: 1px solid #ffc66f;
  background: #fff5df;
  width: 17%;
  height: 15rem;
  padding: 0 1%;
  font-size: 0.9rem;
  position: relative;
  float: left;
  margin: 0.1rem;
  p {
    background: #ffd67a;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    cursor: pointer;
  }
}
.boxDetails {
  height: 8rem;
}
.residential {
  // height: 50px;
  width: 90%;
  margin: 1% 0;
  span {
    float: right;
  }
  position: absolute;
  bottom: 0;
}
.box2 {
  border: 1px solid #a7e9a7;
  background: #f2fbf2;
  p {
    background: #a7e9a7;
  }
}
.spanBack{
     background: url('../assets/dl_zhiding.gif') no-repeat right bottom;
    //  background-size: 100%;
     background-position-y: 1%;
}
.spanStyle {
  span {
    color: #666;
    font-size: 0.9rem;
  }
}
//.zj
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  width: 100%;
  height: 4rem;
  .el-button {
    margin: 5% 0;
  }
}
.clearfix {
  overflow: hidden;
  width: 80%;
  height: 4rem;
  float: left;
  .el-image {
    padding: 0 0.2rem;
  }
}
.button {
  padding: 0;
  // float: right;
}

.image {
  width: 90%;
  display: block;
  margin: 5%;
}
.Comments {
  // height: 5rem;
  padding: 1rem;
  background: #f8f8f8;
  border-top: 1px solid #dddddd;
}
.register{
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.9rem;
}
.register:hover{
color: red;
}
.pstyle{
  // font-size: 2rem;
   padding: 1rem;
  background: #f8f8f8;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
