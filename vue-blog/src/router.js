import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail.vue'




Vue.use(Router) //third party plugin gebruiken door import en dan vue use

const router = new Router({
    routes: [
        {
            path: '/',
            component: Detail
        },


    ]
})

export default router