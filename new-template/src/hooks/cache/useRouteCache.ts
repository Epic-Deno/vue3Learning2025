/*
 * @Description: 路由缓存
 * @Author: zhang zhen
 * @Date: 2025-01-06 18:08:00
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-06 18:08:02
 * @FilePath: /new-template/src/hooks/cache/useRouteCache.ts
 */
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function useRouteCache() {
    const cachePages = ref<string[]>([]);

    const router = useRouter();
    const route = useRoute();
};