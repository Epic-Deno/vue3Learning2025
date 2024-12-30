/*
 * @Description: 请求的枚举
 * @Author: zhang zhen
 * @Date: 2024-12-29 11:25:47
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-30 11:45:18
 * @FilePath: /new-template/src/types/request.ts
 */


// 定义请求对象类型
export interface RequestObject {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    data?: any;
    params?: any;
    headers?: any;
}

// 定义响应数据类型
export interface ResponseData<T = any> {
    code: number;
    message: string;
    data: T;
}

// 定义错误响应类型
export interface ErrorResponse {
    message: string;
    code?: number;
}
