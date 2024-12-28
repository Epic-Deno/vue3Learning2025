/*
 * @Description: 路由入口
 * @Author: zhang zhen
 * @Date: 2024-12-27 09:59:13
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 15:35:02
 * @FilePath: /new-template/src/configs/route.config.ts
 */
import type { RouteRecordRaw } from 'vue-router';
import { PageLayout } from '@/components/layouts/index';
// 基础路由
const basicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: PageLayout,
        redirect: '/dashborad',
        children: [
            {
                path: '/dashborad',
                name: 'dashborad',
                component: () => import('@/views/dashborad/index.vue'),
            }
        ]
    },

];

// 错误路由
const errorsRoute: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/errors/404.vue'),
    },
];

// 登录注册相关的路由
const authRoutes: Array<RouteRecordRaw> = [

];


export {
    basicRoutes,
    authRoutes,
    errorsRoute
};