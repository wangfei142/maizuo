const route = {
    path: '/',
    component: ()=>import('../pages/index'),
    redirect: "/films/nowPlaying",
    children:[
        {
            path: 'films',
            component: ()=>import('../pages/films/root'), 
            redirect: "/films/nowPlaying",
            children:[
                { path: "nowPlaying", component: () => import("../pages/films/children/nowPlaying.vue") },
                { path: "comingSoon", component: () => import("../pages/films/children/comingSoon.vue") }
            ]
        }
    ]
}

export default route;