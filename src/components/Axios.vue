<template>
    <div>
        <h1>Axios测试</h1>
        <h5>main.js做了默认配置</h5>
        <div v-for="item in channelList" :key="item.id" class="list">
            <span>{{item.tv_name}}--{{item.epg_name}}</span>
        </div>
    </div>
</template>
<script>
// 在Vue中
// v-for in === v-for of


// 原生js
// for-in可以遍历数组或者对象,item是key值
// for-of只能遍历数组,item是value值（若是obj [object Object] is not iterable!）
let objTest = {
    a: 1,
    b: 2
}

let objTest2 = [{
    a: 1
}, {
    a: 2
}]

for(var item in objTest) {
    console.log(item, 'for-in{}');
}
for(var item in objTest2) {
    console.log(item, 'for-in[]');
}

// for(var item of objTest) {
//     console.log(item, 'for-of{}'); // [object Object] is not iterable!）
// }
for(var item of objTest2) {
    console.log(item, 'for-of[]');
}


/*axios({
  method: 'post',
  url: '',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: {
    username:'',
    password:''
  }
}).then(function (response) {
  alert(JSON.stringify(response.data));
}).catch(function (error) {
  alert(error);
});*/


export default {
    data() {
        return {
            channelList: []
        }
    },
    methods: {
        changeChannel() {
            this.$http({
                    method: 'get',
                    url: 'tvlb',
                    params: {
                        tv_type: 0
                    }
                })
                .then((res) => {
                    if(res.status) {
                        this.channelList = res.data.data;
                        this.$Message.success('请求成功');
                    }
                })
                .catch((err) => {
                    console.log("响应超时")
                })
        }
    },
    mounted: function() {
        this.changeChannel();
    }
}

</script>
<style scoped>
.list {
    display: inline-block;
    border-right: 2px solid #999;
    padding: 5px;
}

</style>
