<template>
    <div>
        <h3>子组件B</h3>
        <div>{{msg}}</div>
        <div>{{a2bMsg}}</div>
    </div>
</template>
<script>
// 组件传值 bus 作为中央时间总线，同绑定元素或组件（v-on:xxx）同样作用
import {
    bus
}
from '../libs/bus.js'
export default {
	// 接收父组件值
    props: ["msg"],
    data() {
        return {
            a2bMsg: ""
        }
    },
    created() {
    	// A => B
        bus.$on('aTob', this.aTob)
    },
    methods: {
    	// A => B
        aTob(val) {
            this.a2bMsg = val
        }
    }
}
</script>
