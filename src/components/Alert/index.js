import Vue from 'vue'
// 创建组件构造器
import alert from './alert.vue'
const alertHonor = Vue.extend(alert);
// const alertHonor = Vue.extend(require('./alert.vue'));
const div = document.createElement('div');

let instance = null

export default function(options) {

	// const propsData = Object.assign({}, options);
	// instance || (instance = new alertHonor({
	// 	propsData,
	// }).$mount(div))

	instance || (instance = new alertHonor({
		el: div
	}))

	// 此处不能用这种写法，对象被深拷贝，指向变了，并不是组件本身实例，target目标应指向instance本身，不能指向新的{}
	let instance = Object.assign(instance, options);
	// let instance = Object.assign({}, instance, options);
	console.log(instance);

	// 组合props 或者
	// instance.title = options.title;
	// instance.ranking = options.ranking;

	// 把alertHonor.vue加入body中
	document.body.appendChild(instance.$el);

	// 回调函数
	instance.callback = function(action) {
		if(action == 'share') {
			options.share && options.share();
		}
	};

}
