/*
 * @Author: your name
 * @Date: 2021-03-19 15:26:53
 * @LastEditTime: 2021-03-19 15:37:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-admin-midway-master\src\app\modules\policy\config.ts
 */
import { Application } from 'egg';
import { ModuleConfig } from 'midwayjs-cool-core';

/**
 * 示例
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: '政策模块',
    // 模块描述
    description: '政策模块',
    // 中间件
    middlewares: [],
  } as ModuleConfig;
};
