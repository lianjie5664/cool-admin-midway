/*
 * @Author: your name
 * @Date: 2021-03-19 11:09:41
 * @LastEditTime: 2021-03-22 10:49:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-admin-midway-master\src\app\modules\dict\entity\info.ts
 */
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column } from 'typeorm';

/**
 * 字典信息
 */
@EntityModel('base_dict_info')
export class DictEntity extends BaseEntity {
  @Column({ comment: '名称' })
  label: string;

  @Column({ comment: '类型' })
  type: string;

  @Column({ comment: '值' })
  value: string;

  @Column({ comment: '父级' ,default: null})
  parentId: number;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'tinyint' })
  status: number;
}
