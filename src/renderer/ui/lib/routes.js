export default [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: ':sort',
        name: 'HomePage',
        component: () => import('../pages/home.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/hot'
  }
]
