import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
	sync
}
from 'vuex-router-sync'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 兼容IE es6
import "babel-polyfill"

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(iView)

import App from './App'
import stores from './vuex'
import routers from './router'
import util from './libs/util'

// 过滤器
import * as filters from './libs/filters'

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// Axios 配置
let baseUrl = process.env.NODE_ENV === "development" ? "http://eyetest.kuyun.com/api/" : "http://eye.kuyun.com/api/"

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 15000;
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

// 修正ie9不支持window.performance.now();
try {
	window.performance.now();
} catch (error) {
	window.performance = window.Date;
}

Vue.config.productionTip = false

const store = new Vuex.Store(stores)
const router = new Router(routers)

// iView LoadingBar
router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	util.title(to.meta.title);
	next();
});

router.afterEach((to, from, next) => {
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});

// vue-router 的状态放进 vuex 的 state
sync(store, router)

const app = new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')