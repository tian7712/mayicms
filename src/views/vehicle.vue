<template>
  <div>
    <div class="box">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/attachment/information/201907/pre_1562054421q3fb6.jpg"
      />
      <div>
        <p>
         <router-link to="/jiaoche" class="aStyle"> 丰田 普拉多 2019款 2.7L 自动标准版</router-link>
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>车辆颜色:白色外观|浅色内饰用途性质:非营运七座(含七)以下车辆小型车车辆证件:车船税、登记证、购置税车辆概况：[首付低利率低提车快]该车无火烧泡水痕迹。适合</p>
        <span class="tagStyle3">郑东新区</span>
      </div>
    </div>
       <div class="box">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/attachment/information/201907/pre_1562054421q3fb6.jpg"
      />
      <div>
        <p>
        <router-link to="/jiaoche" class="aStyle"> 丰田 普拉多 2019款 2.7L 自动标准版</router-link>
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>车辆颜色:白色外观|浅色内饰用途性质:非营运七座(含七)以下车辆小型车车辆证件:车船税、登记证、购置税车辆概况：[首付低利率低提车快]该车无火烧泡水痕迹。适合</p>
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
</style>
