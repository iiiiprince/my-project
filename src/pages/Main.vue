<template>
  <div>
    <button class="btn" style="float: right;margin-right: 20px;" @click="logout">退出</button>
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
  </div>
</template>
<style>
  .active{
    background: green;
  }
</style>
<script>
  import nav from '@/components/vNav'
  import header from '@/components/Header'
  import { clearUserInfo } from '@/js/Common'
  export default {
    name: 'main',
    data () {
      return {
        value1: null,
        value2: null
      }
    },
    components: {
      'v-nav': nav,
      'v-header': header
    },
    methods: {
      logout: function () {
//        alert('logout!')
        clearUserInfo('OTACode')
        clearUserInfo('projectName')
        clearUserInfo('token')
        clearUserInfo('account')
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
