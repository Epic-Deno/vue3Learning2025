<!--
 * @Description: 菜单组件
 * @Author: zhang zhen
 * @Date: 2024-12-28 16:04:31
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 16:21:38
 * @FilePath: /new-template/src/components/tools/menus/index.vue
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="handleClickMenus">
        <a-menu-item key="dashborad">
            <HomeOutlined />
            <span>首页</span>
        </a-menu-item>
        <a-menu-item key="test">
            <ExperimentOutlined />
            <span>测试</span>
        </a-menu-item>
    </a-menu>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {
        HomeOutlined,
        ExperimentOutlined
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