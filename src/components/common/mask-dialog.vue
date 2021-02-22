<template>
    <div class="MaskLayer" @click="maskShow = !maskShow" v-if="maskShow">
        <div class="img-wrap">
            <img :src="url" alt="图片加载失败">
        </div>
    </div>
</template>
<script>
export default {
    name: 'MaskLayer',
    props: {
        url: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeFlag (){
            this.maskShow = !this.maskShow
            this.visible = this.maskShow        // 这么修改也不对， 因为没有修改到具体的数组元素上？            
        }
    },
    data() {
        return {
            maskShow: false
        }
    },
    watch: {
        url (newValue, oldValue){
            console.log('新的属性值:', newValue)
        },
        visible (newValue, oldValue){
            console.log('visible 属性发生更改')
            this.maskShow = newValue
            console.log('父级数组:', this.array)
        }
    },
    computed: {
        childVisible (){
            return this.maskShow 
        }
    }
}
</script>
<style lang="scss" scoped>
    .MaskLayer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(55,55,55,.6);
        z-index: 1000;
        height: 100%;
        .img-wrap {
            width: 846px;
            margin: 0 auto;
            margin-top: 100px;
            padding-bottom: 50px;
            height: auto;
            img {
                width: 100%;
            }
        }
    }
</style>