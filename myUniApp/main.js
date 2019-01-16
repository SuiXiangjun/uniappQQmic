import Vue from 'vue'
import App from './App'
//公共js
import PubFuc from'./publicjs/common'

Vue.config.productionTip = false

App.mpType = 'app'
//挂载
Vue.prototype.$pubFuc = PubFuc
const app = new Vue({
    ...App
})
app.$mount()
