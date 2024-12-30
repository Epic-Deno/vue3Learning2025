/*
 * @Description: 请求的封装
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:02:45
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-30 09:21:55
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