<template>
  <div>
    <div class="box">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/images/nophoto.gif"
      />
      <div>
        <p>
         中央直属“央务鹊桥”成就美好姻缘北京单身交友俱乐部
          <el-tag size="mini" class="buttonStyle3">推荐</el-tag>
          <el-tag size="mini" class="buttonStyle2">认证</el-tag>
          <span style="float:right;" class="fontStyle">2019-06-01</span>
        </p>
        <p>携手中央直属“央务鹊桥”成就美好姻缘北京高端交友见面会...“央务鹊桥”网站是由中央国家机关工会联合会、公安部机关服务局、公安部直属机关工会联合主办的，主</p>
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
// .box-ding{
//   background: url('../assets/ding.gif') no-repeat right bottom #fffae7;
// }
// .box-ding{
//   background: url('../assets/ding.gif') no-repeat right bottom #fffae7 !important;
// }
</style>
