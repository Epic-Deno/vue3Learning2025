<!--
 * @Description: 抽屉页面
 * @Author: zhang zhen
 * @Date: 2025-01-04 15:22:40
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-05 15:31:26
 * @FilePath: /new-template/src/views/example/modules/drawerView.vue
-->
<template>
    <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: red"
      title="Basic Drawer"
      placement="right"
      @after-open-change="afterOpenChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  const open = ref<boolean>(false);
  
  const afterOpenChange = (bool: boolean) => {
    console.log('open', bool);
  };
  
  const showDrawer = () => {
    open.value = true;
  };
  </script>
  
  