<template>
    <div class="HomeOptions">
        <div v-for="(item, index) in msg" :key="index" class="item">
            <div class="content">
                <div class="img">
                    <img :src="item.url" alt="图片加载失败">
                </div>
                <div class="title">{{item.title}}</div>    
                <div class="description">{{item.description}}</div>
                <div class="detail">查看详情</div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'HomeOptions',
    data() {
        return {
            msg: [
                {
                    title: '指南', 
                    description: "了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。",
                    url: "https://element.eleme.cn/static/component.bd3411b.png"
                },
                {
                    title: '组件', 
                    description: "使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。",
                    url: "https://element.eleme.cn/static/resource.a72b8f8.png"
                },
                {
                    title: '主题', 
                    description: "在线主题编辑器，可视化定制和管理站点主题、组件样式。",
                    url: "https://element.eleme.cn/static/component.bd3411b.png"
                },
                {
                    title: '资源', 
                    description: "下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。",
                    url: "https://element.eleme.cn/static/resource.a72b8f8.png"
                }
            ]
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
    .HomeOptions {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
            flex: 1;
            height: 100%;
            width: 100%;
            padding: 0 19px;
            box-sizing: border-box;
            .content {
                width: 100%;
                height: 100%;
                transition: all .3s ease-in-out;
                border: 1px solid #eaeefb;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-top: 20px;
                border-radius: 5px;
                &:hover {
                    box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
                    transform: translateY(-10px);
                    transition: all .3s ease-in-out;
                }
                .img {
                    height: 120px;
                    width: 100%;
                    text-align: center;
                    line-height: 120px;
                    img {
                        height: 100%;
                    }
                }
                .title {
                    width: 100%;
                    height: 34px;
                    text-align: center;
                    line-height: 34px;
                    font-size: 18px;
                    color: #1f2f3d;
                    font-weight: 400;
                }
                .description {
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    color: #99a9bf;
                    padding: 0 25px;
                    height: 20px;
                    position: relative;
                    top: -40px;
                }
                .detail {
                    width: 100%;
                    height: 53px;
                    text-align: center;
                    line-height: 53px;
                    color: #409eff;
                    border-top: 1px solid #eaeefb;
                    box-sizing: border-box;
                    &:hover {
                        cursor: pointer;
                        color: #fff;
                        background: #409eff;
                    }
                }
            }
        }
    }
</style>