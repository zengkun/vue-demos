<template>
    <div>
        <h1>{{msg}}</h1>
        <div style="position: absolute;width:100%;">
            <Tooltip content="这里是提示文字">
                当鼠标经过这段文字时，会显示一个气泡框
            </Tooltip>
        </div>
        <br>
        <br>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br>
        <br>
        <Button type="info">信息按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
        <br>
        <br>
        <Table :columns="columns1" :data="data1"></Table>
        <br>
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: "Iview测试",
            columns1: [{
                title: '姓名',
                key: 'name'
            }, {
                title: '年龄',
                key: 'age'
            }, {
                title: '地址',
                key: 'address'
            }],
            data1: [{
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道'
            }]
        }
    }
}
</script>
