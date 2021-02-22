<template>
    <div class="footer-box">
        <div class="content">
            <div class="link-content" v-for="(item, index) in arr" :key="index">
                <h4>{{item.title}}</h4>
                <div class="link-item" v-for="(a, b) in item.children" :key="b">
                    <a :href="a.url">{{a.title}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footers',
    data() {
        return {
            arr: [
                {
                    title: '链接',
                    children: [
                        {title: '代码仓库', url: 'https://github.com'}, 
                        {title: '更新日志', url: 'https://github.com'}, 
                        {title: '脚手架', url: 'https://github.com'}, 
                        {title: '常见问题', url: 'https://github.com'}, 
                        {title: '在线主题生成器', url: 'https://github.com'}
                    ]
                },
                {
                    title: '社区',
                    children: [
                        {title: '在线讨论', url: 'https://github.com'}, 
                        {title: '反馈建议', url: 'https://github.com'}
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer-box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 40px 150px;
        .content {
            width: auto;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .link-content {
                width: 105px;
                height: 100%;
                box-sizing: border-box;
                h4 {
                    font-size: 18px;
                    color: #333;
                    line-height: 1;
                    margin: 0 0 15px;
                }
                .link-item {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    a {
                        font-size: 14px;
                        color: #666;
                        text-decoration: none;
                        &:hover {
                            color: #333;
                        }
                    }
                }
                &:nth-child(1) {
                    margin-right: 105px;
                }
            }
        }
    }
</style>