<template>
    <div class="componentsPage">
        <div class="box">
            <div class="header">
               <common-head :otherfunctions = '30'></common-head> 
            </div>
            <div class="content"></div>
        </div>
    </div>
</template>
<script>
import CommonHead from './common/CommonHead'

export default {
    name: 'ComponentPage',
    components: {
        CommonHead
    }
}
</script>
<style lang="scss" scoped>
    .componentsPage {
        min-width: 1239px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 16px;
        padding-right: 16px;
        .box {
            width: 85%;
            height: 100%;
            margin: 0 auto;
            // background: cadetblue;
            .header {
                width: 100%;
                height: 80px;
                box-sizing: border-box;
                // background: cornflowerblue;
            }
            .content {
                width: 100%;
            }
        }
    }
</style>