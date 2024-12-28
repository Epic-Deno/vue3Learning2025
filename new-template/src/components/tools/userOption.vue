<!--
 * @Description: 操作菜单
 * @Author: zhang zhen
 * @Date: 2024-12-28 16:23:19
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 16:31:21
 * @FilePath: /new-template/src/components/tools/userOption.vue
-->
<template>
    <a-space size="large">
        <a-badge dot>
            <BellOutlined style="font-size: 16px" />
        </a-badge>
        <a-dropdown>
            <a-avatar
                src="https://p26-passport.byteacctimg.com/img/user-avatar/da1cbd344f3201f5aa9d1183ef02f330~40x40.awebp" style="cursor: pointer;" />
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                      基本信息
                    </a-menu-item>
                    <a-menu-item>
                       退出登录
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </a-space>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less" scoped></style>