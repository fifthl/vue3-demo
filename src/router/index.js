import {createRouter, createWebHashHistory} from "vue-router";



const routes = [
    {
        path: '/',
        name: 'Root',
        component: ()=>import('@/pages/List.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        props:(route)=>({tvid:route.query.tvid}),
        component:()=>import('@/pages/Moive.vue')
    }
]
const vueRouter = createRouter({
    routes: routes,
    history: createWebHashHistory(),
})

export default vueRouter