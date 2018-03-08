// 兼容IE es6
import "babel-polyfill"

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

import AlertHonor from '@/components/Alert'

// vue-ydui组件 http://vue.ydui.org/
import {
	Button,
	ButtonGroup
} from 'vue-ydui/dist/lib.px/button';
import {
	DateTime
} from 'vue-ydui/dist/lib.rem/datetime';
import 'vue-ydui/dist/ydui.base.css';

Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(DateTime.name, DateTime);

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
} catch(error) {
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

// 注册一个全局自定义指令 v-number-only 只能输入数字
// <input v-model="number" v-number-only />
Vue.directive('numberOnly', {
	bind: function(el) {
		el._numberOnlyHandler = function() {
			el.value = el.value.replace(/\D+/, '')
		}
		el.addEventListener('input', el._numberOnlyHandler)
	},
	unbind: function(el) {
		el.removeEventListener('input', el._numberOnlyHandler)
	}
})

// Alert组件
// http://blog.csdn.net/iceking66/article/details/78296928
// http://blog.csdn.net/iceking66/article/details/78297987
// https://www.zhihu.com/question/64744420/answer/231692743
AlertHonor({
	img: 'https://vuejs.org/images/logo.png',
	title: '拜访达人',
	ranking: '您在全国排名第99',
	share: function() {
		alert('您点击了分享~~~')
	}
});
// 或者直接挂载到示例，Test.vue里面直接this.$alert(...)
Vue.prototype.$alert = AlertHonor;

Vue.prototype.$log = (msg) => {
	console.log('$log:', msg);
};

const app = new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
