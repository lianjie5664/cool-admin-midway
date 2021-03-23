/*
 * @Author: your name
 * @Date: 2021-03-19 11:09:01
 * @LastEditTime: 2021-03-19 11:53:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-admin-midway-master\src\app\modules\dict\config.ts
 */
import { Application } from 'egg';
import { ModuleConfig } from 'midwayjs-cool-core';

/**
 * 示例
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: '字典模块',
    // 模块描述
    description: '字典模块增删改查',
    // 中间件
    middlewares: [],
  } as ModuleConfig;
};
