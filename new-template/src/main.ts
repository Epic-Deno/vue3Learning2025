/*
 * @Description: 配置
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:18:00
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-27 10:22:22
 * @FilePath: /new-template/src/main.ts
 */
import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app')
