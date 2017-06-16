/**
 * Created by 陈振华 on 2017/6/15.
 */
import axios from 'axios'
import { getUserInfo, clearUserInfo } from '@/js/Common'
import router from '../router'
import Vue from 'vue'

axios.defaults.baseURL = 'http://otatest.cleartv.cn/ota_backend/v1'
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.request.use(function (config) {
  if (router.path) {
    console.log(router.path)
    if (getUserInfo('token')) {
      this.$router.push('/login')
      return
    }
    config.data.token = getUserInfo('token')
    config.data.projectName = getUserInfo('projectName')
    config.data.OTACode = getUserInfo('OTACode')
    config.data.account = getUserInfo('account')
    return config
  }
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  switch (res.data.rescode) {
    case 401:
      alert('error info!')
      clearUserInfo('token')
      this.$router.push('/login')
      break
    case 200:
      return res
    default:
      alert('error info!')
  }
}, function (error) {
  return Promise.reject(error)
})
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

export default axios
