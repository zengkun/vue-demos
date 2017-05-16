<template>
    <div class="hello">
        <h1>Router嵌套测试</h1>
        <br>
        <div>
            <router-link to="/router/r1">Router1</router-link>
            <router-link to="/router/r2">Router2</router-link>
        </div>
        <br>
        <router-view></router-view>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>
