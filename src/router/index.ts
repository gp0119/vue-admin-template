import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/index.vue'
import example from './modules/example'
import nested from './modules/nested'
import group from './modules/group'
import type { AppRouteRecordRaw } from '@/router/types'
import { shallowRef } from 'vue'

export const constantRoutes: AppRouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hideInMenu: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    meta: { hideInMenu: true },
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/404',
    meta: { hideInMenu: true },
    component: () => import('@/pages/error-page/404.vue'),
  },
  {
    path: '/401',
    meta: { hideInMenu: true },
    component: () => import('@/pages/error-page/401.vue'),
  },
  {
    path: '/',
    name: 'dashboard',
    redirect: '/dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'DashboardOutlined',
      hideChildrenInMenu: true,
      affix: true,
    },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
      },
    ],
  },
]
export const asyncRoutes: AppRouteRecordRaw[] = [
  example,
  {
    path: '/form',
    name: 'Form',
    component: shallowRef(Layout),
    meta: {
      title: 'Form',
      icon: 'FormOutlined',
      hideChildrenInMenu: true,
    },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/pages/form/index.vue'),
      },
    ],
  },
  nested,
  group,
  { path: '/:pathMatch(.*)', redirect: '/404', meta: { hideInMenu: true } },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
})

export default router
