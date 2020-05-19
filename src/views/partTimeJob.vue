<template>
  <div>
    <div class="box">
      <div>
        <p>
          <el-popover placement="right" width="700" trigger="hover" popper-class="popoverStyle">
            <h2>网站美工设计师</h2>
            <div class="boxCard">
              <div style="width:250px;float:left;">
                <p>
                  薪资待遇：
                  <span class="spanOrange">100元/天</span>
                </p>
              </div>
              <div style="width:250px;float:left;">
                <p>
                  工作地点：
                  <span>金水区</span>
                </p>
              </div>
            </div>
            <p
              class="boxCard2"
              style="float:none;"
            >任职资格：年龄16岁—30岁之间，男女不限，服从管理，有无经验均可。工作内容：协助全职人员店内的工作，点餐，清洁等工作。工作时间：每天满足6-8个小时，周末节假日均可。综合薪资：120一天，表现好有奖金工作地址...</p>
            <p class="boxCard2" style="background: #f8f8f9;">
              <span style="color:black ;">分类信息网-蚂蚁分类信息系统提醒：</span> 在签订合同之前，以各种理由收取非正规费用（押金、服装费、报名费、体检费、要求购买充值卡等）均有骗子嫌疑，请提高警惕。
            </p>
            <el-button slot="reference" class="boxName" type="text">网站美工设计师</el-button>
          </el-popover>
          <span class="fontStyle" style="margin-left:25%;">网站美工设计师</span>
          <span class="fontStyle" style="float:right;">2019-06-01</span>
          <span class="fontStyle" style="margin-left:5%;">金水区</span>
        </p>
      </div>
    </div>
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

.boxCard {
  border-top: 1px dashed #666;
  height: 60px;
  p {
    line-height: 50px;
    span {
      color: black;
      font-size: 1rem;
    }
  }
}
.boxCard2 {
  border-top: 1px dashed #666;
  height: 70px;
  padding: 2%;
}
</style>
