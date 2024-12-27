/*
 * @Description: 配置
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:18:00
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-27 11:05:28
 * @FilePath: /new-template/src/main.ts
 */
import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from './router/index';


const app = createApp(App);
app.use(router);
app.use(Antd)
app.mount('#app')
