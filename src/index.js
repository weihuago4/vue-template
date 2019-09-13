import './style.css'
import App from './App'
import Vue from 'vue'
import sayHello from '@src/sayHello'
sayHello()
new Vue({
  el: '#app',
  render: h => h(App)
})
