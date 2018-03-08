<template>
    <div style="text-align:center;margin-top: 30px;">
        <div class="alertHonorBox" @click="alertHonorClick">openAlert</div>
        <div class="alertHonor" v-if="showAlertHonor">
            <div class="honorWindow">
                <div class="honorClose" @click="honorClose">closeAlert</div>
                <div class="honorBg">
                    <div class="honorShare">
                        <div class="honorBgLeft">升级通知</div>
                        <div class="honorBgRight" @click='handleActions("share")'>分享</div>
                    </div>
                    <div class="honorText">{{title}}</div>
                </div>
                <div class="honorRanking">
                    {{ranking}}
                </div>
                <img width="50" :src="img" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        img: {
            type: String
        }, //图片
        title: {
            type: String
        }, //达人昵称
        ranking: {
            type: String
        }, //排名
        share: {
            type: Function
        }, //分享
    },
    data() {
        return {
            showAlertHonor: true
        }
    },
    methods: {
        alertHonorClick() { //点击其他区域
            this.showAlertHonor = true; //关闭整个窗口
        },
        honorClose() { //点击关闭图标
            this.showAlertHonor = false;
        },

        handleActions(action) {
            this.callback(action);
        }
    }
}

</script>
