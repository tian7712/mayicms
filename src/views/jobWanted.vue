<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="求职位" width="250" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" width="700" trigger="hover">
            <h2>{{scope.row.name}} <el-button class="buttonStyle" style="float:right;">查看详情</el-button> </h2>
            <p>发布时间：2019-06-01</p>
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
              class="boxCard3"
              style="float:none;"
            >自我描述：</p>
            <p
            >年龄16岁—30岁之间，男女不限，服从管理，有无经验均可。工作内容：协助全职人员店内的工作，点餐，清洁等工作。工作时间：每天满足6-8个小时，周末节假日均可。综合薪资：120一天，表现好有奖金工作地址...</p>
            <el-button slot="reference" class="boxName" type="text">
              张经理（普通劳务工人）
              <el-tag size="mini" class="buttonStyle3">1图</el-tag>
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="是否应届" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="性别" align="center"></el-table-column>
      <el-table-column prop="date" label="年龄" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="工作年限" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="学历" align="center"></el-table-column>
      <el-table-column prop="address" label="发布时间" align="center"></el-table-column>
    </el-table>
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
  .boxNum {
    color: #eb6d13;
  }
  p {
    margin: 0;
    padding: 0;
  }
}
.boxName {
    // width: 10%;
    color: black;
    font-size: 1rem;
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
.boxCard3 {
  border-top: 1px dashed #666;
  height: 10px;
  padding: 1% 0;
}
// .jobWantedP{
//     span{
//         width: 10%;
//     }
// }
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2',
          name: '张经理',
          address: '1'
        }
      ]
    }
  }
}
</script>
