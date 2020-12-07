import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: ()=>import("@/pages/home/Index"),
    },
    {
        path: "/topic/:id",
        name: "topicPage",
        component: ()=>import("@/pages/topicPages/TopicPage"),
    },
]

let router = new VueRouter({
    routes,
    mode: "history",
})

export default router;