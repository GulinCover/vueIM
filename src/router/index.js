import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: ()=>import("@/pages/home/Index"),
    },
    {
        path: "/topic/page/:id",
        name: "topicPage",
        component: ()=>import("@/pages/topicPage/Index"),
    },
    {
        path: "/submit/topic",
        name: "submitTopicPage",
        component: ()=>import("@/pages/submitPage/RichTextEditor"),
    },
    {
        path: "/submit",
        name: "submitPage",
        component: ()=>import("@/pages/submitPage/Index"),
    },
    {
        path: "/error/:code",
        name: "errorPage",
        component: ()=>import("@/pages/errorPage/Index"),
    },
    {
        path: "/register",
        name: "registerPage",
        component: ()=>import("@/pages/registerLoginPage/Index"),
    },
    {
        path: "/user/page/:id",
        name: "userPage",
        component: ()=>import("@/pages/userPage/Index"),
    },
]

let router = new VueRouter({
    routes,
    mode: "history",
})

export default router;