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

       var option = {
            title: {
                text: '天气情况统计',
                subtext: '虚构数据',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 10,
                left: 'center',
                data: ['西凉', '益州', '兖州', '荆州', '幽州']
            },
            series: [
                {
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {
                            value: 1548,
                            name: '幽州',
                            label: {
                                formatter: [
                                    '{title|{b}}{abg|}',
                                    '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                                    '{hr|}',
                                    '  {Sunny|}{value|202}{rate|55.3%}',
                                    '  {Cloudy|}{value|142}{rate|38.9%}',
                                    '  {Showers|}{value|21}{rate|5.8%}'
                                ].join('\n'),
                                backgroundColor: '#eee',
                                borderColor: '#777',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    title: {
                                        color: '#eee',
                                        align: 'center'
                                    },
                                    abg: {
                                        backgroundColor: '#333',
                                        width: '100%',
                                        align: 'right',
                                        height: 25,
                                        borderRadius: [4, 4, 0, 0]
                                    },
                                    Sunny: {
                                        height: 30,
                                        align: 'left',
                                    
                                    },
                                    Cloudy: {
                                        height: 30,
                                        align: 'left',
                                    
                                    },
                                    Showers: {
                                        height: 30,
                                        align: 'left',
                                     
                                    },
                                    weatherHead: {
                                        color: '#333',
                                        height: 24,
                                        align: 'left'
                                    },
                                    hr: {
                                        borderColor: '#777',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    value: {
                                        width: 20,
                                        padding: [0, 20, 0, 30],
                                        align: 'left'
                                    },
                                    valueHead: {
                                        color: '#333',
                                        width: 20,
                                        padding: [0, 20, 0, 30],
                                        align: 'center'
                                    },
                                    rate: {
                                        width: 40,
                                        align: 'right',
                                        padding: [0, 10, 0, 0]
                                    },
                                    rateHead: {
                                        color: '#333',
                                        width: 40,
                                        align: 'center',
                                        padding: [0, 10, 0, 0]
                                    }
                                }
                            }
                        },
                        {value: 535, name: '荆州'},
                        {value: 510, name: '兖州'},
                        {value: 634, name: '益州'},
                        {value: 735, name: '西凉'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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


