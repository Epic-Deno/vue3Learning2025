<!--
 * @Description: 首页
 * @Author: zhang zhen
 * @Date: 2024-12-27 11:00:54
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-01 15:43:51
 * @FilePath: /new-template/src/views/dashborad/index.vue
-->
<template>
    <a-row :gutter="16">
        <a-col :span="6" v-for="i in 6">
            <a-card hoverable style="width: 100%; margin-bottom: 16px;">
                <template #cover>
                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template #actions>
                    <setting-outlined key="setting" />
                    <edit-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
                <a-card-meta title="Card title" description="This is the description">
                    <template #avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </template>
                </a-card-meta>
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
</script>

<style scoped></style>