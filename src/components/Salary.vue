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
         <div id="echart" style="width: 600px;height:400px;"></div>
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
        isCollapse: true
      };
    },
    mounted(){
        this.init()
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
       },
        init(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('echart'));

        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }

       var option = {
            title: {
                text: '柱状图动画延迟'
            },
            legend: {
                data: ['bar', 'bar2']
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        myChart.setOption(option);
        
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

    #echart{
        position: relative;
        left: 30%;
    }
    .header i{
        position: absolute;
        right: 60px;
        top: 60px;
    }
</style>


