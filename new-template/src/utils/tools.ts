/*
 * @Description: 工具类
 * @Author: zhang zhen
 * @Date: 2024-12-31 14:56:34
 * @LastEditors: zhang zhen
 * @LastEditTime: 2024-12-31 14:58:28
 * @FilePath: /new-template/src/utils/tools.ts
 */

/**
 * 找到最近一个 complete 为 0 的对象的索引，
 * 且确保该对象之前存在至少一个 complete 为 1 的对象。
 *
 * @param {Array} data - 数组对象
 * @returns {number} - 满足条件的对象索引，找不到则返回 -1
 */
export function findClosestCompleteZeroIndex(data) {
    // 找到最近的一个 complete 为 0 的对象的索引
    const indexOfCompleteZero = data.findIndex((item) => item.complete === 0);
  
    // 确保找到的对象之前存在至少一个 complete 为 1 的对象
    const hasCompleteOneBefore = data
      .slice(0, indexOfCompleteZero)
      .some((item) => item.complete === 1);
  
    // 如果满足条件，返回索引，否则返回 -1
    return hasCompleteOneBefore ? indexOfCompleteZero : 0;
  }
  
  /**
   * @description: 拆分完整文章单词
   * @param {*} paragraph
   * @return {*}
   */
  export function splitSentences(paragraph) {
    // 使用正则表达式匹配以句号、问号或感叹号结尾的句子，包括句子末尾的标点符号和可能的后续空格
    const regex = /(.+?[.!?])\s*/g;
    // 使用match方法获取所有匹配项，它们将作为数组元素返回
    const matches = paragraph.match(regex);
    // 移除可能由于段落末尾没有标点符号而产生的最后一个空元素（如果有的话）
    if (matches && matches[matches.length - 1] === '') {
      matches.pop();
    }
    // 原文正常大小写， 用于匹配的小写文本
    let result = [];
    for (const element of matches) {
      let item = element;
      let itemLower = item.toLowerCase();
      result.push({
        original: item,
        lower: itemLower
      });
    }
    return result;
  }
  
  /**
   * @description: 生成单词数组
   * @param {*} text
   * @return {*}
   */
  export function extractWords(text) {
    // 提取单词的正则表达式
    // 正则表达式：匹配单词和标点符号
    const regex = /[a-zA-Z0-9']+|[.,!?;(){}[\]"'-]/g;
    let tokens = text.match(regex) || [];
    let result = [];
    for (const element of tokens) {
      let itemLower = element.toLowerCase();
      result.push({
        original: element,
        lower: itemLower
      });
    }
    return result;
  }


  /**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj(obj) {
    if (!(typeof obj == 'object')) {
      return;
    }
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)
        && (obj[key] == null || obj[key] == undefined || obj[key] === '')) {
        delete obj[key];
      }
    }
    return obj;
  }
  /**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
  
  /**
   * 随机生成数字
   *
   * 示例：生成长度为 12 的随机数：randomNumber(12)
   * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
   *
   * @param1 最小值 | 长度
   * @param2 最大值
   * @return int 生成后的数字
   */
  export function randomNumber() {
    // 生成 最小值 到 最大值 区间的随机数
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    if (arguments.length === 1) {
      let [length] = arguments
      // 生成指定长度的随机数字，首位一定不是 0
      let nums = [...Array(length).keys()].map((i) => (i > 0 ? random(0, 9) : random(1, 9)))
      return parseInt(nums.join(''))
    } else if (arguments.length >= 2) {
      let [min, max] = arguments
      return random(min, max)
    } else {
      return Number.NaN
    }
  }