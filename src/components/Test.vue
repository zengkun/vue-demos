<template>
    <div>
        <Button type="primary" @click="info">显示普通提醒</Button>
        <anchored-heading :level='1'>标题</anchored-heading>
    </div>
</template>
<script>
// 方式1，注册（全局）组件（render函数）
// 也可以在main.js中直接注册
// import Vue from 'vue';
// Vue.component('anchored-heading', {
//   render: function (createElement) {
//     return createElement(
//       'h' + this.level,   // tag name 标签名称
//       this.$slots.default // 子组件中的阵列
//     )
//   },
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   }
// })

export default {
    methods: {
        info() {
            this.$Message.info('这是一条普通的提醒');
        }
    },
   	// 方式2，注册局部组件（render函数）
    components: {
        'anchored-heading': {
            render: function(createElement) {
                return createElement(
                    'h' + this.level, // tag name 标签名称
                    this.$slots.default // 子组件中的阵列
                )
            },
        }
</script>
