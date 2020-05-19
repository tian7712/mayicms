<template>
  <div>
    <div class="box box-ding">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/attachment/information/201105/pre_1306336220ehmjd.jpg"
      />
      <div>
        <p>
          自家纯种比熊,出售两个月特可爱的比熊宝宝
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>自己养的纯种比熊，很可爱，现在生下4公2母，已经抱走一公一母，保证健康纯种，驱虫已做，宝宝特别可爱，可以视频，也可以电话联系来家里看狗狗</p>
        <span class="tagStyle3">郑东新区</span>
      </div>
    </div>
       <div class="box">
      <el-image
        style="width: 120px; height: 100px"
        src="http://demo9.mayicms.com/attachment/information/201105/pre_1306336220ehmjd.jpg"
      />
      <div>
        <p>
          自家纯种比熊,出售两个月特可爱的比熊宝宝
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
        </p>
        <p>自己养的纯种比熊，很可爱，现在生下4公2母，已经抱走一公一母，保证健康纯种，驱虫已做，宝宝特别可爱，可以视频，也可以电话联系来家里看狗狗</p>
        <span class="tagStyle3">金水区</span>
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
