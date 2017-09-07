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
                        if (res.status) {
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
