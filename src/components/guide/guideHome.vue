<template>
    <div class="guide">
        <div class="guidehome">
            <div class="header">
                <common-head></common-head>
            </div>
            <div class="content">
                <!-- <component :is="currentComponent"></component> -->
                <guide-content :init="init"></guide-content>
            </div>
            <div class="footer">
                <common-foot></common-foot>    
            </div>            
        </div>
    </div>
</template>
<script>
import CommonFoot from '../common/CommonFoot.vue'
import CommonHead from '../common/CommonHead'
import GuideContent from './GuideContent'
export default {
    name: 'guideHome',
    data() {
        return {
            currentComponent: 'GuideContent',
            init: 'GuideDesign'
        }
    },
    methods: {
        deterCurrentRoute (){
            if (this.$route.name === 'GuideDesign' || this.$route.name === 'GuideNav'){
                this.currentComponent = 'GuideContent'
            }
        }
    },
    mounted() {
        this.deterCurrentRoute()
        console.log('当前的路由:', this.$route.path)
        if (this.$route.path === '/guide/nav'){
            console.log('路由判断')
            this.init = 'GuideNav'
        }
    },
    components: {
        CommonHead,
        CommonFoot,
        GuideContent
    },
    beforeRouteEnter (to, from, next) {
        if (to.meta.title){
            document.title = to.meta.title
        }
        next()
    }
}
</script>
<style lang="scss" scoped>
    .guide {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .guidehome {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .header {
                width: 100%;
                height: 80px;
                box-sizing: border-box;
                padding-left: 10%;
                padding-right: 10%;
            }
            .content {
                width: 100%;
                height: auto;
                box-sizing: border-box;
                padding-left: 10%;
                padding-right: 10%;
            }
            .footer {
                margin-top: 80px;
                width: 100%;
                height: 340px;
                background-color: #f7fbfd;
            }
        }
    }
</style>