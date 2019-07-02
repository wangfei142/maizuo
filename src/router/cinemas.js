const route = {

    path: '/',
    component: ()=>import('../pages/index'),
    children:[
        {
            path: 'cinemas',
            component: ()=>import('../pages/cinemas/root'), 
        }
    ]

}

export default route;