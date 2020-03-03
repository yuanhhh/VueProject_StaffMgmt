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
        logout(){
            this.$router.push(
            '/'
            )
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        init(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('echart'));
        var data = [
            [5000, 10000, 6785.71],
            [4000, 10000, 6825],
            [3000, 6500, 4463.33],
            [2500, 5600, 3793.83],
            [2000, 4000, 3060],
            [2000, 4000, 3222.33],
            [2500, 4000, 3133.33],
            [1800, 4000, 3100],
            [2000, 3500, 2750],
            [2000, 3000, 2500],
            [1800, 3000, 2433.33],
            [2000, 2700, 2375],
            [1500, 2800, 2150],
            [1500, 2300, 2100],
            [1600, 3500, 2057.14],
            [1500, 2600, 2037.5],
            [1500, 2417.54, 1905.85],
            [1500, 2000, 1775],
            [1500, 1800, 1650]
        ];
        var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
        var barHeight = 50;

        var option = {
            title: {
                text: '在中国租个房子有多贵？',
                subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
            },
            legend: {
                show: true,
                data: ['价格范围', '均值']
            },
            grid: {
                top: 100
            },
            angleAxis: {
                type: 'category',
                data: cities
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    var id = params.dataIndex;
                    return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                }
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    color: 'transparent'
                },
                data: data.map(function (d) {
                    return d[0];
                }),
                coordinateSystem: 'polar',
                stack: '最大最小值',
                silent: true
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return d[1] - d[0];
                }),
                coordinateSystem: 'polar',
                name: '价格范围',
                stack: '最大最小值'
            }, {
                type: 'bar',
                itemStyle: {
                    color: 'transparent'
                },
                data: data.map(function (d) {
                    return d[2] - barHeight;
                }),
                coordinateSystem: 'polar',
                stack: '均值',
                silent: true,
                z: 10
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return barHeight * 2;
                }),
                coordinateSystem: 'polar',
                name: '均值',
                stack: '均值',
                barGap: '-100%',
                z: 10
            }]
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


