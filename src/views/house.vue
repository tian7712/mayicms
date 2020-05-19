<template>
  <div>
      <div class="box">
          <p><el-tag size="mini" class="buttonStyle2">置顶</el-tag><el-tag size="mini" class="buttonStyle3">图</el-tag><span>(出售)</span>郑飞小区 04年</p>
          <div class="boxDetails">二七二七周边郑飞小区2室1厅1卫71平米价格：40.8万元地理位置优越环境好户型好双气价格低房子新啊 [详情]</div>
           <span class="tagStyle1">认证</span>
          <div  class="residential">2016-11-02 <span>金水区</span> </div>
      </div>
       <div class="box box2">
          <p><el-tag size="mini" class="buttonStyle3">图</el-tag><span>(出售)</span>郑飞小区 04年</p>
          <div class="boxDetails">二七二七周边郑飞小区2室1厅1卫71平米价格：40.8万元地理位置优越环境好户型好双气价格低房子新啊 [详情]</div>
           <span class="tagStyle2">担保</span>
          <div  class="residential">2016-11-02 <span>金水区</span> </div>
      </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/reset.less';
.box{
    border: 1px solid #FFC66F;
    background: #FFF5DF;
    width: 17%;
    height: 15rem;
    padding:0 1%;
    font-size: 0.9rem;
    position: relative;
    float: left;
    margin: 0.1rem;
    p{
        background: #FFD67A;
        height: 30px;
        line-height: 30px;
        border-radius:4px ;
        cursor: pointer;
    }
}
.boxDetails{
        height: 8rem;
    }
.residential{
        // height: 50px;
        width: 90%;
        margin: 1% 0;
        span{
            float: right;
        }
        position: absolute;
        bottom: 0;
    }
.box2{
    border: 1px solid #A7E9A7;
    background: #F2FBF2;
    p{
        background: #A7E9A7;
    }
}
</style>
