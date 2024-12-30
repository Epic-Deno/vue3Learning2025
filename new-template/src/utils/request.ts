/*
 * @Description: 请求的封装
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:02:45
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-30 11:42:31
 * @FilePath: /new-template/src/utils/request.ts
 */
import axios from 'axios';
import { RequestObject } from '@/types/request';
import type { AxiosError, AxiosRequestConfig, AxiosInstance } from 'axios'

const basicConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000
};


const service: AxiosInstance = axios.create({
    ...basicConfig
  })


  // axios 请求封装
  // 发起请求之前的拦截器
service.interceptors.request.use(
    config => {
      // 如果有token 就携带tokon
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    error => Promise.reject(error)
  );
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      const res = response.data;
      if (response.status !== 200) {
        return Promise.reject(new Error(res.message || "Error"));
      } else {
        const { code } = res
        if (code == '401') {
          window.localStorage.clear();
          return location.reload();
        }
        return res;
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
  export default service;