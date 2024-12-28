<!--
 * @Description: 管理菜单入口
 * @Author: zhang zhen
 * @Date: 2024-12-27 11:29:31
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 16:27:36
 * @FilePath: /new-template/src/components/layouts/pageLayout.vue
-->
<template>
    <a-layout class="layout-container">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <Logo />
            <Menus />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0 26px; display: flex;
            align-items: center;justify-content: space-between;">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                <userOption />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
    import Logo from '../tools/logo.vue';
    import { ref } from 'vue';
    import userOption from "../tools/userOption.vue";
    import {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    } from '@ant-design/icons-vue';
    import Menus from '../tools/menus/index.vue';
    const collapsed = ref<boolean>(false);

</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

.layout-container {
    height: 100vh;
}
</style>