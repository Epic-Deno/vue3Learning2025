/*
 * @Description: 请求的封装
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:02:45
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-29 11:34:21
 * @FilePath: /new-template/src/utils/request.ts
 */
import axios from 'axios';
import { RequestObject } from '@/types/request';
import type { AxiosError, AxiosRequestConfig } from 'axios'

const basicConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000
};


const service:  = axios.create({
    ...basicConfig
  })