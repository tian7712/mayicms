<template>
  <div>
    <div class="box box-ding">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/images/nophoto.gif"
      />
      <div>
        <p>
          <router-link to="/lieIdlePage" class="aStyle">佳能数码相机，EOS 750D，九成新</router-link>
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>配置如下：17寸纯平显示器（LG特丽龙管，效果特好）处理器：奔腾2.66G（主频）内存：1G硬盘：80GB（新一代串口高速硬盘）主板：技嘉945光驱：DVD刻录光驱。</p>
        <span class="tagStyle3">郑东新区</span>
      </div>
    </div>
    <div class="box">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/attachment/information/201105/pre_1305828520kqfdm.jpg"
      />
      <div>
        <p>
          <router-link to="/lieIdlePage" class="aStyle">(转让)卖MINI双核小电脑主机一台</router-link>
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>卖双核MINI小主机一台绝对自己用的电脑，58卖两件东西就是商家，一AMD7750CPU单主频2.7G带L32M二主板带HDMI高清电视接口，DVIVGA接口声卡网卡全三1G金士</p>
        <span class="tagStyle3">郑东新区</span>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
.box {
  border-top: 1px solid #dedede;
  height: 130px;
  .el-image {
    float: left;
    margin: 1%;
  }
  p:nth-child(1) {
    font-size: 1.1rem;
    color: #000;
  }
  p:nth-child(2) {
    font-size: 0.7rem;
    overflow: hidden;
    color: #666;
  }
}
.box:nth-last-child(1) {
  border-bottom: 1px solid #dedede;
}
.box:hover {
  background: #f8f8f9;
}
.box-ding{
  background: url('../assets/ding.gif') no-repeat right bottom #fffae7;
}
.box-ding{
  background: url('../assets/ding.gif') no-repeat right bottom #fffae7 !important;
}
</style>
