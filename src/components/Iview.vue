<template>
    <div>
        <h1>{{msg}}</h1>
        <div style="position: absolute;width:100%;">
            <!-- fixed随滚动条滚动，需要给父元素加定位 -->
            <Tooltip content="这里是提示文字">
                当鼠标经过这段文字时，会显示一个气泡框
            </Tooltip>
        </div>
        <br>
        <div style="width:400px;margin:100px auto 80px;text-align: left;">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <Form-item label="城市" prop="city">
                    <Select @on-change="getCityId" :label-in-value="true" v-model="formValidate.city" placeholder="请选择所在地">
                        <Option v-for="item in cityData" :value="item.id + ''" :key="item.id">{{ item.city }}</Option>
                    </Select>
                </Form-item>
                <Form-item label="爱好" prop="interest">
                    <Checkbox-group @on-change="getCheck" v-model="formValidate.interest">
                        <Checkbox label="1">吃饭</Checkbox>
                        <Checkbox label="2">睡觉</Checkbox>
                        <Checkbox label="3">跑步</Checkbox>
                        <Checkbox label="4">看电影</Checkbox>
                    </Checkbox-group>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>
        </div>
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
                }],

                cityData: [],

                formValidate: {
                    interest: [],
                    city: ''
                },

                ruleValidate: {
                    city: [{
                        required: true,
                        message: '请选择城市',
                        trigger: 'change'
                    }],
                    interest: [{
                        required: true,
                        type: 'array',
                        min: 1,
                        message: '至少选择一个爱好',
                        trigger: 'change'
                    }, {
                        type: 'array',
                        max: 2,
                        message: '最多选择两个爱好',
                        trigger: 'change'
                    }]
                }

            }
        },
        mounted() {

            this.changeChannel();

        },
        methods: {

            getCityId(id) {
                    console.log(id);
                },

                handleSubmit(name) {
                    this.$refs[name].validate((valid) => {
                        if (valid) {
                            this.$Message.success('提交成功!');
                        } else {
                            this.$Message.error('表单验证失败!');
                        }
                    })
                },

                getCheck(a) {
                    console.log(a);
                },

                handleReset(name) {
                    this.$refs[name].resetFields();
                },

                changeChannel() {
                    this.$http({
                            method: 'get',
                            url: 'http://crmtest.kuyun.com/api/city/list'
                        })
                        .then((res) => {
                            this.cityData = res.data;
                            console.log(this.cityData);
                        })
                }

        }
}
</script>
