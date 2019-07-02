
const route = {

    path: '/',
    component: ()=>import('../pages/index'),
    children:[
        {
            path: 'act',
            component: ()=>import('../pages/act/root'), 
        }
    ]

}

export default route;