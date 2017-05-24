<template>
    <div>
        <h1>Store测试</h1>
        初始值 -- {{oldCount}}<br>
        更新后 -- {{newCount}}（{{$store.getters.getCount}} or {{$store.state.count}}）
    </div>
</template>
<script>
export default {
    data() {
        return {
            oldCount: 0,
            newCount: 0
        }
    },
    mounted: function() {
        this.$store.dispatch('setCount', '100');
        this.newCount = this.$store.getters.getCount;
    }
}
</script>
<style lang="scss" scoped>

</style>

