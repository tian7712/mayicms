<template>
  <div>
    <div class="box">
      <div>
        <p>
          <!-- <span class="boxName">华夏良子聘SPA技术人员</span> -->
          <el-popover placement="right" width="700" trigger="hover" popper-class="popoverStyle" s>
            <h2>北京华夏良子科技有限公司</h2>
            <div class="boxCard">
            <div style="width:250px;float:left;">
              <p>
                薪资待遇：
                <span class="spanOrange">6000~8000元</span>
              </p>
              <p>
                工作经验：
                <span>2年</span>
              </p>
              <p>
                招聘职位：
                <span>促销员</span>
              </p>
              <span class="tagStyleGary">五险一金</span>
            </div>
             <div style="width:250px;float:left;">
              <p>
                工作地点：
                <span>金水区</span>
              </p>
              <p>
                学历要求：
                <span>本科</span>
              </p>
              <p>
                公司性质：
                <span>私营</span>
              </p>
            </div>
            </div>
            <p class="boxCard2" style="float:none;">SPA技术人员：SPA是公司保健系列的代表项目，其运用了天然火山能量石理疗的温热效应、石补效应、德国进口苏普菲尔高级精油的养生效应、配合特有的音乐疗法及独特的推拿技法，有效调整人体内分泌，补充滋养虚损的经络...</p>
            <p class="boxCard2" style="background: #f8f8f9;">分类信息网-蚂蚁分类信息系统提醒： 在签订合同之前，以各种理由收取非正规费用（押金、服装费、报名费、体检费、要求购买充值卡等）均有骗子嫌疑，请提高警惕。</p>
            <el-button slot="reference" class="boxName" type="text">华夏良子聘SPA技术人员</el-button>
          </el-popover>
          <el-tag size="mini" class="buttonStyle3">1图</el-tag>
          <span class="fontStyle">北京华夏良子科技有限公司</span>
          <span class="boxNum">6000~8000</span>
          <span class="fontStyle" style="float:right;">2019-06-01</span>
          <span class="fontStyle" style="float:right;">金水区</span>
        </p>
      </div>
    </div>
 <!-- <svg-icon iconClass="phone"/>
 <i class="phone"></i> -->
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
.box {
  border: 1px solid #dedede;
  height: 6rem;
  line-height: 6rem;
  padding: 0 1%;
  .boxName {
    width: 20%;
    color: black;
    font-size: 1rem;
  }
  .boxNum {
    color: #eb6d13;
  }
  p {
    margin: 0;
    padding: 0;
  }
}
.box:hover {
  background: #f8f8f9;
}

.boxCard{
    border-top:1px dashed #666;
    height: 140px;
    p{
    span{
        color: black;
        font-size: 1rem;
    }
    }

}
.boxCard2{
    border-top:1px dashed #666;
    height: 70px;
    padding:2%;
}
.popoverStyle,.el-popover{
    padding:2% ;
    border: 1px solid red !important;
    color: red;
}
</style>
