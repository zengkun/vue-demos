<template>
    <Button type="primary" @click="info">显示普通提醒</Button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info('这是一条普通的提醒');
            }
        }
    }
</script>