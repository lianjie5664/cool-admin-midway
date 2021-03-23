/*
 * @Author: your name
 * @Date: 2021-03-19 11:16:59
 * @LastEditTime: 2021-03-20 18:19:11
 * @LastEditors: Please set LastEditors
 * @Description: 获取系统字典
 * @FilePath: \cool-admin-midway-master\src\app\modules\dict\controller\dict.ts
 */
import { Get, Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { PolicyItemEntity } from '../../entity/item';

/**
 *  政策curd接口
 */
 @Provide()
 @CoolController({
    api: ['add', 'delete', 'update', 'info', 'list','page'],
    entity: PolicyItemEntity,
    // 分页查询配置
    pageQueryOp: {
      keyWordLikeFields: ['name'],
      addOrderBy: {
        updateTime: 'asc'
      }
    }
 })
 export class PolicyItemController extends BaseController {
    // @Inject()
    // demoGoodsService: DictService;
   /**
    * 其他接口
    */
   @Get('/other')
   async other() {
     return this.ok('hello, cool-admin!!!');
   }
 }