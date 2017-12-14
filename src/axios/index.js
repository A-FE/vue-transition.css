import Vue from 'vue'
import axios from 'axios'

const vm = new Vue()

// axios全局配置
axios.defaults.timeout = 10000
// axios状态码
axios.defaults.validateStatus = (status) => {
  return status >= 200 && status < 600
}
// http请求头
axios.defaults.headers = {
  'Content-Type': 'application/json'
}

// 添加响应拦截器
axios.interceptors.response.use((res) => {
  // 对响应处理
  if (res.status >= 400 && res.status < 600) {
    return Promise.reject(res)
  }
  return res
}, (err) => {
  vm.$message.error('未知错误')
  return Promise.reject(err)
})

export default axios
