<template>
    <div>
        <h3>子组件A</h3>
        <div>{{msg}}</div>
    </div>
</template>
<script>
// 组件传值 bus 作为中央时间总线，同绑定元素或组件（v-on:xxx）同样作用
import {
    bus
}
from '../libs/bus.js'
export default {
    props: ["msg"],
    data() {
        return {
            msgA: "我是从子组件A -> 父组件传值。",
            getChildMsg: "我是父组件通过组件A实例得到的。",
            a2bMsg: "我是组件B传给组件A的值。"
        }
    },
    mounted() {
        // 触发 A => P
        this.$emit('changeWord', this.msgA);
        // 触发 A => B
        bus.$emit('aTob', this.a2bMsg)
    },
    methods: {
        childFn() {
            console.log("父组件调用了我。");
        }
    }
}
</script>
