/*
 * @Author: your name
 * @Date: 2021-03-19 11:09:41
 * @LastEditTime: 2021-03-21 13:23:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-admin-midway-master\src\app\modules\dict\entity\info.ts
 */
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column } from 'typeorm';

/**
 * 政策实体类
 */
@EntityModel('base_policy_item')
export class PolicyItemEntity extends BaseEntity {
  @Column({ comment: '名称' })
  name: string;

  // @Column({ comment: '类型' })
  // typeId: number;

  @Column({ comment: '发布时间',type: 'datetime' })
  pubtime: string;

  @Column({ comment: '口径' })
  caliber: string;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'tinyint' })
  status: number;
}
