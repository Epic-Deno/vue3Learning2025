<!--
 * @Description: 菜单组件
 * @Author: zhang zhen
 * @Date: 2024-12-28 16:04:31
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 16:10:06
 * @FilePath: /new-template/src/components/tools/menus/index.vue
-->
<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="dashborad">
            <HomeOutlined />
            <span>首页</span>
        </a-menu-item>
    </a-menu>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {
        HomeOutlined
    } from '@ant-design/icons-vue';
    import { useRoute } from "vue-router";
    const selectedKeys = ref<string[]>(['dashborad']);
    const { name } = useRoute();
    console.log(name)
</script>

<style lang="less" scoped></style>