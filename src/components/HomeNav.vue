<template>
    <div class="HomeNav">
        <div class="left"></div>
        <div class="right">
            <div v-for="(item, index) in rightMsg" :key="index" @click="goPage(item)">{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeNav",
    data() {
        return {
            left: 'GreatUI',
            rightMsg: ['指南', '组件', '主题', '资源']
        }
    },
    methods: {
        goPage (item){
            if (item === '指南'){
                console.log('页面暂时没有搭建出来')
                this.$router.push('/guide/design')
            } else if (item === '组件'){
                this.$router.push('/componentPage')
            } else if (item === '主题'){
                console.log('页面暂时没有搭建出来')
            } else {
                console.log('页面暂时没有搭建出来')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .HomeNav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dcdfe6;
        box-sizing: border-box;
        .left {
            flex: 1;
            box-sizing: border-box;
        }
        .right {
            flex: 4;
            box-sizing: border-box;
            display: flex;
            width: 100px;
            height: 100%;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            background: transparent;
            div {
                width: 10%;
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent !important;
                color: rgba(25, 137, 250, .5);
                &:hover {
                    cursor: pointer;
                    color: rgb(25, 137, 250)
                }
            }
        }
    }
</style>