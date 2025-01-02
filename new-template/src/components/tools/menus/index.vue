<!--
 * @Description: 菜单组件
 * @Author: zhang zhen
 * @Date: 2024-12-28 16:04:31
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-02 10:09:27
 * @FilePath: /new-template/src/components/tools/menus/index.vue
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="handleClickMenus">
        <a-menu-item key="dashborad">
            <HomeOutlined />
            <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="example">
          <template #title>
            <span>
              <DatabaseOutlined />
              <span>示例</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {
        HomeOutlined,
        DatabaseOutlined
    } from '@ant-design/icons-vue';
    import { useRoute, useRouter } from "vue-router";
    const { name } = useRoute();
    const { push } = useRouter();
    const selectedKeys = ref<string[]>([name]);

    const handleClickMenus = (e) => {
        const { key } = e;
        push(key)
    }
</script>

<style lang="less" scoped></style>