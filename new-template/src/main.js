/*
 * @Description:初始化
 * @Author: zhang zhen
 * @Date: 2024-12-27 09:49:44
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-27 09:56:18
 * @FilePath: /new-template/src/main.js
 */
import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app')
