/*
 * @Description: 请求的封装
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:02:45
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-30 11:53:27
 * @FilePath: /new-template/src/utils/request.ts
 */
import axios from 'axios';
import { RequestObject, ResponseData, ErrorResponse } from '@/types/request';
import type { AxiosError, AxiosRequestConfig, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const basicConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000
};


const service: AxiosInstance = axios.create({
    ...basicConfig
  })
   
  // 请求拦截器
  service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 从 localStorage 获取 token
      const token = window.localStorage.getItem('token');
      if (token) {
        // 如果存在 token，则设置到请求头中
        config.headers['Authorization'] = token;
      }
      return config;
    },
    (error: AxiosError) => {
      // 对请求错误做些什么
      return Promise.reject(new Error(error.message || 'Request Error'));
    }
  );
   
  // 响应拦截器
  service.interceptors.response.use(
    (response: AxiosResponse) => {
      const res = response.data;
      const { status, statusText } = response;
   
      // 检查 HTTP 状态码
      if (status !== 200) {
        return Promise.reject(new Error(res.message || `HTTP Error ${status}: ${statusText}`));
      }
   
      // 检查业务逻辑状态码
      const { code } = res as { code: string }; // 假设响应数据中有 code 字段
      if (code === '401') {
        // 清除本地存储并重定向（注意：在浏览器环境中使用 window.location.reload()）
        window.localStorage.clear();
        window.location.reload();
        // 注意：这里返回 undefined 因为页面会重新加载，实际上这个返回值不会被用到
        return undefined as never; // 使用 never 类型表示这个分支不应该有返回值
      }
   
      return res;
    },
    (error: AxiosError) => {
      // 对响应错误做些什么
      return Promise.reject(new Error(error.message || 'Response Error'));
    }
  );
   
  export default service;