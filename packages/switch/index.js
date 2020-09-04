import  Switch from './src/switch.vue'
// 按需引入
Switch.install = function (vue) {
  Vue.component(Switch.name, Switch)
}
// 导出默认组件
export default Switch