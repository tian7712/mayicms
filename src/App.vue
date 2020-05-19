<template>
  <!-- 路由占位符 -->
  <div class="pageStyle">
    <el-container>
      <el-header>
        <div class="header">
          <span>欢迎来到MayiCMS演示站！</span>
          <span>保存到桌面</span>
          <span>快速发信息</span>
          <span>修改/删除信息</span>
          <span>手机浏览</span>
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="10" style="height:100px;">
          <el-col :span="5">
            <img src="@/assets/logo.gif" alt />
          </el-col>
          <el-col :span="3">
            <el-popover  placement="bottom" width="200" trigger="hover" class="">
              <span style="margin-right:1%;">总站</span>
              <span>切换分站</span>
              <el-divider></el-divider>
              <div class="Switching">
                <span>北京</span>
                <span>上海</span>
                <span>天津</span>
                <span>重庆</span>
                <span>广州</span>
                <span>深圳</span>
                <span>杭州</span>
                <span>福州</span>
                <span>厦门</span>
                <span>石家庄</span>
                <span>郑州</span>
              </div>
              <el-button slot="reference" type="text">
                总站
                <i class="el-icon-arrow-down"></i>
              </el-button>
            </el-popover>
          </el-col>
          <el-col :span="11">
            <el-input>
              <!-- <i slot="prepend" icon="el-icon-search"/> -->
              <el-button slot="append" class="buttonStyle1" @click="add">搜索</el-button>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-button class="buttonStyle" style="float:right;">免费发布信息</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="ulTopStyle">
              信息分类
              <!-- <div class="ulTopicon"></div> -->
              <i class="el-icon-s-operation" style="float:right;margin:1%;"></i>
            </div>
            <!-- <ul class="ulStyle">
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                房屋租售
                <i class="el-icon-arrow-right"></i>
              </li>
            </ul> -->
          </el-col>
          <el-col  :span="20">
            <!-- :sm="10" :md="10" :lg="10" :xl="20" -->
            <div class="MessageHeader">
              <span><router-link to="/home" class="aStyle">首页</router-link></span>
              <span><router-link to="/house" class="aStyle">房屋</router-link></span>
              <span><router-link to="/vehicle" class="aStyle">车辆买卖</router-link></span>
              <span><router-link to="/lieIdle" class="aStyle">二手闲置</router-link></span>
              <span><router-link to="/recruit" class="aStyle">招聘</router-link></span>
              <span><router-link to="/partTimeJob" class="aStyle">兼职</router-link></span>
              <span><router-link to="/jobWanted" class="aStyle">求职</router-link></span>
              <span><router-link to="/friends" class="aStyle">交友</router-link></span>
              <span><router-link to="/pets" class="aStyle">宠物</router-link></span>
              <span><router-link to="/home" class="aStyle">生活</router-link></span>
              <span><router-link to="/home" class="aStyle">商务服务</router-link></span>
              <span><router-link to="/home" class="aStyle">团购资讯</router-link></span>
              <span><router-link to="/home" class="aStyle">商品</router-link></span>
              <span><router-link to="/home" class="aStyle">店铺</router-link></span>
            </div>
            <el-row>
              <el-col :span="16">
                <!-- <div class="block">
                  <el-carousel height="350px" indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </div> -->
              </el-col>
              <el-col :span="8">
                <!-- <div>
                  <el-tabs v-model="activeName">
                    <el-tab-pane label="首页置顶" name="first">
                      <div>1</div>
                    </el-tab-pane>
                    <el-tab-pane label="热点资讯" name="second">
                      <div>
                        <p>简历控遇到的最特别的求职理由 [11-06]</p>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="网站公告" name="third">
                      <div>2</div>
                    </el-tab-pane>
                    <el-divider></el-divider>
                    <el-button class="buttonStyle">免费发布信息</el-button>
                    <el-button class="buttonStyle1">免费开通店铺</el-button>
                  </el-tabs>
                </div> -->
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <router-view style="margin-top:1rem;"></router-view>
      </el-main>
      <el-footer>
        <div class="footer_new">
          <div class="foot_new">
            <div class="foot_box">
              <p>信息管理</p>
              <div class="bd">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo9.mayicms.com/mayi-post.php?cityid=115"
                    >免费发布信息</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo9.mayicms.com/delinfo.php?cityid=115"
                      rel="nofollow"
                    >修改/删除信息</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo9.mayicms.com/search.php?cityid=115"
                      rel="nofollow"
                    >信息快速搜索</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="foot_box" id="sjfw" style="display:none;">
              <p>商家服务</p>
              <div class="bd">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo9.mayicms.com/mayi-member.php?mod=register&amp;action=store&amp;cityid=115"
                    >商家入驻</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo9.mayicms.com/mayi-member.php?cityid=115"
                    >商家登录</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="foot_box">
              <p>关于我们</p>
              <div class="bd">
                <ul>
                  <li>
                    <a
                      href="http://demo2.mayicms.com/aboutus-id-1.html"
                      style="color:"
                      target="_blank"
                    >
                      网站简介
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://demo2.mayicms.com/aboutus-id-2.html"
                      style="color:"
                      target="_blank"
                    >
                      广告服务
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://demo2.mayicms.com/aboutus-id-3.html"
                      style="color:"
                      target="_blank"
                    >
                      联系我们
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a href="http://demo2.mayicms.com/faq.html" style="color:" target="_blank">
                      网站帮助
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://demo2.mayicms.com/friendlink.html"
                      style="color:"
                      target="_blank"
                    >
                      友情链接
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a href="http://demo2.mayicms.com/announce.html" style="color:" target="_blank">
                      网站公告
                      <sup class></sup>
                    </a>
                  </li>
                  <li>
                    <a href="http://demo2.mayicms.com/sitemap.html" style="color:" target="_blank">
                      网站地图
                      <sup class></sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="foot_wx">
              <p>扫一扫，访问手机站</p>
              <div class="bd">
                <ul>
                  <img
                    alt="分类信息网手机版"
                    src="http://demo9.mayicms.com/qrcode.php?value=http://demo9.mayicms.com/m/index.php&amp;size=4.7"
                  />
                </ul>
              </div>
            </div>
            <div class="foot_wx">
              <p>关注微信公众号</p>
              <div class="bd">
                <ul>
                  <img alt="分类信息网微信公众号" src="http://demo9.mayicms.com/erweima.gif" />
                </ul>
              </div>
            </div>
            <div class="foot_mobile">
              <ul>
                <svg t="1589772337712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8812" width="50" height="50"><path d="M511.321036 255.010975c-5.773494 0-11.395538 0.533143-17.08512 0.868787l0 103.349833c5.722328-0.515746 11.228739-1.718131 17.08512-1.718131 103.784738 0 187.91688 84.131119 187.91688 187.918927 0 17.884322-3.302209 34.852786-7.974625 51.249221l105.687064 0c2.971681-16.665565 4.789073-33.732266 4.789073-51.249221C801.740452 385.039423 671.709957 255.010975 511.321036 255.010975zM511.321036 50.008974c-5.773494 0-11.362792 0.666172-17.08512 0.867764l0 102.501512c5.706979-0.249687 11.31265-0.867764 17.08512-0.867764 216.996173 0 392.918881 175.906336 392.918881 392.919904 0 17.417695-1.51654 34.435277-3.719718 51.250244l103.569844 0c1.733481-16.848737 2.653433-33.95023 2.653433-51.250244C1006.742453 271.810592 784.938788 50.008974 511.321036 50.008974zM691.446463 747.530294c-56.890708-21.75549-110.774943-49.748031-173.238576 8.559956-38.553061 35.985586-66.429968 32.047904-91.638093 18.648732C401.378042 761.342882 246.174214 602.889033 224.985636 551.053458c-21.186532-51.835575-9.741875-58.84113 0-74.55502 9.728572-15.734356 77.310783-52.436256 36.652781-167.765935-40.672328-115.331725-72.604598-202.183815-238.250242 0-17.183358 20.969591 0 111.843274 0 111.843274s116.799146 381.794519 513.13894 540.566616C598.054423 985.78463 737.008148 946.760848 793.097608 849.298096 820.590775 801.534256 780.717649 781.664719 691.446463 747.530294z" p-id="8813" fill="#FF9900"></path></svg>
                <div class="mobileh1">
                  <h1>0371-65366238</h1>
                </div>
                <div class="mobileh2">
                  客服QQ：
                  <font>
                    <a
                      class="_chat"
                      href="http://wpa.qq.com/msgrd?v=3&amp;uin=1367882925&amp;site=qq&amp;menu=yes"
                      rel="nofollow"
                    >1367882925</a>
                  </font>
                </div>
                <div class="mobileh3">
                  微信号：
                  <font>kefu-000000</font>
                </div>
                <div class="mobileh3">
                  邮箱：
                  <font>mayicms@qq.com</font>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="foot_powered">
          Copyright © 分类信息网版权所有
          <a href="http://www.beian.miit.gov.cn" rel="nofollow"></a>
          <font id="foots">
            Powered by
            <a class="copyrights" href="https://www.mayicms.com" target="_blank">MayiCMS</a>
          </font>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    add () {
      this.$router.push({ path: '/about' })
    },
    house () {
      this.$router.push({ path: '/house' })
    },
    vehicle () {
      this.$router.push({ path: '/vehicle' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
* {
  font-family: '微软雅黑';
}
.header,
.el-main,
.foot_new {
  margin: 0 15%;
  .el-input {
    border: 3px solid #2283d4;
    border-right:none ;
    // border-right: none;
  }
}
.el-header {
  background-color: #f8f8f8;
  span {
    color: #666666;
    font-size: 0.9em;
    padding: 0 5px;
    border-right: 1px solid gainsboro;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
// .cardDisplay,
// .el-card {
//   display: none;
// }
// .dropdownlink:hover .cardDisplay {
//   display: block;
// }
.ulTopStyle {
  width: 200px;
  background: #3592e2;
  color: white;
  border: 1px solid #3592e2;
  padding: 10px;
  cursor: pointer;
}
// .ulTopicon{
//   float: left;
//   background: url(./assets/cat_select.gif) center right no-repeat;
// }
.ulStyle {
  width: 200px;
  border: 1px solid #3592e2;
  height: 350px;
  margin: 0;
  padding: 10px;
  li {
    list-style-type: none;
    font-size: 14px;
    border-bottom: 1px solid #cedbe6;
    padding: 5px;
    margin: 5px;
  }
  li:last-child {
    border-bottom: none;
  }
}
.MessageHeader {
margin-left:1% ;
  border-bottom: 3px solid #3592e2;
  padding-bottom: 20px;
  width: 65rem;
  height: 20px;
  span {
    // width: 50px;
    line-height: 30px;
    padding: 2px 1rem;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }
}

.el-tabs {
  height: 350px;
}
.el-footer {
  padding: 0;
  margin: 0;
}
.footer_new {
  background: #f0f0f0;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 300px;
}
.foot_new {
  padding: 2% 0;
  .foot_wx,
  .foot_box {
    float: left;
    border-right: 1px solid #dddddd;
    ul,
    p {
      text-align: left;
      padding-left: 1rem;
    }
  }
  .foot_box {
    width: 15%;
    a {
      font-size: 0.9rem;
    }
  }
  .foot_wx {
    width: 20%;
  }
  .foot_mobile {
    text-align: center;
    .mobileh2,.mobileh3{
      color: #666;
            font-size: 0.95rem;
    }
  }
  p {
    text-align: center;
  }
}
.foot_powered{
  text-align: center;
  margin: 1% 0;
  font-size: 0.75rem;
  color: #666;
  .copyrights{
    color: #3592e2;
    font-weight: bold;
    font-size: 0.6em;
  }
}
.Switching{
  span{
    margin-right: 0.5rem;
    font-size:0.6rem;
  }
}
.pageStyle{
  min-width: 1800px;
}
</style>
