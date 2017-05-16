<template>
    <div>
        <h1>Echarts（Echarts原生库）测试</h1>
        <div ref="chart" class="flowchart"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import _ from 'lodash'

let option = {
    animation: false,
    title: {
        text: 'ECharts Hello World'
    },
    tooltip: {},
    xAxis: {
        data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}

export default {
    data: function() {
        return {
            optionData: option,
            chart: null
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.chart.setOption(this.optionData);
        window.onresize = this.chart.resize;
    }
}
</script>
<style scoped>
.flowchart {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
</style>
