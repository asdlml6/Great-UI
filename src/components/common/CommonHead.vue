<template>
    <div class="HomeNav">
        <div class="left"></div>
        <div class="right">
            <div v-for="(item, index) in rightMsg" :key="index" @click="goPage(item, index)" :class="{ active: current == index }">{{item}}</div>
        </div>
        <div class="other" v-if="otherfunctions > 0">
            <div class="version"></div>
            <div class="language"></div>
        </div>
    </div>
</template>
<script>
import DropDownBox from './DropDownbox.vue';
export default {
    name: "HomeNav",
    data() {
        return {
            left: 'GreatUI',
            rightMsg: ['指南', '组件', '主题', '资源'],
            current: -1,
            version: ['1.0.0'],
            language: ['中文', 'English']
        }
    },
    components: {
        DropDownBox
    },
    methods: {
        goPage (item, index){
            let that = this
            this.current = index
            if (item === '指南'){
                // this.$router.push('/guide/design')
                this.$router.push({
                    name: 'GuideDesign',
                    params: {
                        value: that.current
                    }
                })
            } else if (item === '组件'){
                this.$router.push('/componentPage')
            }
        }
    },
    props: {
        otherfunctions: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        switch (this.$route.path) {
        case '/guide/nav':
            this.current = 0;
            break;
        case '/guide/design/0':
            this.current = 0;
            break;
        case '/componentPage':
            this.current = 1;
            break;
        default:
            break;
        }
        // this.current = (this.$route.params.value >=0 ? this.$route.params.value : -3)

        // if (this.$route.path === '/guide/nav' || this.$route.path === '/guide/design/0'){
        //     this.current = 0
        // }
        console.log('路由参数:', this.current)
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
        .other {
            flex: 1;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: springgreen;
        }
    }
    .active {
        border-bottom: 2px solid #409eff !important;
    }
</style>