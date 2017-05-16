<template>
    <div>
        <h1>Echarts（vue-echarts/vue-echarts-v3）测试</h1>
        <div class="flowchart">
            <ECharts :options="polar"></ECharts>
            <!-- <IEcharts :option="bar" :resizable="true" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
        <button @click="doRandom">Random</button> -->
        </div>
    </div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
export default {
    data: function() {
        let data = []

        for (let i = 0; i <= 360; i++) {
            let t = i / 180 * Math.PI
            let r = Math.sin(2 * t) * Math.cos(2 * t)
            data.push([r, i])
        }

        return {
            polar: {
                title: {
                    text: '极坐标双数值轴'
                },
                legend: {
                    data: ['line']
                },
                polar: {
                    center: ['50%', '54%']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: 'line',
                    type: 'line',
                    showSymbol: false,
                    data: data
                }],
                animationDuration: 2000
            }
        }
    },
    components: {
        ECharts
    }
}

/*import IEcharts from 'vue-echarts-v3/src/full.vue';

export default {
    data() {
            return {
                loading: false,
                bar: {
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
            }
        },
        components: {
            IEcharts
        },
        methods: {
            doRandom() {
                    const that = this;
                    that.loading = true;
                    let data = [];
                    for (let i = 0, min = 5, max = 99; i < 6; i++) {
                        data.push(Math.floor(Math.random() * (max + 1 - min) + min));
                    }
                    that.loading = !that.loading;
                    that.bar.series[0].data = data;
                },
                onReady(instance) {
                    console.log(instance);
                },
                onClick(event, instance, echarts) {
                    console.log(arguments);
                }
        }
}*/
</script>
<style>
.flowchart {
    height: 400px;
    width: 400px;
    margin: 0 auto;
}
</style>
