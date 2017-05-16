<template>
    <div>
        <h1>Filters测试</h1> 
        <span>时间戳格式化：{{stampTime | formatDateTime}}</span>
        <br> 
        <span>人民币：{{money | money}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            stampTime: +new Date(),
            money: 1024
        }
    }
}
</script>
