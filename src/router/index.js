import Test from '@/components/Test'
import Axios from '@/components/Axios'
import Store from '@/components/Store'
import Echarts from '@/components/Echarts'
import Echarts2 from '@/components/Echarts2'
import Venn from '@/components/Venn'
import SassLodash from '@/components/SassLodash'
import Iview from '@/components/Iview'
import Router from '@/components/Router'
import Filter from '@/components/Filter'
import Parent from '@/components/Parent'

export default {
	// mode: 'history',
	routes: [{
		path: '/',
		meta: {
			title: "Test"
		},
		name: 'test',
		component: Test
	}, {
		path: '/axios',
		meta: {
			title: "Axios"
		},
		name: 'axios',
		component: Axios
	}, {
		path: '/store',
		meta: {
			title: "Store"
		},
		name: 'store',
		component: Store
	}, {
		path: '/charts',
		meta: {
			title: "Echarts"
		},
		name: 'charts',
		component: Echarts
	}, {
		path: '/charts2',
		meta: {
			title: "Echarts2"
		},
		name: 'charts2',
		component: Echarts2
	}, {
		path: '/venn',
		meta: {
			title: "Venn"
		},
		name: 'venn',
		component: Venn
	}, {
		path: '/sasslodash',
		meta: {
			title: "SassLodash"
		},
		name: 'sasslodash',
		component: SassLodash
	}, {
		path: '/iview',
		meta: {
			title: "Iview"
		},
		name: 'iview',
		component: Iview
	}, {
		path: '/router',
		meta: {
			title: "Router"
		},
		name: 'router',
		component: Router,
		children: [{
			path: 'r1',
			meta: {
				title: "Router1"
			},
			component: Test
		}, {
			path: 'r2',
			meta: {
				title: "Router2"
			},
			component: Axios
		}]
	}, {
		path: '/filter',
		meta: {
			title: "Filter"
		},
		name: 'filter',
		component: Filter
	}, {
		path: '/parent',
		meta: {
			title: "Parent"
		},
		name: 'parent',
		component: Parent
	}, {
		path: '*',
		redirect: '/'
	}],
	// linkActiveClass: 'active',
	scrollBehavior: (to, from, savedPosition) => ({
		x: 0,
		y: 0
	})
}