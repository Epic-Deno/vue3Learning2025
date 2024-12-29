/*
 * @Description: 请求的封装
 * @Author: zhang zhen
 * @Date: 2024-12-27 10:02:45
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-29 11:27:24
 * @FilePath: /new-template/src/utils/request.ts
 */
import axios from 'axios';
import { RequestObject } from '@/types/request';

const basicConfig: RequestObject = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000
};