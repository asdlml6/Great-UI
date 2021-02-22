import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ComponentPage from '@/components/ComponentPage'
import GuideHome from '@/components/guide/GuideHome'
import GuideDesign from '@/components/guide/GuideDesign'
import GuideNav from '@/components/guide/GuideNav'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/componentPage',
            name: 'ComponentPage',
            component: ComponentPage
        },
        {
            path: '/guide/design/:value',
            name: 'GuideDesign',
            component: GuideHome,
            meta: {
                title: '指南 | Great-UI'
            }
        },
        {
            path: '/guide/nav',
            name: 'GuideNav',
            component: GuideHome,
            meta: {
                title: '指南 | Great-UI'
            }
        }
    ]
})
