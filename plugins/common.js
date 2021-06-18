import Vue from 'vue'

var common = {
  install(Vue) {
    Vue.prototype.common = {
      randomColor: function () {
        return '#' + Math.random().toString(16).slice(-6)
      },
    }
  },
}
Vue.use(common)
