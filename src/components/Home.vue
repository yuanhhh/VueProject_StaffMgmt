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
      default-active="info"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#507EA1"
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
      <el-main>Main</el-main>
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
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
    .header i{
        position: absolute;
        right: 60px;
        top: 60px;
    }
</style>


