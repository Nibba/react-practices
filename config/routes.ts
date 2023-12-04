export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '欢迎页',
    path: '/home',
    component: './Home',
  },
  // {
  //   name: '权限演示',
  //   path: '/access',
  //   component: './Access',
  //   routes:[{
  //     name: '首页',
  //     path: '/access/home',
  //     component: './Home',
  //   },]
  // },
  // {
  //   name: ' CRUD 示例',
  //   path: '/table',
  //   component: './Table',
  // },
  {
    name: '自定义Hooks实践',
    path: '/hooks',
    routes: [
      {
        name: 'useHover',
        path: '/hooks/useHover',
        component: './Hooks/hover',
      },
    ],
  },
];
