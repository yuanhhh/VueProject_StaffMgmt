<template>
  <el-container class="main">
  <el-header height="100px" class="header">
         <div>
             <div>
               <h1 align="center" style="font-family: '楷体';
		       font-size: 40px;">企业员工管理系统 
               </h1>
               <div @click="logout()"><i class="iconfont 退出">&#xe659;</i> </div>     
             </div>
        </div>
  </el-header>
  <el-container>
    <el-aside class="aside" width="200px">
    <el-col :span="24">
    <el-menu router
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
       <el-menu-item index="/info">
        <i class="el-icon-menu"></i>
        <span slot="title">员工信息管理</span>
      </el-menu-item>
      <el-menu-item index="/salary">
        <i class="el-icon-menu"></i>
        <span slot="title">薪资绩效管理</span>
      </el-menu-item>
      <el-menu-item index="/leave">
        <i class="el-icon-document"></i>
        <span slot="title">请假管理</span>
      </el-menu-item>
      <el-menu-item index="/recruit">
        <i class="el-icon-setting"></i>
        <span slot="title">招聘管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-container>
      <el-main>
           <div>
               员工姓名:
                <el-input lable="员工姓名" class="name"
                placeholder="请输入内容">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
               </el-input>
             <el-button type="primary" size="small" id="search">查询</el-button>
           </div>

           <div id="table">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                type="index"
                :index="indexMethod">
                </el-table-column>
                <el-table-column
                prop="date"
                label="日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
           </div>
      </el-main>
      <el-footer class="footer" height="50px">
          <h5 align="center">
              Copyright@yh
          </h5>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
export default {
    data() {
      return {
        isCollapse: true,
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      indexMethod(index) {
        return index * 2;
      },
      logout(){
        this.$router.push(
           '/'
        )
      }
    }
}
</script>
<style>
	.main{
        width: 100%;
		height:100%;
        position: fixed;
	}
    .header{
        background-color: #507EA1;
        height: 100px;
        margin-left: 0%;
        margin-right: 0%;
        float: left;
    }
    .footer{
        background-color: #F7F7F7;
    }
    .aside{
        background-color: #545c64;
    }
    .name{
        width: 20%;
        height: 10px;
        margin-bottom: 100px
    }
    #search{
        margin-left: 10px;
    }
    #table{
        position: absolute;
        left: 30%
    }

    .header i{
        position: absolute;
        right: 60px;
        top: 60px;
    }
</style>









