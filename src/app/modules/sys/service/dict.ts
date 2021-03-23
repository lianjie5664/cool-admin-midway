/*
 * @Author: 5664
 * @Date: 2021-03-22 11:19:30
 * @LastEditTime: 2021-03-22 14:36:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-admin-midway-master\src\app\modules\sys\service\dict.ts
 */
import { Provide } from '@midwayjs/decorator';
import { BaseService } from 'midwayjs-cool-core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import * as _ from 'lodash';
import { DictEntity } from '../entity/info';

/**
 * 描述
 */
@Provide()
export class DictService extends BaseService {
  @InjectEntityModel(DictEntity)
  DictEntity: Repository<DictEntity>;

  /**
   * 获取字典列表
   */
  async list(query) {
    const { type } = query;
    const sql = `
      SELECT
      *
    FROM
      base_dict_info
      WHERE 1 = 1
      ${this.setSql(
      !_.isEmpty(type),
      'and type = (?)',
      [type]
    )}
      order by createTime desc
      `;
    return this.nativeQuery(sql);
  }
}

