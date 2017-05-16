<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png"><br>
        Router Path -- {{$store.state.route.path}}
        <div class="nav">
            <router-link :to="{name:'test'}" exact>Test</router-link>
            <router-link :to="{name:'axios'}">Axios</router-link>
            <router-link :to="{name:'store'}">Store</router-link>
            <router-link :to="{name:'charts'}">Echarts</router-link>
            <router-link :to="{name:'charts2'}">Echarts2</router-link>
            <router-link :to="{name:'venn'}">Venn</router-link>
            <router-link :to="{name:'sasslodash'}">SassLodash</router-link>
            <router-link :to="{name:'iview'}">Iview</router-link>
            <router-link :to="{name:'router'}">Router</router-link>
            <router-link :to="{name:'filter'}">Filter</router-link>
            <router-link :to="{name:'parent'}">Parent</router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

.logo {
    border-radius: 50%;
    width: 50px;
}

.nav {
    margin: 20px;
}

.nav a {
    margin: 5px;
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
