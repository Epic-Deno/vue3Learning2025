/*
 * @Description: 路由缓存
 * @Author: zhang zhen
 * @Date: 2025-01-06 18:08:00
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-06 18:10:27
 * @FilePath: /new-template/src/hooks/cache/useRouteCache.ts
 */
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function useRouteCache() {
    const cachePages = ref<string[]>([]);

    const router = useRouter();
    const route = useRoute();

    route.matched.forEach((routeMatch) => {
        const name = routeMatch.name;
        if (typeof name !== 'string') return;
        // 配置了meta.keepAlive的路由组件添加到缓存
        if (routeMatch.meta.enableCache) {
            if (!name) {
              console.warn(`${routeMatch.path} 路由的组件名称name为空`);
              return;
            }
            if (!cachePages.value.includes(name)) {
              cachePages.value.push(name);
            }
          }
      });

      router.beforeEach((to, _from, next) => {
        const name = to.name;
        if (typeof name !== 'string') {
            next();
            return;
          }
          if (to.meta.enableCache && !cachePages.value.includes(name)) {
            cachePages.value.push(name);
          }
          next();
      });
      return {
        cachePages
      };
};