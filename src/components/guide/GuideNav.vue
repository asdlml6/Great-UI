<template>
    <div class="nav">
        <h2 class="title1">导航</h2>
        <div class="title1-description">
            <p>导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。</p>
        </div>
        <div class="title2-description">
            <h3>选择合适的导航</h3>
            <p>选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</p>
        </div>
        <div class="detail">
            <h3>侧栏导航</h3>
            <div class="item">
                <div class="left">
                    <p>可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。</p>
                </div>
                <div class="right">
                    <div v-for="(item, index) in arr" :key="index" class="right-item">
                        <img :src="item.url" alt="图片加载失败。。。" @click="expand(item)">
                        <mask-layer  :url="item.url" :visible.sync="item.copyVisible"></mask-layer>
                        <h5>{{item.title}}</h5>
                        <p>{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MaskLayer from '../common/mask-dialog'
export default {
    name: 'GuideNav',
    data() {
        return {
            arr: [
                {
                    url: 'https://element.eleme.cn/static/navbar_1.499e088.png',
                    title: '一级类目',
                    description: '适用于结构简单的网站：只有一级页面时，不需要使用面包屑。',
                    copyVisible: false
                },
                {
                    url: 'https://element.eleme.cn/static/navbar_2.59ecae2.png',
                    title: '二级类目',
                    description: '侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。',
                    copyVisible:false
                },
                {
                    url: 'https://element.eleme.cn/static/navbar_3.8dcec92.png',
                    title: '三级类目',
                    description: '适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。',
                    copyVisible: false
                }
            ],
            currentElement: ''
        }
    },
    methods: {
        expand (item){
            this.arr.map((x)=>{
                x.copyVisible = false
            })
            item.copyVisible = true
            console.log('此时的数组', this.arr)
        },
        shrink (item){
            item.copyVisible = false
        }
    },
    components: {
        MaskLayer
    }
}
</script>
<style lang="scss" scoped>
    .nav {
        width: 100%;
        height: auto;
        padding-left: 70px;
        .title1 {
            margin-bottom: 10px;
            font-weight: 400;
            color: #1f2f3d;
            font-size: 28px;
        }
        .title1-description {
            width: 100%;
            height: 22px;
            box-sizing: border-box;
            margin-bottom: 55px;
            p {
                font-size: 14px;
                color: #5e6d82;
                margin: 0 0 15px;
            }
        }
        .title2-description {
            width: 100%;
            height: 103px;
            margin-bottom: 55px;
            box-sizing: border-box;
            h3 {
                width: 100%;
                height: 29px;
                font-size: 22px;
                font-weight: 400;
                margin: 0 0 30px;
                color: #1f2d3d;
            }
            p {
                width: 100%;
                height: calc(100% - 59px);
                font-size: 14px;
                color: #5e6d82;
            }
        }
        .detail {
            width: 100%;
            height: auto;
            box-sizing: border-box;
            h3 {
                width: 100%;
                height: 29px;
                font-size: 22px;
                font-weight: 400;
                margin: 0 0 30px;
                color: #1f2d3d;
            }
            .item {
                width: 100%;
                height: calc(100% - 59px);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                .left {
                    flex: 1;
                    height: 88px;
                    box-sizing: border-box;
                    p {
                        font-size: 14px;
                        color: #5e6d82;
                        margin: 0 0 15px;
                    }
                }
                .right {
                    flex: 3;
                    height: 100%;
                    padding-left: 10px;
                    .right-item {
                        img {
                            width: 100%;
                            padding: 15px;
                            background-color: #f9fafc;
                            margin-bottom: 15px;
                            cursor: pointer;
                        }
                        .copy {
                            width: 100%;
                            background-color: rgba(55,55,55,.6);
                            position: absolute;
                            right: 0;
                        }
                        h5 {
                            width: 100%;
                            height: 17px;
                            font-weight: 400;
                            color: #1f2f3d;
                        }
                        p {
                            width: 100%;
                            height: 22px;
                            margin-bottom: 50px;
                            font-size: 14px;
                            color: #5e6d82;
                        }
                    }
                }
            }
        }
    }
</style>