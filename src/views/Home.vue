<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div>
          <p class="clearfix">
            房屋租售信息
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">
              发信息
              <el-divider direction="vertical"></el-divider>
            </el-button>
          </p>
          <p class="clearfixP">
            <span>
              <i class="el-icon-caret-right"></i>[07-03]
            </span>
            绿城百合字母套大房子出售啦！大面积+好户型！
            <span>二手房出售</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <p class="clearfix">
            二手转让信息
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">
              发信息
              <el-divider direction="vertical"></el-divider>
            </el-button>
          </p>
          <p class="clearfixP">
            <span>
              <i class="el-icon-caret-right"></i>[07-03]
            </span> 佳能数码相机，EOS 750D，九成新
            <span>照相机</span>
          </p>
        </div>
      </el-col>
    </el-row>
    <div class="boxStyle">
      <p class="clearfix">
        商品网购
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </p>
      <ul class="clearfixUl shopping">
        <li>
          <img src="http://demo9.mayicms.com//attachment/goods/201107/pre_1309594610f5qys.jpg" alt />
          <p>lenovo 联想Y460N-IFI 14英寸笔记本电脑</p>
          <p>
            ¥
            <span>5099</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="boxStyle" style="height:14rem">
      <p class="clearfix">
        <span class="telephone" @mousemove="enter">便民电话</span>
        <span class="LifeAssistant"  @mousemove="enter1">生活助手</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </p>
      <ul class="clearfixUl LifeAssistantUI" v-if="LifeAssistant">
        <li>
         <el-button>快递查询</el-button>
        </li>
      </ul>
       <ul class="clearfixUl telephoneUI" v-if="telephone">
        <li>
         <p>装饰装修</p>
         <p>招商中</p>
        </li>
      </ul>
    </div>
     <div class="boxStyle">
      <p class="clearfix">
        友情链接
        <el-button style="float: right; padding: 3px 0" type="text">我要申请</el-button>
      </p>
      <el-row :gutter="10">
  <el-col :span="24"> <ul class="clearfixUl linksUI">
        <li>
          <img src="http://demo9.mayicms.com/attachment/links/mayicms.gif" alt />
        </li>
         <li>
          <img src="http://demo9.mayicms.com/attachment/links/baidu.gif" alt />
        </li>
      </ul></el-col>
</el-row>
       <p class="linksPspan">
       <span>MayiCMS</span>
       <span>官网分类</span>
       <span>信息程序</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      LifeAssistant: true,
      telephone: false
    }
  },
  methods: {
    enter () {
      this.telephone = true
      this.LifeAssistant = false
    },
    enter1 () {
      this.telephone = false
      this.LifeAssistant = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
.el-card {
  border-top: 1px solid red;
}
.boxStyle {
  height: 15rem;
}
.clearfix {
  font-size: 1.1em;
  font-weight: 400;
  color: #3592e2;
  background: #fafafa;
  height: 40px;
  line-height: 40px;
  padding: 5px;
  border-top: 1px solid #3592e2;
  .el-button {
    line-height: 40px;
    margin-right: 5px;
    color: black;
  }
  span {
    //    font-size: 1.1em;
    // font-weight: 400;
    // // color: #3592e2;
    cursor: pointer;
  }
}
.clearfixUl {
  li {
    width: 11%;
    float: left;
    margin-right: 1.5%;
    img {
      border: 1px solid gainsboro;
      padding: 10px 15px;
    }
    p {
      margin: 2px;
    }

    span {
      color: red;
    }
  }
}
p {
  font-size: 0.9em;
  span {
    color: gray;
    margin: 0 10px;
  }
}
.telephone:hover,.LifeAssistant:hover{
  color:#3592e2;
  font-weight: 500;
}
.telephoneUI{
 padding: 0;
li{
  width:10.5%;
  padding: 0.5%;
  margin: 0 1% 1% 0;
  height: 40px;
  background: #F0F0F0;
  font-size: 0.8em;
  }
}
.LifeAssistantUI{
  padding: 0;
li{
  width:12.5%;
  padding: 0.5%;
  margin: 0 0.5% 1% 0;
  height: 50px;
  font-size: 0.8em;
  button{
    background: white;
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
    // border-radius: none;
  }
  }
}
.linksUI{
  padding: 0;
  li{
    padding: 0;
    margin-right: 1rem;
    width: 6rem;
    img{
      padding: 0;
border:4px solid #F0F0F0;
width: 6rem;
height: 2rem;
object-fit:none;
    }
  }
}
.linksPspan{
  span{
    color: black;
    font-size: 0.8rem;
  }
  span:hover{
    color: orange;
    cursor: pointer;
  }
}
.shopping{
  p{
     font-size: 0.5rem;
  }
}
</style>
