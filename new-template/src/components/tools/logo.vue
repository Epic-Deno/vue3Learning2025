<!--
 * @Description: logo 组件
 * @Author: zhang zhen
 * @Date: 2024-12-28 15:43:28
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-28 15:53:35
 * @FilePath: /new-template/src/components/tools/logo.vue
-->
<template>
    <div class="logo_area">
        <img src="~@/assets/logo.png" alt="" class="logo_icon">
        <span class="name">Pony Admin</span>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.logo_area {
    display: flex;
    align-items: center;
    padding-left: .75rem;
    padding-right: .75rem;
    box-sizing: border-box;
    height: 49px;
    grid-gap: 0 15px;
    .logo_icon {
        width: 38px;
    }
    .name {
        font-weight: 600;
        font-size: 18px;
    }
}
</style>