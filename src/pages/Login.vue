<template>
  <div class="login_box">
    <div class=" login_header padL10px ">登陆</div>
    <form class="pad10px" @submit.prevent="Login">
      <div class=" TxtAlL blod" style="padding: 15px 0 10px;" check-type="required">账号</div>
      <input class="form-control" type="text" v-model="username" name="username" placeholder="请输入账号">
      <div class=" TxtAlL blod" style="padding: 15px 0 10px;">密码</div>
      <input class="form-control" type="password" v-model="passward" name="passward" placeholder="请输入密码">
      <div>{{passward}}</div>
      <div class=" TxtAlL blod" style="padding: 15px 0 10px;">分销商code</div>
      <input class="form-control" type="text" v-model="usercode" name="usercode" placeholder="请输入分销商code">
      <button class="btn btn-success" style="width:100%;margin: 10px 0;" type="submit">登陆</button>
    </form>


  </div>
</template>

<script>
  import { md5, setUserInfo } from '@/js/Common'
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        passward: '',
        usercode: '',
        isLogin: false
      }
    },
    methods: {
      Login () {
        console.log(md5()('' + 112233))
        console.log(this.passward)
        this.axios.post('/loginOTA', {
          action: 'GetToken',
          projectName: 'xitangdev',
          OTACode: this.usercode,
          account: this.username,
          password: 'd0970714757783e6cf17b26fb8e2298f'
        })
          .then((data) => {
            console.log(data)
            switch (data.data.rescode) {
              case 200:
                setUserInfo('OTACode', data.data.OTACode)
                setUserInfo('projectName', data.data.projectName)
                setUserInfo('token', data.data.token)
                setUserInfo('account', data.data.account)
                break
              default:
                alert('error info!')
                break
            }
            this.$router.push('/main')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blod {
    font-weight: bold;
  }

  .pad10px {
    padding-left: 15px;
    padding-right: 15px;
  }

  .login_box {
    width: 300px;
    /*padding: 30px;*/
    border: 1px solid lightgray;
    margin: 0 auto;
  }

  .TxtAlL {
    text-align: left;
  }

  .login_header {
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
