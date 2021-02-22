<template>
    <div class="guideContent">
        <div class="guideLeft">
            <div v-for="(item, index) in leftSelect" :key="index" class="item" @click="change(index)" :class="{ actived : num === index }">
                {{item}}
            </div>
        </div>
        <div class="guideRight">
            <component :is="current"></component>
        </div>
    </div>
</template>
<script>
import GuideDesign from './GuideDesign'
import GuideNav from './GuideNav'
export default {
    name: 'GuideContent',
    data() {
        return {
            leftSelect: [
                '设计原则', '导航'
            ],
            // current: 'GuideDesign',
            current: this.init,
            num: 0,
            path: '/guide/design'
        }
    },
    methods: {
        change (index){
            this.num = index
            this.current = (index === 0 ? 'GuideDesign' : 'GuideNav')
            this.path = (index === 0 ? '/guide/design/0' : '/guide/nav')
            this.$router.push(this.path)
        }
    },
    components: {
        GuideNav,
        GuideDesign
    },
    props: {
        init: {
            type: String,
            default: 'GuideDesign'
        }
    },
    watch: {
        init (newValue, oldValue){
            this.current = newValue
            this.num = 1 
        }
    }
}
</script>
<style lang="scss" scoped>
    .guideContent {
        width: 100%;
        // height: 300px;
        height: auto;
        padding-top: 50px;
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        .guideLeft {
            flex: 1;
            height: 100%;
            .item {
                height: 40px;
                color: #333;
                font-size: 16px;
                line-height: 40px;
                transition: .15s ease-out;
                font-weight: 700;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .guideRight {
            flex: 8;
            height: 100%;
        }
    }
    .actived {
        color: #409eff !important; // 又是优先级的问题
    }
</style>