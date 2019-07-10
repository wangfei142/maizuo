const route = {
    path: '/',
    component: ()=>import('../pages/index'),
    children:[
        {
            path: 'center',
            component: ()=>import('../pages/center/root'), 
        }
    ]
}

export default route;
