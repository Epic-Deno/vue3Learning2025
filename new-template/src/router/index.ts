/*
 * @Description: 路由主入口
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:24:43
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-27 11:02:15
 * @FilePath: /new-template/src/router/index.ts
 */
import { createRouter, createWebHistory, Router } from 'vue-router';
import { basicRoutes, errorsRoute, authRoutes } from '@/configs/route.config';

// 路由配置
const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        ...basicRoutes,
        ...errorsRoute,
        ...authRoutes
    ],
    scrollBehavior() {
        return { top: 0 };
      },
});

export default router;