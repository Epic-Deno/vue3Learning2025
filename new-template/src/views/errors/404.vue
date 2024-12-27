<!--
 * @Description: 404页面
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:41:06
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-27 11:19:59
 * @FilePath: /new-template/src/views/errors/404.vue
-->
<template>
    <div class="content-area">
        <a-result status="404" title="404" sub-title="对不起，当前页面上不存在.">
    <template #extra>
      <a-button type="primary" @click="handleBack">返回首页</a-button>
    </template>
  </a-result>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { push } = useRouter();

const handleBack = () => {
    push('/')
}
</script>

<style lang="less" scoped>
    .content-area {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>