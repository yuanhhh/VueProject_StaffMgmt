<template>
<div class="container">
	<div class="login_title">
		<h1><b>企业员工管理系统</b></h1>
		</div>
     
		<div class="login_box">
            <div>
                <img src="../assets/images/logo.jpg"  style="width: 100px;height: 100px;"/>
            </div>
            <el-form ref="loginForm" :rules="rules" :model="loginForm">
                <el-form-item class="username" prop="username">
                <el-input 
                    placeholder="用户名"
                    v-model="loginForm.username">
                    <i slot="prefix" class="iconfont username">&#xe73f;</i>
                </el-input>
                </el-form-item>
                <el-form-item class="password" prop="password">
                <el-input   show-password
                    placeholder="密码"
                    v-model="loginForm.password">
                    <i slot="prefix" class="iconfont password">&#xe608;</i>
                </el-input>
                </el-form-item>
            </el-form>	
             <el-button id="login_button" size="small" @click="login('loginForm')" type="primary">登录</el-button>
             <el-button id="reset_button" size="small"  @click="resetForm('loginForm')" type="info">重置</el-button>
        </div>	
     
</div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '111111',
            }, 
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },

    methods:{
        login(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
             if(this.loginForm.username==='admin'&&this.loginForm.password==='111111'){
                 this.$message({
                    message: '登录成功',
                    type: 'success'
                 });
                 this.$router.push('/home')
            }else{
                  this.$message.error('账号名或密码错误');
            }
          } else {
            return false;
          }
        });
      },
        resetForm(loginForm) {
        this.$refs[loginForm].resetFields();
      }
    }
}
</script>
<style scoped>
	.container{
		background-color: #507EA1;
        width: 100%;
		height:100%;
        position: fixed;
	}
	
	.login_box{
		height: 300px;
		width: 500px;
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%,20%);
		background: white;
		border: #999999 solid 1px;
	}
	
	.login_title{
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translate(-50%,-30%);
		font-family: "楷体";
		font-size: 30px;
	}
	
	.username{
		width: 50%;
		position: absolute;
		left: 50%;
		top: 38%;
		transform: translate(-50%,-20%);
	}
	.password{
		width: 50%;
		position: absolute;
		left: 50%;
		top: 60%;
		transform: translate(-50%,-40%);
	}	
	
	#login_button{
		position: absolute;
		left: 50%;
		top:75%;
	}
	
	#reset_button{
		position: absolute;
		left: 63%;
		top:75%;
	}
	
	.login_box img{
		position: absolute;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 50%;
	}
</style>