import Vue from 'vue'

// 组件传值 bus 作为中央事件总线，同绑定元素或组件（v-on:xxx）同样作用
export var bus = new Vue()