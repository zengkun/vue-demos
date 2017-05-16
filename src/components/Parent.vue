<template>
    <div>
        <h1>组件传值测试</h1>
        <h2>A、B的父组件</h2>
        <div>{{msgA2P}}</div>
        <div>{{getChildMsg}}</div>
        <div>--------------------------------------------------------------</div>
        <!-- :msg => 绑定A传过来的值；@changeWord => 监听 A => P -->
        <child-a ref="childA" :msg="msgA" @changeWord="changeWord"></child-a>
        <div>--------------------------------------------------------------</div>
        <child-b :msg="msgB"></child-b>
    </div>
</template>
<script>
import ChildA from '@/components/ChildA.vue'
import ChildB from '@/components/ChildB.vue'
export default {
    data() {
            return {
                msgA: "我是子组件A，msg是通过父组件传过来的。",
                msgB: "我是子组件B，msg是通过父组件传过来的。",
                msgA2P: "",
                getChildMsg: ""
            }
        },
        mounted() {
            this.getChildRefs()
        },
        methods: {
            getChildRefs() {
                    // 获取A的实例，并改变子组件A的数据、调用A的方法
                    var childA = this.$refs.childA;
                    this.getChildMsg = childA.getChildMsg;
                    childA.childFn();
                },
                // 通过监听更新数据
                changeWord(val) {
                    this.msgA2P = val;
                }
        },
        components: {
            ChildA,
            ChildB
        }
}
</script>
