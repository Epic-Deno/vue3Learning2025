/*
 * @Description: 路由缓存
 * @Author: zhang zhen
 * @Date: 2025-01-06 18:08:00
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-07 21:28:37
 * @FilePath: /new-template/src/hooks/cache/useRouteCache.ts
 */
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function useRouteCache() {
    const cachePages = ref<string[]>([]);

    const router = useRouter();
    const route = useRoute();

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